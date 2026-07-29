from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


WIDTH, HEIGHT = 1200, 630
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og.png"
FONT_DIR = Path("C:/Windows/Fonts")


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT_DIR / name), size)


image = Image.new("RGB", (WIDTH, HEIGHT), "#f5f0e6")
draw = ImageDraw.Draw(image)

# Right-side engineering dashboard field.
draw.ellipse((610, -330, 1500, 780), fill="#062a25")
draw.ellipse((645, -305, 1490, 750), outline="#0a7e70", width=8)
draw.ellipse((668, -285, 1480, 730), outline="#d9c9a5", width=2)

ink = "#07332d"
teal = "#087d70"
mint = "#68d7bf"
muted = "#41635c"
panel_line = "#37665e"
panel_fill = "#092f2a"

draw.text((48, 123), "Om Bhartiya", font=font("georgia.ttf", 82), fill=ink)
draw.text(
    (51, 255),
    "Data & Operations Analyst",
    font=font("arialbd.ttf", 28),
    fill=ink,
)
draw.line((52, 319, 585, 319), fill=teal, width=3)
draw.ellipse((47, 313, 59, 325), fill=teal)
draw.text(
    (51, 357),
    "Power BI  |  Microsoft Fabric  |  SQL",
    font=font("arialbd.ttf", 28),
    fill=teal,
)
draw.text(
    (51, 409),
    "PySpark  |  ETL  |  Workflow Apps",
    font=font("arialbd.ttf", 28),
    fill=teal,
)
draw.multiline_text(
    (51, 485),
    "Turning shop-floor operations\ninto decision-ready data.",
    font=font("arial.ttf", 31),
    fill=ink,
    spacing=10,
)

# Compact KPI cards.
card_y = 82
for index, value in enumerate(("90%", "15+", "5K+")):
    x = 775 + index * 135
    draw.rounded_rectangle(
        (x, card_y, x + 116, card_y + 100),
        radius=12,
        fill=panel_fill,
        outline=panel_line,
        width=2,
    )
    draw.text((x + 15, card_y + 16), value, font=font("arialbd.ttf", 27), fill=mint)
    label = ("refresh", "stakeholders", "rows/load")[index]
    draw.text((x + 15, card_y + 60), label, font=font("arial.ttf", 14), fill="#9bc2b9")

# Trend panel.
draw.rounded_rectangle(
    (775, 208, 1135, 391),
    radius=16,
    fill=panel_fill,
    outline=panel_line,
    width=2,
)
for y in (252, 296, 340):
    draw.line((797, y, 1114, y), fill="#184a43", width=1)
for x in (850, 925, 1000, 1075):
    draw.line((x, 230, x, 367), fill="#184a43", width=1)
points = [
    (797, 348),
    (835, 326),
    (871, 332),
    (910, 292),
    (948, 307),
    (985, 271),
    (1024, 282),
    (1064, 243),
    (1114, 221),
]
draw.line(points, fill=mint, width=4, joint="curve")
for x, y in (points[0], points[-1]):
    draw.ellipse((x - 6, y - 6, x + 6, y + 6), fill=mint)

# Pipeline stages and output bars.
draw.rounded_rectangle(
    (775, 419, 950, 568),
    radius=15,
    fill=panel_fill,
    outline=panel_line,
    width=2,
)
for index, x in enumerate((798, 835, 872, 909)):
    top = (520, 492, 465, 443)[index]
    draw.rounded_rectangle((x, top, x + 22, 545), radius=4, fill=teal)
draw.text((796, 437), "PIPELINE", font=font("arialbd.ttf", 13), fill="#9bc2b9")

draw.rounded_rectangle(
    (972, 419, 1135, 568),
    radius=15,
    fill=panel_fill,
    outline=panel_line,
    width=2,
)
for index, y in enumerate((453, 487, 521)):
    draw.ellipse((995, y, 1007, y + 12), fill=mint)
    draw.line((1022, y + 6, 1110 - index * 12, y + 6), fill="#5e8d83", width=4)
draw.text((994, 437), "DELIVERY", font=font("arialbd.ttf", 13), fill="#9bc2b9")

image.quantize(colors=64, method=Image.Quantize.MEDIANCUT).save(
    OUTPUT,
    "PNG",
    optimize=True,
)
print(f"Generated {OUTPUT}")
