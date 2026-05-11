"""Generate every image listed in IMAGES via OpenAI's gpt-image-1.

- Resumable: keeps generation_log.json, skips entries already done.
- Saves originals as PNG to images/originals/<stem>.png
- Tracks cost per image and total.

Edit the MASTER prefix and IMAGES list below for your project.
"""
import os, sys, json, base64, time, argparse
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parent.parent
LOG_PATH = ROOT / "generation_log.json"
ORIG_DIR = ROOT / "images" / "originals"
ORIG_DIR.mkdir(parents=True, exist_ok=True)

load_dotenv(dotenv_path=ROOT / ".env")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# gpt-image-1 output token price (USD per 1M tokens)
PRICE_PER_MTOK = 40.0


# ─── EDIT THIS for your project ───────────────────────────────────────────

MASTER = (
    "STYLE: Editorial photography in the style of a premium business "
    "magazine. Natural soft lighting, slightly cool palette consistent "
    "with deep electric blue and warm amber accents. Confident, "
    "considered, modern mood — professional, not corporate cliche. "
    "Realistic photographic style with shallow depth of field where "
    "appropriate. Subjects given breathing room. No people's faces in "
    "primary focus (hands and gear are fine). No text, no logos, no "
    "watermarks, no visible signage of any kind. The image should look "
    "like it could appear in a long-form business article about a "
    "Sydney digital agency.\n"
    "SUBJECT: {subject}\n"
    "ASPECT RATIO: {aspect}"
)

# Sizes for gpt-image-1: 1536x1024 (landscape), 1024x1024 (square), 1024x1536 (portrait)
LS = "1536x1024"
SQ = "1024x1024"
PT = "1024x1536"
HIGH = "high"
MED = "medium"
LOW = "low"

