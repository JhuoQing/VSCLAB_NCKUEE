#!/usr/bin/env python3
"""成員照片壓縮: members_raw/ → assets/img/members/；不修改資料檔。"""
import argparse
import json
import re
import sys
from pathlib import Path
from tempfile import NamedTemporaryFile

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("請先安裝 Pillow: python -m pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "members_raw"
OUT = ROOT / "assets" / "img" / "members"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--quality", type=int, default=82, help="WebP 品質 1–100 (預設 82)")
    parser.add_argument("--overwrite", action="store_true", help="允許更新既有 WebP")
    args = parser.parse_args()
    if not 1 <= args.quality <= 100:
        parser.error("--quality 必須介於 1 與 100")
    RAW.mkdir(exist_ok=True)
    files = sorted(p for p in RAW.iterdir() if p.is_file() and p.suffix.lower() in EXTS)
    if not files:
        print("請將 JPG、PNG、WebP 或 BMP 照片放入 members_raw/ 後重新執行。")
        return 0

    # 先檢查整批命名，避免同名 JPG/PNG 或大小寫差異互相覆蓋。
    names = set()
    for source in files:
        if not re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9_-]*", source.stem):
            parser.error(f"{source.name}: 檔名請使用英數字、連字號或底線")
        key = source.stem.lower()
        if key in names:
            parser.error(f"重複檔名: {source.stem}，請先重新命名")
        names.add(key)

    OUT.mkdir(parents=True, exist_ok=True)
    existing = {p.name.lower(): p for p in OUT.iterdir()}
    for source in files:
        name = source.stem + ".webp"
        old = existing.get(name.lower())
        if old is not None and (old.name != name or not args.overwrite):
            parser.error(f"輸出已存在: {old.name}；更新同名檔請加 --overwrite，大小寫衝突請先重新命名")

    failed = 0
    for source in files:
        dest = OUT / (source.stem + ".webp")
        temp = None
        try:
            with Image.open(source) as original:
                if getattr(original, "is_animated", False):
                    raise ValueError("不支援動畫圖片，請先匯出靜態照片")
                im = ImageOps.exif_transpose(original)
                im = im.convert("RGBA" if "A" in im.getbands() or "transparency" in im.info else "RGB")
                im.thumbnail((600, 800), Image.Resampling.LANCZOS)
                # 不攜帶原圖 EXIF/GPS 等中繼資料。
                im.info.clear()
                with NamedTemporaryFile(dir=OUT, suffix=".webp", delete=False) as handle:
                    temp = Path(handle.name)
                im.save(temp, "WEBP", quality=args.quality, method=6)
                temp.replace(dest)
                temp = None
            print(f"{source.name} → {dest.name} ({im.width}×{im.height}, {dest.stat().st_size / 1024:.1f} KB)")
            print("  photo: " + json.dumps(dest.relative_to(ROOT).as_posix()))
        except (OSError, ValueError, Image.DecompressionBombError) as error:
            failed += 1
            print(f"失敗 {source.name}: {error}", file=sys.stderr)
        finally:
            if temp is not None:
                temp.unlink(missing_ok=True)
    print(f"完成: {len(files) - failed} 張成功、{failed} 張失敗。原圖保留，請手動更新 photo 欄位。")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

