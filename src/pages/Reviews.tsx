import { ArrowLeft, Facebook, Mail, MessageSquareHeart, Phone, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tmdLogo from "@/assets/tmd/tmd-logo.png";

const reviewLinks = [
  {
    title: "Google",
    text: "A 5-star Google review helps homeowners find a remodeler they can trust.",
    href: "https://g.page/r/Ce320FND0rxyEAE/review",
    label: "Leave A 5-Star Review",
    icon: Star,
  },
  {
    title: "Facebook",
    text: "Follow along for project photos, before/afters, and updates from the crew.",
    href: "https://facebook.com/",
    label: "Follow On Facebook",
    icon: Facebook,
  },
  {
    title: "Referral",
    text: "Know someone planning a renovation? A quick intro means the world.",
    href: "mailto:tmdremodeling0227@gmail.com?subject=Referral%20for%20TMD%20Remodeling",
    label: "Email A Referral",
    icon: Mail,
  },
];

const testimonials = [
  {
    quote:
      "TMD remodeled our kitchen from top to bottom and the craftsmanship is incredible. Tom and the crew were on time every day, kept the site clean, and the finish work is flawless.",
    name: "Katie M.",
    project: "Full Kitchen Remodel · Salem, MA",
  },
  {
    quote:
      "We had TMD build a new deck and refresh our siding. Honest pricing, zero surprises, and they treated our home like it was their own. Already booked them for the bathroom next.",
    name: "Brian R.",
    project: "Deck + Siding · Beverly, MA",
  },
  {
    quote:
      "Beautiful custom built-ins around our fireplace — exactly what we pictured. Communication was easy the whole way through and the quality speaks for itself.",
    name: "Jessica P.",
    project: "Custom Carpentry · Peabody, MA",
  },
  {
    quote:
      "Quick response, fair quote, and the bathroom turned out better than we hoped. Tile work is clean and tight. Highly recommend TMD to anyone on the North Shore.",
    name: "Michael D.",
    project: "Bathroom Remodel · Danvers, MA",
  },
  {
    quote:
      "Hardscape patio and walkway came out gorgeous. Real pride in their work. You can tell they care about doing it right, not just fast.",
    name: "Allison T.",
    project: "Hardscaping · Marblehead, MA",
  },
  {
    quote:
      "From the first call to the final walkthrough, TMD was professional and easy to work with. We finally have the home we've been planning for years.",
    name: "Chris & Sam L.",
    project: "Whole-Home Refresh · Lynn, MA",
  },
];

const steps = [
  { n: "01", title: "Click A Button", text: "Pick Google, Facebook, or email below." },
  { n: "02", title: "Leave A 5-Star Review", text: "Share a sentence about your experience." },
  { n: "03", title: "Hit Submit", text: "That's it — thank you for the support." },
];

const Reviews = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-16 w-auto object-contain sm:h-20" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-foreground sm:inline">TMD Remodeling</span>
          </Link>
          <Button asChild variant="subtle">
            <Link to="/"><ArrowLeft /> Back Home</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-panel-gradient">
        <div className="craft-grain absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <div className="reveal-up">
            <div className="mb-6 inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
              <span className="ml-2 text-xs font-bold uppercase tracking-[0.2em]">Leave us 5 stars</span>
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Loved The Work?<br /><span className="text-accent">Tell The World.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              If TMD Remodeling brought care, craftsmanship, and clear communication to your project — a 5-star review or follow helps the next homeowner reach out with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 3-step strip */}
      <section className="border-y border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <div className="font-mono text-4xl font-bold text-accent/80">{s.n}</div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">What homeowners say</p>
            <h2 className="text-4xl font-bold sm:text-5xl">Straight From The Clients</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-crafted"
              >
                <div className="mb-4 flex items-center gap-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-accent/60" />
                <p className="mt-3 flex-grow leading-7 text-foreground">"{t.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.project}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Review platforms */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Where to leave it</p>
            <h2 className="text-4xl font-bold sm:text-5xl">Pick Your Platform</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviewLinks.map((item) => (
              <article key={item.title} className="group flex flex-col rounded-lg border border-border bg-background p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-crafted">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-md border border-border bg-card text-accent transition group-hover:border-accent">
                  <item.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="mt-3 flex-grow leading-7 text-muted-foreground">{item.text}</p>
                <Button asChild variant="hero" size="lg" className="mt-6 w-full justify-between">
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                    {item.label} <item.icon />
                  </a>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Thank-you / direct contact */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-lg border border-border bg-primary text-primary-foreground shadow-crafted lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 sm:p-12">
              <Quote className="h-10 w-10 text-accent" />
              <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">Prefer To Share Directly?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-primary-foreground/80">
                Call or email TMD with a kind note, project photo, or a referral introduction. Every word matters to a small local business.
              </p>
              <div className="mt-6 flex items-center gap-2 text-accent">
                <MessageSquareHeart className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">Thank you for the support</span>
              </div>
            </div>
            <div className="space-y-3 border-t border-primary-foreground/15 bg-primary-foreground/5 p-10 backdrop-blur sm:p-12 lg:border-l lg:border-t-0">
              <Button asChild variant="hero" size="xl" className="w-full justify-between">
                <a href="tel:6174802895">(617) 480-2895 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <a href="tel:8574885197">(857) 488-5197 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <a href="mailto:tmdremodeling0227@gmail.com">tmdremodeling0227@gmail.com <Mail /></a>
              </Button>
              <Button asChild variant="subtle" size="xl" className="w-full justify-between">
                <Link to="/">Back To Home <ArrowLeft className="rotate-180" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
