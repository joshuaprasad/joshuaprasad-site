# joshuaprasad.com

Josh Prasad's personal site: professor, lab, and consulting practice (Prasad & Associates) on one domain. Plain static HTML, hosted on GitHub Pages from `main`. No build step, no framework, no dashboard.

**Josh edits this site by giving notes to Claude, never by touching files.** A note like "add Lander's photo" or "drop the second testimonial" should be acted on directly: make the change, commit, push. Pages redeploys on push within a minute or two. Keep him out of the files.

## Where things live

| File | Page | What's on it |
|---|---|---|
| `index.html` | Home | Hook, the ownership rating scale, name and titles, two routes (Consulting, the Lab), Get in touch |
| `about.html` | About | Five paragraphs of bio, first person |
| `lab.html` | Research & the Lab | Lab description, Scholar/ORCID links, current members, alumni, Join |
| `consulting.html` | Consulting | Prasad & Associates: services, selection work, evidence paragraph, testimonials |
| `contact.html` | Contact | Two email addresses split by purpose, profile links |
| `style.css` | all | The one stylesheet. Colors are tokens at the top; change a token, never a rule |
| `images/` | Lab | Member headshots, `firstname.jpg`, roughly square, under ~100KB |

**The header nav and footer are repeated in all five HTML files.** Any change to either has to be made in all five. Each page marks its own nav link with `aria-current="page"`.

**Lab members.** Each person is an `<li class="person">` in `lab.html`: a photo (or a `<span class="initials">` when there's no photo), then name linked to LinkedIn, pronouns in `<span class="pron">`, and one short paragraph. To graduate someone, move their `<li>` to the Alumni list and drop the pronoun span to match the others. To add a photo, save it as `images/firstname.jpg` and swap the initials span for an `<img>`.

## Rules for any copy change

The approved source copy is `Execution/site-copy.md` in the separate `business-reboot` repo. If the two disagree, ask Josh which wins.

- **First person**, in Josh's voice.
- **No em dashes.** His substitute is a spaced hyphen ` - `; colons and periods also fine.
- No "not just X but Y" constructions. No *crucial, pivotal, underscore, delve, foster, showcase, tapestry, testament, robust, seamless*. Plain verbs (*is*, not *serves as*).
- **Never the word "instrument."** Use *measure* or *assessment*.
- **Claims about companies stay scoped to what job postings say**, never what companies do.
- **CSU appears as biography only** (About, and his lab card). No CSU logo, marks, or green and gold. **The Consulting page names no university** except the one factual line about selection work he runs.
- The testimonials sit under "From AI adoption engagements" so they're never read as selection outcomes. Keep that heading.
- Deliberately absent, don't add back without Josh asking: the 30%→80% AI-adoption figures, the canceled NSF Rocky Mountain AMP STEM grant, the grad-school military hiring-tools work, a personal-motivation paragraph on About.

## Design rules

The look is meant to feel *measured*: text-led, cool, restrained, and phone-first.

- Type: **Newsreader** (serif) for reading, **Public Sans** for navigation, labels, and buttons. Both come from Google Fonts.
- Palette tokens in `style.css`: paper, ink blue, slate, rule, one muted teal accent for links. Dark mode follows the visitor's system setting.
- **The one bold element is the anchored rating scale on Home.** Don't add a second showpiece. No hero photos, no card grids, no all-caps labels, no animations, no arrows on links.
- Nothing visual from the old sites (the Lovable site at p-17-a.com, or the prasad-lab-site repo). Only their copy carried over.
- Single column. Check any change at phone width (~400px): no sideways scroll.

## Open items

- **josh@joshuaprasad.com doesn't exist yet.** It needs the domain purchase plus Google Workspace. Until then the Consulting address on Contact bounces.
- **Custom domain not attached.** Once Josh buys joshuaprasad.com: add a `CNAME` file containing `joshuaprasad.com`, set the DNS records at the registrar (four A records to GitHub Pages, plus `www` CNAME to `joshuaprasad.github.io`), then turn on "Enforce HTTPS" in the repo's Pages settings.
- **Lander Wilkinson** has a photo (added 2026-09-25) but no research-interests sentence yet.
- **Kesea Nutter's** year in the program isn't stated. The old site's "first-year" line is stale, so it was left off.
- **ORCID** links to 0000-0002-7938-6270, the Colorado State record found by public search. Josh should confirm it's his.
