import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const FUNCTIONS_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe`;
const ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type State = "validating" | "ready" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [state, setState] = useState<State>("validating");
  const token = new URLSearchParams(window.location.search).get("token") ?? "";

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    fetch(`${FUNCTIONS_URL}?token=${encodeURIComponent(token)}`, {
      headers: { apikey: ANON_KEY },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) setState("ready");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      })
      .catch(() => setState("error"));
  }, [token]);

  const onConfirm = async () => {
    setState("submitting");
    try {
      const res = await fetch(FUNCTIONS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: ANON_KEY },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) setState("success");
      else if (data.reason === "already_unsubscribed") setState("already");
      else setState("error");
    } catch {
      setState("error");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 text-center shadow-soft">
        <h1 className="text-2xl font-bold">Email preferences</h1>
        <div className="mt-6 text-muted-foreground">
          {state === "validating" && <p>Checking your link…</p>}
          {state === "invalid" && <p>This unsubscribe link is invalid or expired.</p>}
          {state === "already" && <p>You've already been unsubscribed. No further action needed.</p>}
          {state === "error" && <p>Something went wrong. Please try again later.</p>}
          {state === "ready" && (
            <>
              <p>Click below to confirm you'd like to unsubscribe from TMD Remodeling emails.</p>
              <Button onClick={onConfirm} variant="hero" size="lg" className="mt-6">
                Confirm Unsubscribe
              </Button>
            </>
          )}
          {state === "submitting" && <p>Processing…</p>}
          {state === "success" && <p>You've been unsubscribed. We're sorry to see you go.</p>}
        </div>
      </div>
    </main>
  );
};

export default Unsubscribe;
