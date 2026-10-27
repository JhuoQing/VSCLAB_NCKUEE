#!/usr/bin/env python3
"""相簿小工具:壓縮照片 + 產生縮圖 + 重寫 data/gallery.js

用法(在專案根目錄):
    pip install pillow
    python tools/make_gallery.py

資料夾約定:
    photos_raw/<相簿代號>/*.jpg|png|webp     ← 你把原始照片丟這裡(不會被上傳,見 .gitignore)
    photos_raw/<相簿代號>/album.json         ← 可選,設定標題/日期/封面/說明,例如:
        {
          "title": "2026 CACS 研討會",
          "title_en": "CACS 2026",
          "date": "2026-10",
          "cover": "03.webp",
          "captions": { "01": "海報發表", "02": "與會合影" }
        }
輸出:
    assets/img/gallery/<相簿代號>/01.webp(原圖,長邊 ≤1800px)與 01_t.webp(縮圖,長邊 ≤640px)
"""
import json
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    sys.exit("請先安裝 Pillow:pip install pillow")

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "photos_raw"
OUT = ROOT / "assets" / "img" / "gallery"
DATA = ROOT / "data" / "gallery.js"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}
FULL, THUMB, Q_FULL, Q_THUMB = 1800, 640, 82, 78


def save(im: Image.Image, path: Path, long_edge: int, quality: int):
    im = im.copy()
    im.thumbnail((long_edge, long_edge), Image.LANCZOS)
    im.save(path, "WEBP", quality=quality, method=6)
    return path.stat().st_size


def main():
    if not RAW.exists():
        RAW.mkdir()
        sys.exit(f"已建立 {RAW};請把照片放進 photos_raw/<相簿代號>/ 後重新執行。")

    albums = []
    for folder in sorted(p for p in RAW.iterdir() if p.is_dir()):
        files = sorted(f for f in folder.iterdir() if f.suffix.lower() in EXTS)
        if not files:
            continue
        meta = {}
        if (folder / "album.json").exists():
            meta = json.loads((folder / "album.json").read_text(encoding="utf-8"))
        caps = meta.get("captions", {})
        dest = OUT / folder.name
        dest.mkdir(parents=True, exist_ok=True)

        photos = []
        for i, f in enumerate(files, 1):
            stem = f"{i:02d}"
            with Image.open(f) as im:
                im = ImageOps.exif_transpose(im).convert("RGB")
                kb = save(im, dest / f"{stem}.webp", FULL, Q_FULL) // 1024
                save(im, dest / f"{stem}_t.webp", THUMB, Q_THUMB)
            base = f"assets/img/gallery/{folder.name}/{stem}"
            photos.append({"src": f"{base}.webp", "thumb": f"{base}_t.webp", "caption": caps.get(stem, "")})
            print(f"  {folder.name}/{f.name} → {stem}.webp ({kb} KB)")

        cover = meta.get("cover", "01.webp")
        albums.append({
            "id": folder.name,
            "title": meta.get("title", folder.name),
            "title_en": meta.get("title_en", ""),
            "date": meta.get("date", ""),
            "cover": f"assets/img/gallery/{folder.name}/{cover}",
            "photos": photos,
        })

    if not albums:
        sys.exit("photos_raw/ 裡沒有找到照片。")

    albums.sort(key=lambda a: a["date"], reverse=True)  # 新的相簿排前面
    header = "/* 由 tools/make_gallery.py 自動產生,可再手動調整標題與說明 */\n"
    DATA.write_text(header + "window.GALLERY = " + json.dumps(albums, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print(f"\n完成:{len(albums)} 本相簿,已寫入 {DATA.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
