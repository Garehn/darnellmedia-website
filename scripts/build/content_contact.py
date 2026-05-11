"""Contact page."""

from .template import (
    SITE_URL, SITE_NAME, PHONE_RAW, PHONE_DISPLAY, EMAIL,
    ADDRESS_STREET, ADDRESS_LOCALITY, ADDRESS_REGION, ADDRESS_POSTCODE,
    breadcrumb_schema, render_breadcrumbs,
)

SLUG = "contact"
TITLE = "Contact Darnell Media | Sydney SEO Agency"
DESCRIPTION = (
    "Book a free 20-minute discovery call, or send a brief. Belrose, NSW. "
    f"{PHONE_DISPLAY}. {EMAIL}."
)


def body() -> str:
    crumbs = [("/", "Home"), ("/contact/", "Contact")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Talk to Darnell Media</h1></header>

    <p class="lead">
      Three ways to get in touch, in order of speed. Pick whichever fits.
    </p>

    <h2>Book a free 20-minute discovery call</h2>
    <p>
      The fastest way to find out if we can help. Tell us about your business, what you
      have tried, what you want. We tell you honestly whether SEO is the right next move
      and whether Darnell Media is the right shape of help. If it is not, we tell you who
      is.
    </p>
    <p>
      The simplest path is to send the form below with a short note about what you want to
      discuss, and we will reply within one business day with a couple of call times that
      suit you. Or call us directly on
      <a href="tel:{PHONE_RAW}">{PHONE_DISPLAY}</a> during business hours.
    </p>

    <form class="contact-form" action="mailto:{EMAIL}" method="post" enctype="text/plain">
      <div class="contact-form__row">
        <div>
          <label for="name">Your name</label>
          <input id="name" name="name" type="text" required autocomplete="name">
        </div>
        <div>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" required autocomplete="email">
        </div>
      </div>
      <div class="contact-form__row">
        <div>
          <label for="business">Business name</label>
          <input id="business" name="business" type="text" required>
        </div>
        <div>
          <label for="website">Website (if you have one)</label>
          <input id="website" name="website" type="url" placeholder="https://">
        </div>
      </div>
      <div>
        <label for="reason">What are you looking for?</label>
        <select id="reason" name="reason">
          <option value="discovery">Free 20-minute discovery call</option>
          <option value="audit">Book an SEO audit ($1,200)</option>
          <option value="retainer">Discuss a retainer</option>
          <option value="consultancy">Consultancy for our in-house team</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label for="message">Anything we should know before the call?</label>
        <textarea id="message" name="message" placeholder="What you have tried, what your goal is, what your service area looks like, what budget shape makes sense."></textarea>
      </div>
      <button class="btn btn--primary btn--lg contact-form__submit" type="submit">Send the brief</button>
      <p class="contact-form__note">
        The form opens your email client with the details prefilled. We respond within one
        business day during business hours. Phone is faster for anything urgent.
      </p>
    </form>

    <h2>Or just email or call</h2>
    <div class="dl-grid">
      <dt>Phone</dt>
      <dd><a href="tel:{PHONE_RAW}">{PHONE_DISPLAY}</a> (Mon-Fri, 9am-5pm AEST)</dd>
      <dt>Email</dt>
      <dd><a href="mailto:{EMAIL}">{EMAIL}</a></dd>
      <dt>Address</dt>
      <dd>{ADDRESS_STREET}, {ADDRESS_LOCALITY} {ADDRESS_REGION} {ADDRESS_POSTCODE}</dd>
      <dt>Business hours</dt>
      <dd>Monday to Friday, 9am to 5pm AEST. After-hours by appointment.</dd>
      <dt>Response time</dt>
      <dd>Email replies within one business day. The founder answers the phone or returns
        the call within four business hours.</dd>
    </div>

    <h2>What to expect after you submit the form</h2>
    <ol>
      <li><strong>Within one business day</strong>: a reply from Garehn with two or three
        suggested call times.</li>
      <li><strong>Discovery call</strong>: 20 minutes, free. We learn the business and you
        decide whether we are the right shape of help.</li>
      <li><strong>Audit or retainer proposal</strong>: only if both sides want it. Audit is
        $1,200 flat, written report in 7 business days.</li>
    </ol>
    <p>
      We do not put you on a drip-marketing list. We do not call you repeatedly. The next
      contact after the discovery call is yours to initiate.
    </p>
  </div>
</article>
"""


def schema_graph():
    crumbs = [("/", "Home"), ("/contact/", "Contact")]
    return [
        breadcrumb_schema(crumbs),
        {
            "@type": "ContactPage",
            "name": TITLE,
            "description": DESCRIPTION,
            "url": f"{SITE_URL}/contact/",
            "mainEntity": {"@id": f"{SITE_URL}/#local-business"},
        },
    ]
