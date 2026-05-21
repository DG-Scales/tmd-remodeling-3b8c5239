import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarCheck, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const quoteSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\-.\s]+$/, "Phone can only contain digits and + ( ) - ."),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  details: z.string().trim().max(800).optional().or(z.literal("")),
});

type QuoteValues = z.infer<typeof quoteSchema>;

interface QuoteDialogProps {
  triggerLabel?: string;
  triggerVariant?: "hero" | "subtle" | "craftsman" | "default";
  triggerSize?: "default" | "lg" | "xl";
  triggerClassName?: string;
}

export const QuoteDialog = ({
  triggerLabel = "Book Now · Get A Quote",
  triggerVariant = "hero",
  triggerSize = "xl",
  triggerClassName,
}: QuoteDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", city: "", details: "" },
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (values: QuoteValues) => {
    setSubmitting(true);
    try {
      const idempotencyKey = `quote-${crypto.randomUUID()}`;
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "quote-request",
          idempotencyKey,
          templateData: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            city: values.city,
            details: values.details,
          },
        },
      });
      if (error) throw error;
      toast({
        title: "Request sent!",
        description: "Thanks — we'll reach out within one business day.",
      });
      setOpen(false);
      form.reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Couldn't send request",
        description: "Please try again or call us at (857) 488-5197.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize} className={triggerClassName}>
          {triggerLabel} <CalendarCheck />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book Now · Get A Free Quote</DialogTitle>
          <DialogDescription>
            Tell us a little about your project. We'll reach out within one business day.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane" autoComplete="given-name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" autoComplete="family-name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(857) 555-1234" autoComplete="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    City <span className="font-normal text-muted-foreground">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Salem, MA" autoComplete="address-level2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Project details <span className="font-normal text-muted-foreground">(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea rows={3} placeholder="Kitchen remodel, deck build, bathroom refresh, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="hero" size="lg" className="w-full justify-center" disabled={submitting}>
              {submitting ? "Sending…" : <>Send Request <Send /></>}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Or call us directly at{" "}
              <a className="font-semibold text-accent hover:underline" href="tel:8574885197">
                (857) 488-5197
              </a>
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
