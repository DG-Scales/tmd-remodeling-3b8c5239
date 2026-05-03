import { ArrowRight, Bath, Check, Hammer, Home, Mail, MapPin, MessageSquareHeart, Phone, Ruler, ShieldCheck, Star, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroHome from "@/assets/tmd/hero-home.jpg";
import modernKitchen from "@/assets/tmd/modern-kitchen.jpg";
import bathroomImage from "@/assets/tmd/bathroom.jpg";
import livingRoom from "@/assets/tmd/living-room.jpg";
import carpentryImage from "@/assets/tmd/carpentry.jpg";
import tmdLogo from "@/assets/tmd/tmd-logo.png";

const services = [
  { icon: Bath, title: "Kitchens & Bathrooms", text: "Sleek, functional updates with premium materials, smart layouts, and clean finish work." },
  { icon: TreePine, title: "Hardscaping", text: "Paver patios, walkways, fire pits, retaining walls, and outdoor living spaces built to last." },
  { icon: Hammer, title: "Custom Carpentry", text: "Built-ins, trim, doors, decks, and detail work crafted to fit your home perfectly." },
  { icon: Home, title: "Whole-Home Remodels", text: "End-to-end renovations that modernize layouts, finishes, and the way you use your space." },
  { icon: Ruler, title: "Additions & Restorations", text: "Expand your footprint or restore character with careful planning and quality construction." },
];

const values = [
  { image: bathroomImage, title: "Craftsmanship", text: "Every cut, tile, and fixture is installed with attention to detail. We treat your home like our own." },
  { image: livingRoom, title: "Communication", text: "Clear timelines, honest pricing, and steady updates from first walkthrough to final punch list." },
  { image: carpentryImage, title: "Reliability", text: "We show up on time, finish what we start, and back our work with a craftsman's guarantee." },
];

const areas = ["Salem", "Revere", "Malden", "Everett", "Boston", "Marblehead", "Swampscott", "Danvers", "Peabody"];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroHome}
          alt="Modern home exterior remodeled by TMD Remodeling"
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-slow-pan"
        />
        <img
          src={modernKitchen}
          alt="Sleek modern kitchen renovation by TMD Remodeling"
          className="hero-crossfade absolute inset-0 h-full w-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-24 w-auto object-contain drop-shadow-lg sm:h-28 lg:h-32" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground sm:inline">TMD Remodeling</span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 md:flex">
            <a className="transition hover:text-accent" href="#services">Services</a>
            <a className="transition hover:text-accent" href="#about">About</a>
            <Link className="transition hover:text-accent" to="/gallery">Gallery</Link>
            <Link className="transition hover:text-accent" to="/reviews">Reviews</Link>
            <a className="transition hover:text-accent" href="#contact">Contact</a>
          </div>
        </nav>

        <div id="top" className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8 lg:min-h-[76vh] lg:pb-24">
          <div className="max-w-3xl reveal-up">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-accent bg-accent/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary-foreground backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-accent" /> Massachusetts remodeling experts
            </p>
            <div className="relative min-h-[11rem] sm:min-h-[15rem] lg:min-h-[16rem]">
              <h1 className="hero-crossfade-out absolute inset-0 max-w-3xl font-bold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-7xl text-6xl">
                Your Vision.<br />Our Craft.
              </h1>
              <h1 className="hero-crossfade absolute inset-0 max-w-3xl font-bold leading-[1.05] text-primary-foreground opacity-0 sm:text-5xl lg:text-7xl text-6xl">
                Building The<br />Home You've<br />Always Wanted.
              </h1>
            </div>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-primary-foreground/90 drop-shadow-lg sm:text-xl">
              From the first swing of the hammer to the final coat of paint — TMD Remodeling builds homes you'll be proud of for years to come.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="hero" size="xl">
                <a href="tel:6174802895">Call (617) 480-2895 <Phone /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <a href="mailto:tmdremodeling0227@gmail.com">Email Us <Mail /></a>
              </Button>
              <Button asChild variant="subtle" size="xl">
                <Link to="/reviews">Leave A 5-Star Review <MessageSquareHeart /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {[
            { k: "200+", v: "Projects completed" },
            { k: "10+", v: "Towns served" },
            { k: "5★", v: "Average rating" },
            { k: "100%", v: "Licensed & insured" },
          ].map((s) => (
            <div key={s.v} className="bg-card px-6 py-8 text-center">
              <div className="text-4xl font-bold text-accent sm:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services - editorial row layout */}
      <section id="services" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">What we do</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Built For The Way You Live.</h2>
            </div>
            <p className="max-w-md text-muted-foreground md:text-right">
              Five core services. One crew that handles your project from first sketch to final walkthrough.
            </p>
          </div>

          <div className="border-t border-border">
            {services.map((service, i) => (
              <article
                key={service.title}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b border-border py-8 transition hover:bg-card sm:grid-cols-[6rem_auto_1fr_auto] sm:items-center sm:gap-x-8 sm:py-10"
              >
                <div className="font-mono text-3xl font-bold text-accent sm:text-4xl">
                  0{i + 1}
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-accent transition group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground sm:h-16 sm:w-16">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-2xl font-semibold sm:text-3xl">{service.title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-muted-foreground">{service.text}</p>
                </div>
                <ArrowRight className="hidden h-6 w-6 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-accent sm:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About + Values - asymmetric image grid */}
      <section id="about" className="bg-card py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={bathroomImage} alt="Bathroom remodel" className="aspect-[3/4] w-full rounded-lg object-cover shadow-crafted" loading="lazy" />
              <div className="grid gap-4 pt-10">
                <img src={livingRoom} alt="Living room remodel" className="aspect-square w-full rounded-lg object-cover shadow-soft" loading="lazy" />
                <img src={carpentryImage} alt="Custom carpentry" className="aspect-square w-full rounded-lg object-cover shadow-soft" loading="lazy" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">About TMD</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Local Crew. High Standards. Built Around Trust.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                TMD Remodeling is a locally owned home improvement company serving the North Shore and greater Boston. Modern design, durable construction, and a smooth experience from quote to keys.
              </p>
              <ul className="mt-8 space-y-4">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <div>
                      <div className="font-semibold">{v.title}</div>
                      <p className="mt-1 text-muted-foreground">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service area - simple map-style chips */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Where we work</p>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Serving The North Shore & Greater Boston</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent">
                <MapPin className="h-4 w-4 text-accent" /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - split panel */}
      <section id="contact" className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 shadow-crafted backdrop-blur lg:grid-cols-2">
            <div className="p-10 sm:p-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Get in touch</p>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">Let's Talk About Your Next Project.</h2>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/82">
                Tell us what you want to build, remodel, or restore. We'll walk through it with you and put together an honest plan.
              </p>
              <div className="mt-8 flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent" />)}
                <span className="ml-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">5-star rated</span>
              </div>
            </div>
            <div className="border-t border-primary-foreground/15 bg-background/40 p-10 sm:p-12 lg:border-l lg:border-t-0">
              <div className="mb-6 flex items-center gap-3">
                <img src={tmdLogo} alt="TMD Remodeling logo" className="h-14 w-auto object-contain" />
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">TMD Remodeling</div>
                  <div className="text-lg font-semibold">Build · Remodel · Restore</div>
                </div>
              </div>
              <div className="space-y-3">
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
                  <Link to="/reviews">Leave A 5-Star Review <MessageSquareHeart /></Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>© {new Date().getFullYear()} TMD Remodeling. All rights reserved.</span>
              <Link to="/privacy" className="transition hover:text-accent">Privacy Policy</Link>
            </div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Licensed & insured · Massachusetts</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
