"""
Shrink and convert the TechHub product pictures (run this on your own computer).

How to use:
  1. Install Python 3 and Pillow:   pip install pillow
  2. Put this file in the SAME folder as your product pictures (.jpg / .png).
  3. Run:                           python optimize_images.py
  4. A new folder called "optimized" is created with smaller .webp copies.

The original pictures are never changed. If you use the .webp files, remember to
rename the image names in script.js (for example samsung.jpg -> samsung.webp),
or keep the same names by changing OUTPUT_FORMAT below to "keep".
"""
import os
from PIL import Image

MAX_SIZE = 800          # longest side in pixels (product cards never need more)
QUALITY = 82            # 70-90 is a good range
OUTPUT_FORMAT = "webp"  # "webp" or "keep" (keeps .jpg/.png, only shrinks them)
OUT_DIR = "optimized"

os.makedirs(OUT_DIR, exist_ok=True)
saved_total = 0
for name in sorted(os.listdir(".")):
    base, ext = os.path.splitext(name)
    if ext.lower() not in (".jpg", ".jpeg", ".png"):
        continue
    img = Image.open(name)
    img.thumbnail((MAX_SIZE, MAX_SIZE))
    if OUTPUT_FORMAT == "webp":
        out = os.path.join(OUT_DIR, base + ".webp")
        img.save(out, "WEBP", quality=QUALITY, method=6)
    else:
        out = os.path.join(OUT_DIR, name)
        if ext.lower() == ".png":
            img.save(out, optimize=True)
        else:
            img.convert("RGB").save(out, quality=QUALITY, optimize=True)
    before, after = os.path.getsize(name), os.path.getsize(out)
    saved_total += before - after
    print(f"{name}: {before // 1024} KB -> {after // 1024} KB")
print(f"Done. Saved about {saved_total // 1024} KB in total.")
