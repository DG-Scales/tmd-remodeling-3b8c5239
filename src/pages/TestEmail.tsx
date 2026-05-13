import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const TestEmail = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const send = async () => {
    if (!email.trim()) {
      toast({ title: "Enter an email address", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "test-email",
          recipientEmail: email.trim(),
          idempotencyKey: `test-${crypto.randomUUID()}`,
        },
      });
      if (error) throw error;
      toast({
        title: "Test email queued!",
        description: `Sent to ${email.trim()}. Check inbox + spam folder. Try the unsubscribe link too.`,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Couldn't send",
        description: "Check that notify.tmdremodeling.org DNS is verified in Cloud → Emails.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-10">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-bold">Email deliverability test</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Send a test email from <strong>notify.tmdremodeling.org</strong> and verify the unsubscribe link.
        </p>
        <div className="mt-6 space-y-3">
          <Label htmlFor="test-email">Recipient email</Label>
          <Input
            id="test-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={send} disabled={sending} variant="hero" size="lg" className="w-full">
            {sending ? "Sending…" : "Send test email"}
          </Button>
        </div>
        <div className="mt-6 space-y-1 text-xs text-muted-foreground">
          <p>1. Check inbox (and spam) for the test email.</p>
          <p>2. Click the unsubscribe link in the footer to verify opt-out works.</p>
          <p>3. After unsubscribing, sending again to the same address will be blocked.</p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-accent hover:underline">← Back to site</Link>
        </div>
      </div>
    </main>
  );
};

export default TestEmail;