# Hero images for every page (16 total). Each is 1536x1024 landscape, generated
# at MEDIUM quality (~$0.06 each). resize_images.py crops to 1200x675 for hero
# delivery. The same hero JPG is referenced as og:image in page <head>.
IMAGES = [
    ("hero-home",
     "Overhead view of a clean modern workspace: a slim laptop showing an "
     "abstract analytics dashboard with line graphs in deep electric blue, "
     "a small notebook with a pen, a single cup of black coffee, and a "
     "potted plant. Sydney Northern Beaches morning light streaming from "
     "the left. Editorial composition with negative space on the right.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-sydney",
     "Sydney Harbour skyline at dusk viewed from the Northern Beaches, "
     "with the Harbour Bridge faint in the background and warm amber "
     "city lights starting to glow against a deep electric blue sky. "
     "Editorial wide composition, soft focus on the foreground bushland, "
     "sharp focus on the distant skyline.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-services-sydney",
     "Close-up of hands at a laptop sketching a website wireframe in a "
     "leather-bound notebook beside the keyboard. Black ink pen visible. "
     "Wireframe boxes drawn in straight lines. Warm desk lamp light from "
     "the right. Shallow depth of field, focus on the notebook.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-packages-sydney",
     "A clean minimalist desk with a single open notebook, a chrome pen, "
     "and a small abstract chart on the page drawn in deep blue ink, "
     "showing three rising bars. Soft morning natural light from a "
     "window on the left. Negative space on the right. Editorial, "
     "uncluttered composition.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-local-seo-sydney",
     "A tradie's work van side mirror reflecting a phone screen showing "
     "a Google-style map result with a pin and rating stars. The "
     "background is a Sydney suburban street with native eucalyptus "
     "trees in soft focus. Warm late-afternoon light, deep blue sky. "
     "No logos or text on the van.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-tradies",
     "Tradie hands holding a smartphone showing an abstract map result "
     "with location pins, in the foreground. Background is a blurred "
     "Sydney work site: a van, ladder, tools faintly visible. Warm "
     "Australian afternoon light, deep blue sky. Editorial composition, "
     "no logos or branded text.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-plumbers",
     "Plumber's tools laid out on a clean workbench: a pipe wrench, a "
     "pair of pliers, a torch, and a measuring tape. Top-down composition, "
     "soft natural side-light, warm amber tones on the metal. Minimal, "
     "considered editorial styling.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-electricians",
     "Close-up of an electrician's hands at a residential switchboard, "
     "using a multimeter probe to test a circuit. Wire colours visible "
     "in deep blue and amber tones. Sharp focus on the multimeter, soft "
     "background. No face visible. Editorial, professional.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-vets",
     "A clean veterinary clinic consult room. A stethoscope draped over "
     "a clipboard on a stainless examination table, a small potted "
     "plant on the windowsill behind. Cool natural daylight from the "
     "left, soft focus background. Calm reassuring editorial mood.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-pest-control",
     "Pest control technician's professional gear arranged on the open "
     "tray of a ute: a safety-yellow respirator, gloves, a sprayer "
     "wand, a clipboard. Top-down view, soft natural light. No logos "
     "visible. Editorial professional services aesthetic.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-answer-engine-optimisation",
     "Abstract composition: a smartphone held in shallow focus showing "
     "an AI chat interface with text bubbles in deep electric blue. "
     "Soft bokeh background suggesting other digital screens out of "
     "focus. Cool palette with accents of warm amber from a nearby "
     "warm light. Editorial tech mood.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-generative-engine-optimisation",
     "A modern workspace with three devices visible — a laptop, a "
     "tablet, and a smartphone — each showing a different abstract "
     "AI chat interface with subtle deep blue accents. Soft natural "
     "light from the left, shallow depth of field. Editorial business "
     "magazine composition.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-consultant-sydney",
     "A consultant's workspace: a slim laptop, a leather notebook with "
     "an open pen, a single coffee cup, and through the window behind, "
     "a soft-focus view of Sydney Northern Beaches eucalyptus canopy "
     "in golden hour light. Negative space on the right side. "
     "Editorial portrait composition.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-about",
     "A quiet residential street in Belrose on Sydney's Northern Beaches "
     "at golden hour. Native eucalyptus trees lining the road, dappled "
     "warm light through the canopy, a hint of a clean modern home in "
     "the soft-focus distance. Editorial Australian suburban "
     "atmosphere, deep blue sky above.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-contact",
     "A smartphone resting on a clean desk beside an open notebook with "
     "a pen, and a single mug of black coffee. Soft natural light from "
     "the left, deep shadow on the right. Calm direct editorial mood. "
     "Negative space, uncluttered composition.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-privacy",
     "A close-up of a single padlock symbol abstractly engraved on a "
     "matte slate surface, with a slim laptop slightly out of focus "
     "behind. Cool deep blue tones, single soft natural light source "
     "from the left. Editorial, restrained composition.",
     LS, MED, "hero", "16:9 landscape"),

    # Phase 2 additions
    ("hero-seo-northern-beaches",
     "Sydney's Northern Beaches coastline at golden hour, viewed from a "
     "headland: long stretch of sand, deep blue ocean, a sliver of "
     "suburban green ridge in the distance. Editorial wide composition, "
     "warm sky meeting cool ocean. No people, no logos.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-belrose",
     "A quiet leafy residential street in Belrose, Sydney's Northern "
     "Beaches: native eucalyptus canopy overhead, dappled warm light on "
     "the road, a hint of a modest mid-century home in the soft-focus "
     "background. Deep blue sky above. Editorial Australian suburban mood.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-landscapers",
     "A landscaped backyard mid-installation: a stone retaining wall in "
     "warm grey, a strip of fresh turf rolled out, a small wheelbarrow of "
     "soil to the side. Soft afternoon natural light, deep blue sky, "
     "no people visible. Editorial garden-design aesthetic.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-solar",
     "Close detail of a solar panel array on a modern residential roof "
     "at golden hour: panels in deep blue catching the warm light, "
     "Sydney sky in the background fading to amber. Clean composition, "
     "no logos visible, editorial energy-and-tech mood.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-for-builders",
     "Detailed view of a modern Australian home extension under "
     "construction: clean timber framing, blueprints folded on a sawhorse, "
     "a measuring tape and pencil. Warm natural light, no people, no "
     "logos. Editorial residential-construction aesthetic.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-best-seo-agency-sydney",
     "An overhead view of two coffee cups on a small cafe table with a "
     "leather notebook between them, the notebook page showing a clean "
     "list written in pen. Soft natural side-light, Sydney morning mood. "
     "Negative space, editorial comparison aesthetic.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-ai-seo-agency",
     "Abstract: a smartphone shown in shallow focus displaying a chat-"
     "bubble interface with deep electric blue accents. Out-of-focus "
     "bokeh of warm amber light in the background suggesting other "
     "devices. Editorial tech atmosphere, no logos or readable text.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-seo-vs-google-ads",
     "Editorial split composition: left half shows a sprouting plant in "
     "soft focus with deep blue background suggesting growth over time; "
     "right half shows a single arrow-line graph drawn on a notebook page "
     "in amber ink. Soft natural light, no logos.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-how-to-rank-on-google",
     "Top-down view of an open notebook with a numbered list (1. 2. 3.) "
     "drawn in clean ink, a pen resting beside it, and a single mug of "
     "coffee in the corner. Soft natural light from the left, deep "
     "shadow on the right. Editorial how-to aesthetic.",
     LS, MED, "hero", "16:9 landscape"),

    ("hero-affordable-seo-sydney",
     "Top-down view of an empty piggy bank beside a single coin and a "
     "slim notebook with neat handwritten figures. Soft window light from "
     "the left. Deep blue and amber accents. Editorial honest-pricing "
     "aesthetic, restrained composition.",
     LS, MED, "hero", "16:9 landscape"),
]

