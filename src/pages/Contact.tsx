import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("Thank you – your message has been sent.", {
        description: "A member of the TriMesa team will be in touch.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        organisation: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact us directly at work@trimesa.it.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            For institutional and accredited investors
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
                Investor Inquiry
              </h2>
              <p className="text-[rgb(var(--slate))] mb-8">
                TriMesa Capital Partners serves institutional and accredited investors. Our team will respond to qualified inquiries within 2 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-[rgb(var(--navy))]">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="John Smith"
                    className={`mt-2 ${errors.fullName ? "border-red-500" : ""}`}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-[rgb(var(--navy))]">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="john.smith@example.com"
                    className={`mt-2 ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="organisation" className="text-[rgb(var(--navy))]">
                    Organisation / Firm
                  </Label>
                  <Input
                    id="organisation"
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="Your organisation name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-[rgb(var(--navy))]">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Investment inquiry"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[rgb(var(--navy))]">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Please describe your investment interests and any specific questions..."
                    className={`mt-2 min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>

                <p className="text-xs text-[rgb(var(--slate))] mt-4">
                  By submitting this form, you confirm that you are an institutional or accredited investor.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[rgb(var(--navy))] mb-1">
                          Email
                        </h3>
                        <p className="text-[rgb(var(--slate))]">
                          work@trimesa.it.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[rgb(var(--navy))] mb-1">
                          Phone
                        </h3>
                        <p className="text-[rgb(var(--slate))]">
                          Available upon request to qualified investors
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
