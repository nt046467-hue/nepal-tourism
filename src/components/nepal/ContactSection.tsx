"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().min(1, "Please select your country"),
  tripType: z.string().min(1, "Please select a trip type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const countries = [
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Italy",
  "Japan",
  "India",
  "China",
  "Other",
];

const tripTypes = [
  "Trekking Adventure",
  "Cultural Tour",
  "Wildlife Safari",
  "Mountain Expedition",
  "Yoga & Wellness",
  "Family Holiday",
  "Custom Trip",
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      tripType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
        toast({
          title: "Message Sent!",
          description:
            "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Network error. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge className="bg-[#C0392B]/10 text-[#C0392B] hover:bg-[#C0392B]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Get in Touch
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or want to plan a custom trip? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Your inquiry has been sent to our Nepal travel team at info@discovernepal.com.
                  We&apos;ll respond within 24 hours via email.
                </p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#ECF0F1]/50">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-[family-name:var(--font-space-grotesk)]">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Smith"
                                className="font-[family-name:var(--font-space-grotesk)]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-[family-name:var(--font-space-grotesk)]">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="font-[family-name:var(--font-space-grotesk)]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-[family-name:var(--font-space-grotesk)]">
                              Country
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="font-[family-name:var(--font-space-grotesk)]">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {countries.map((c) => (
                                  <SelectItem key={c} value={c}>
                                    {c}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="tripType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-[family-name:var(--font-space-grotesk)]">
                              Trip Type
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="font-[family-name:var(--font-space-grotesk)]">
                                  <SelectValue placeholder="Select trip type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {tripTypes.map((t) => (
                                  <SelectItem key={t} value={t}>
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-[family-name:var(--font-space-grotesk)]">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your dream Nepal trip..."
                              rows={5}
                              className="font-[family-name:var(--font-space-grotesk)] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full sm:w-auto bg-[#C0392B] hover:bg-[#E74C3C] text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8 py-3 shadow-lg text-base font-semibold"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground mt-3 font-[family-name:var(--font-space-grotesk)]">
                      🔒 Your inquiry is sent to our Nepal travel team at <strong>info@discovernepal.com</strong>. We respond within 24 hours.
                    </p>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-[#ECF0F1]/30 rounded-2xl p-6 border border-[#ECF0F1]/50">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#C0392B]" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm">
                      Email
                    </div>
                    <div className="text-sm text-muted-foreground">
                      info@discovernepal.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F39C12]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-[#F39C12]" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm">
                      WhatsApp
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +977-9801234567
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm">
                      Office Hours
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Sun–Fri: 9AM–6PM NPT
                      <br />
                      (UTC+5:45)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm">
                      Nepal Tourism Board
                    </div>
                    <div className="text-sm text-muted-foreground">
                      +977-1-4256909
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden border border-[#ECF0F1]/50 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27654925898!2d85.2964!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19aed3f1e27b%3A0x44c49f0e8b6e1f3!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kathmandu, Nepal"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
