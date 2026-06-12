import { useState } from "react";
import { ArrowLeft, CalendarCheck, Mail, Menu, Phone, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import tmdLogo from "@/assets/tmd/tmd-logo.png";
import patioFirepit from "@/assets/tmd/gallery/patio-firepit.jpg";
import paverSteps from "@/assets/tmd/gallery/paver-steps.jpg";
import bathroomShower from "@/assets/tmd/gallery/bathroom-shower.jpg";
import kitchenFloor from "@/assets/tmd/gallery/kitchen-floor.jpg";
import frontPorchStairs from "@/assets/tmd/gallery/front-porch-stairs.jpg";
import brickPatio from "@/assets/tmd/gallery/brick-patio.jpg";
import porchRailing from "@/assets/tmd/gallery/porch-railing.jpg";
import slidingDoor from "@/assets/tmd/gallery/sliding-door.jpg";
import excavation from "@/assets/tmd/gallery/excavation.jpg";
import deckBuild from "@/assets/tmd/gallery/deck-build.jpg";
import genKitchen from "@/assets/tmd/gallery/gen-kitchen-modern.jpg";
import genBathroom from "@/assets/tmd/gallery/gen-bathroom-luxury.jpg";

import genBuiltins from "@/assets/tmd/gallery/gen-builtins-carpentry.jpg";
import genDeck from "@/assets/tmd/gallery/gen-deck-finished.jpg";
import genRoofing from "@/assets/tmd/gallery/gen-roofing.jpg";
import genPaint from "@/assets/tmd/gallery/gen-interior-paint.jpg";
import genSiding from "@/assets/tmd/gallery/gen-siding.jpg";
import genWindow from "@/assets/tmd/gallery/gen-window.jpg";
import sidingTrim1 from "@/assets/tmd/gallery/siding-trim-1.jpg";
import sidingTrim2 from "@/assets/tmd/gallery/siding-trim-2.jpg";

const projects = [
  { src: genKitchen, title: "Modern White Kitchen Remodel", category: "Kitchen" },
  { src: genBathroom, title: "Luxury Master Bathroom", category: "Bathroom" },
  { src: patioFirepit, title: "Paver Patio & Fire Pit", category: "Hardscape" },
  { src: genDeck, title: "Composite Deck With Railings", category: "Decks" },
  { src: bathroomShower, title: "Custom Tile Shower Build", category: "Bathroom" },
  { src: genBuiltins, title: "Custom Built-Ins & Mantel", category: "Carpentry" },
  { src: frontPorchStairs, title: "Front Porch & Stair Rebuild", category: "Carpentry" },
  { src: genSiding, title: "Vinyl Siding Installation", category: "Siding" },
  { src: sidingTrim1, title: "Cedar Shake Siding & White Trim", category: "Siding" },
  { src: sidingTrim2, title: "Full Exterior Siding & Trim Wrap", category: "Siding" },
  { src: brickPatio, title: "Brick Patio Installation", category: "Hardscape" },
  { src: genWindow, title: "Window Replacement", category: "Windows" },
  { src: genRoofing, title: "Architectural Shingle Roofing", category: "Roofing" },
  { src: kitchenFloor, title: "Marble Kitchen Flooring", category: "Kitchen" },
  { src: deckBuild, title: "Composite Deck Construction", category: "Decks" },
  { src: genPaint, title: "Interior Paint & Trim", category: "Painting" },
  { src: paverSteps, title: "Bluestone Paver Steps", category: "Hardscape" },
  { src: porchRailing, title: "Front Porch Railing & Skirt", category: "Carpentry" },
  { src: slidingDoor, title: "Slider & Trim Installation", category: "Carpentry" },
  { src: excavation, title: "Site Prep & Excavation", category: "Site Work" },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Project Gallery — TMD Remodeling</title>
        <meta name="description" content="Browse completed kitchen remodels, bathroom renovations, decks, hardscaping, siding, and custom carpentry by TMD Remodeling in Massachusetts." />
        <link rel="canonical" href="https://tmdremodeling.lovable.app/gallery" />
        <meta property="og:title" content="Project Gallery — TMD Remodeling" />
        <meta property="og:description" content="Browse completed kitchen remodels, bathroom renovations, decks, hardscaping, siding, and custom carpentry by TMD Remodeling in Massachusetts." />
        <meta property="og:url" content="https://tmdremodeling.lovable.app/gallery" />
        <meta property="og:type" content="website" />
      </Helmet>
      <header className="sticky top-0 z-40 border-b border-border bg-primary text-primary-foreground shadow-soft">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-14 w-auto object-contain drop-shadow-lg sm:h-16" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] sm:inline">TMD Remodeling</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-primary-foreground/85 md:flex">
            <Link className="transition hover:text-accent" to="/">Home</Link>
            <Link className="transition hover:text-accent" to="/reviews">Reviews</Link>
            <Link className="transition hover:text-accent" to="/gallery">Gallery</Link>
            <a className="transition hover:text-accent" href="mailto:tmdremodeling0227@gmail.com">Contact</a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Button asChild variant="subtle" size="sm">
              <Link to="/"><ArrowLeft className="h-4 w-4" /> Back</Link>
            </Button>
            <button
              className="rounded-md p-2 text-primary-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="absolute right-5 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-card p-4 shadow-crafted md:hidden">
              <div className="flex flex-col gap-3 text-sm font-medium text-foreground">
                <Link className="transition hover:text-accent" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link className="transition hover:text-accent" to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
                <Link className="transition hover:text-accent" to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                <a className="transition hover:text-accent" href="mailto:tmdremodeling0227@gmail.com" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-6 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Our Work</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Project Gallery</h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A look at recent remodels, builds, and restorations across the North Shore and greater Boston.
          </p>
        </div>

        <div className="sticky top-[88px] z-30 mb-10 -mx-5 border-b border-border/60 bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:-mx-8 sm:top-[96px] sm:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                  activeCategory === cat
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid min-h-[60vh] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 [content-visibility:auto]">
          {filtered.map((p) => (
            <figure key={p.title} className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-soft transition hover:shadow-crafted">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{p.category}</div>
                  <div className="mt-1 font-semibold">{p.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-10 text-center sm:p-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Like What You See?</h2>
          <p className="max-w-xl text-muted-foreground">Reach out for a free estimate on your next project.</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="https://cal.com/thomas-russo-11" target="_blank" rel="noreferrer">Schedule a Meeting <CalendarCheck /></a>
            </Button>
            <Button asChild variant="subtle" size="xl">
              <a href="https://cal.com/thomas-russo-11" target="_blank" rel="noreferrer">Schedule a Meeting <CalendarCheck /></a>
            </Button>
            <Button asChild variant="subtle" size="xl">
              <a href="mailto:tmdremodeling0227@gmail.com">Email Us <Mail /></a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
