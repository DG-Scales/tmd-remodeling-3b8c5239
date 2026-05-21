import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tmdLogo from "@/assets/tmd/tmd-logo.png";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={tmdLogo} alt="TMD Remodeling logo" className="h-14 w-auto object-contain drop-shadow-lg sm:h-16" />
            <span className="hidden text-sm font-semibold uppercase tracking-[0.22em] sm:inline">TMD Remodeling</span>
          </Link>
          <Button asChild variant="subtle" size="sm">
            <Link to="/"><ArrowLeft className="h-4 w-4" /> Back Home</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Legal</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="mt-10 space-y-8 leading-7 text-muted-foreground">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Who We Are</h2>
            <p className="mt-3">TMD Remodeling is a locally owned home improvement company serving Massachusetts. This policy explains how we collect, use, and protect any information you share with us.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-3">We only collect information you choose to share — typically your name, phone number, email address, project address, and details about the work you'd like done. We collect this when you call, email, request an estimate, or leave a review.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">How We Use It</h2>
            <p className="mt-3">Your information is used solely to respond to your inquiry, provide estimates, schedule and complete work, and follow up on completed projects. We do not sell, rent, or trade your information to third parties.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Sharing</h2>
            <p className="mt-3">We may share limited information with trusted subcontractors, suppliers, or service providers strictly as needed to complete your project. We may also disclose information when required by law.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Cookies & Website Analytics</h2>
            <p className="mt-3">This website may use basic analytics to understand traffic patterns. No personally identifying information is collected through normal browsing.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Your Choices</h2>
            <p className="mt-3">You may request that we update or delete your information at any time by contacting us at the email or phone number below.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              TMD Remodeling<br />
              Phone: <a className="text-accent hover:underline" href="tel:8574885197">(857) 488-5197</a><br />
              Email: <a className="text-accent hover:underline" href="mailto:tmdremodeling0227@gmail.com">tmdremodeling0227@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