# ──────────────────────────────────────────────────────────────────────────


def load_log():
    if LOG_PATH.exists():
        return json.loads(LOG_PATH.read_text())
    return {"completed": {}, "failed": {}, "total_cost_usd": 0.0}


def save_log(log):
    LOG_PATH.write_text(json.dumps(log, indent=2))


def generate_one(stem, subject, size, quality, aspect):
    prompt = MASTER.format(subject=subject, aspect=aspect)
    t0 = time.time()
    r = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size=size,
        quality=quality,
        n=1,
    )
    elapsed = time.time() - t0
    img_bytes = base64.b64decode(r.data[0].b64_json)
    out = ORIG_DIR / f"{stem}.png"
    out.write_bytes(img_bytes)
    out_tokens = r.usage.output_tokens if r.usage else 0
    cost = out_tokens * PRICE_PER_MTOK / 1_000_000
    return {
        "stem": stem,
        "size": size,
        "quality": quality,
        "elapsed_s": round(elapsed, 1),
        "out_tokens": out_tokens,
        "cost_usd": round(cost, 4),
        "bytes": len(img_bytes),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="Show what would be generated, don't call API.")
    ap.add_argument("--start", type=int, default=0)
    ap.add_argument("--max", type=int, default=len(IMAGES))
    args = ap.parse_args()

    if not IMAGES:
        print("IMAGES list is empty. Edit scripts/generate_images.py and add your manifest.")
        return 1

    log = load_log()
    work = IMAGES[args.start:args.start + args.max]

    print(f"Total in manifest: {len(IMAGES)}")
    print(f"Already completed:  {len(log['completed'])}")
    print(f"Cost so far:        ${log['total_cost_usd']:.2f}")
    print(f"Processing:         {len(work)} entries")
    print()

    if args.dry_run:
        for entry in work:
            stem = entry[0]
            done = stem in log["completed"]
            print(f"  {'OK' if done else '..'} {stem}  size={entry[2]}  q={entry[3]}")
        return 0

    for i, entry in enumerate(work, args.start):
        stem, subject, size, quality, out_dir, aspect = entry
        if stem in log["completed"]:
            print(f"[{i:3d}] SKIP (done)  {stem}")
            continue
        try:
            print(f"[{i:3d}] GEN  {stem}  size={size}  q={quality}  ", end="", flush=True)
            result = generate_one(stem, subject, size, quality, aspect)
            log["completed"][stem] = result
            log["total_cost_usd"] = round(log["total_cost_usd"] + result["cost_usd"], 4)
            log["failed"].pop(stem, None)
            save_log(log)
            print(f"OK  {result['elapsed_s']}s  ${result['cost_usd']}  total=${log['total_cost_usd']}")
        except KeyboardInterrupt:
            print("\nInterrupted.")
            save_log(log)
            return 1
        except Exception as e:
            print(f"FAIL  {type(e).__name__}: {str(e)[:120]}")
            log["failed"][stem] = {
                "error": f"{type(e).__name__}: {str(e)}",
                "size": size,
                "quality": quality,
            }
            save_log(log)
            es = str(e).lower()
            if "rate limit" in es or "429" in es:
                print("  > rate-limited, sleeping 30s")
                time.sleep(30)
            elif "billing" in es or "quota" in es or "insufficient" in es:
                print("  > billing issue. Stopping.")
                return 2

    print(f"\nDone. {len(log['completed'])}/{len(IMAGES)}. Total: ${log['total_cost_usd']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
