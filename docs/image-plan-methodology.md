# Image plan methodology

How to plan and generate ~100 editorial images that feel like one
photographer shot the whole site.

---

## The numbers

For a typical 19-page SEO site:

| Image type | Count per page | Total |
|---|---|---|
| OG / social | 1 | 19 |
| Hero | 1 | 19 |
| Inline (per ~500 words of body) | 3-5 | 60-80 |
| **Total** | | **~100** |

Cost on `gpt-image-1`:
- Hero / OG at high quality (1536×1024): ~$0.17 each → $6.50 for 38
- Inline at medium (varies): ~$0.06 each → $4 for 60-80
- **Total: ~$10-15** per site, allowing for some regenerations

---

## The four-part anatomy of a good prompt

```
STYLE: [universal style block — same on every prompt]
SUBJECT: [specific to this image]
ASPECT RATIO: [16:9 / 1:1 / 4:3 / 2:3]
NEGATIVE: [things to exclude — text, logos, fake smiles, etc.]
```

Bake the STYLE and NEGATIVE into a master prefix. Vary only SUBJECT and ASPECT
per image. This is what produces visual consistency across 100 images.

---

## Universal style block (start here, customise to brand)

```
STYLE: Editorial photography in the style of a premium magazine. 
Natural soft lighting, warm and gentle. Muted palette consistent with 
the brand — sage green, warm white, natural wood, soft cream, with 
subtle indigo accents. Calm, considered, reassuring mood. Realistic 
photographic style with shallow depth of field where appropriate. 
Subjects given breathing room. No text, no logos, no watermarks, 
no visible signage. No fake smiles or perfect-poster aesthetics. 
The image should look like it could appear in a long-form article.
```

---

## Subject-writing rules

- **Be specific.** "Dog in living room" → "A Border Collie lying calmly on a warm timber floor, partly lit by late-afternoon sun streaming through a window, head resting on paws, eyes half-closed."
- **Reference the brand context.** "Warm pale timber kitchen floor" not just "kitchen floor".
- **Compose with negative space.** Mention where the focus is and where the empty space goes ("composition wide, subject in left third").
- **Specify what's NOT in shot** for OG images ("flat-lay with negative space on the right two-thirds for branding").

---

## Hands in frame, faces out of frame

This is the single biggest decision that makes the image set look "editorial"
rather than "stocky". Reasons:

1. Faces in image gen tend to look slightly off — the uncanny valley
2. Faces date the imagery (fashion, hair, eyewear all change)
3. Sites without team pages (rank-and-rent) shouldn't have fake personas
4. Hands in shot communicate care/expertise without identifying anyone
5. Models stay generic enough to never feel fake

Apply unless your brand is specifically about real people. Phrasing:
- "Only hands and lower body visible"
- "Person's face partially out of frame"
- "Photographed from above, hands at the edge of frame"

---

## The image manifest

Centralise every image as a dict in `scripts/generate_images.py`. Schema:

```python
IMAGES = [
    # (stem, subject, size, quality, out_dir, aspect_label)

    # ─── HOMEPAGE ──────────────────────────────────────
    ("og-home",
     "Top-down editorial flat-lay on warm white linen surface — a coiled "
     "leather lead, a folded sage blanket, a worn ceramic water bowl, dried "
     "eucalyptus. Soft natural side lighting. Negative space on the right "
     "for branding.",
     LS, HIGH, "og", "16:9 landscape"),

    ("hero-home",
     "A Border Collie lying calmly on warm pale timber floor, partly lit by "
     "warm late-afternoon sun. Eyes half-closed and content. Composition "
     "wide, dog placed in left third with negative space on right.",
     LS, HIGH, "hero", "16:9 landscape"),

    # ─── PAGE 2 ───────────────────────────────────────
    # ...
]
```

This list of dicts becomes:
1. The OpenAI API call manifest (`generate_images.py`)
2. The resize map (`resize_images.py` reads it)
3. The HTML insertion map (`insert_html.py` references stems)

One source of truth — change a prompt in one place, regenerate, the rest follows.

---

## Quality tier budget

| Image use | Tier | Reason |
|---|---|---|
| OG / social (visible everywhere site is shared) | high | First impression, always rendered to user |
| Hero (above the fold, LCP candidate) | high | Drives perceived quality |
| Inline (lazy-loaded) | medium | Often viewed at smaller sizes |
| Card thumbnails | medium | Tiny final size, no need to overspend |

Don't use `low` quality — produces noticeably soft results.

---

## Aspect ratio decisions

| Aspect | Use case | gpt-image-1 size |
|---|---|---|
| 16:9 (landscape) | Hero, OG, wide inline | 1536×1024 |
| 4:3 | Inline supporting an idea | 1024×1024 (then crop) |
| 1:1 (square) | Card thumbnails, macro shots | 1024×1024 |
| 2:3 (portrait) | Rare; full-bleed mobile section | 1024×1536 |

---

## Sensitive topics

For pages on sensitive subjects (illness, death, financial hardship, mental
health, children, etc.), the imagery has to be calm, dignified, never
exploitative. Specifics:

- Avoid distressed expressions, tears, dramatic lighting
- Show the *aftermath* / *recovery* / *care*, not the crisis itself
- Hands and environment instead of faces
- Soft natural light only — no harsh dramatic shadows

The source kit's emergency-vet-Sydney page does this well — the cover image
is a vet's hands gently placing a Labrador's paw on a folded towel, not
a panicked owner.

---

## Common image failures and fixes

| Symptom | Cause | Fix |
|---|---|---|
| Image has weird text on signs/screens | Model trying to render text | Add "no text, no logos, no signage" to NEGATIVE |
| Pet looks slightly wrong (extra paw, weird eyes) | Common in motion shots | Specify "calm, still, lying down"; regenerate if it persists |
| Image looks like cartoony AI art | Subject too vague or too cute | Add "realistic photographic style, shallow depth of field, editorial" |
| Lighting too dramatic | Default model bias | Add "natural soft daylight, warm tones" |
| Saturated / vivid colours | Default model bias | Specify "muted palette, soft tones" |
| Person's face looks off | Model rendering humans | Specify "face out of frame" or "photographed from behind" |

---

## After generation: what to do with originals

The kit puts originals in `images/originals/`. Those are your masters at
1024-1536 px PNG. Keep them committed to the repo (~200-250 MB) — you'll
want them if you ever:
- Re-export at different dimensions
- Generate a thumbnail you didn't plan for
- Re-compress at different quality

Worth the disk space. Github accepts repos under 5 GB without issue.
