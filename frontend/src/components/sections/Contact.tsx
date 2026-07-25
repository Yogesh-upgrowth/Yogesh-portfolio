import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/useInView";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const { toast } = useToast();
  const { ref: leftRef, inView: leftVisible } = useInView<HTMLDivElement>();
  const { ref: rightRef, inView: rightVisible } = useInView<HTMLDivElement>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30" style={{ contentVisibility: "auto", containIntrinsicSize: "0 580px" }}>
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left column — slides in from left */}
          <div
            ref={leftRef}
            className={`reveal ${leftVisible ? "in-view" : ""}`}
            style={{ animationName: leftVisible ? "fade-in-left" : undefined }}
          >
            <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 leading-tight">Let's build products that actually move the needle.</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Ready to scale? Fill out the form or reach out directly. I'm always open to discussing new opportunities and challenges.
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <a href="mailto:yogesh.productmanager@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-background border hover:border-primary/50 transition-colors group hover-lift">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs md:text-sm font-medium text-muted-foreground">Email Me</div>
                  <div className="font-semibold text-sm md:text-base truncate">yogesh.productmanager@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border hover:border-primary/50 transition-colors group cursor-pointer hover-lift">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="h-5 w-5 text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-medium text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-sm md:text-base">Available on Request</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — slides in from right */}
          <div
            ref={rightRef}
            className={`reveal ${rightVisible ? "in-view" : ""}`}
            style={{ animationName: rightVisible ? "fade-in-right" : undefined }}
          >
            <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:shadow-xl rounded-2xl overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-muted/50 h-12" />
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
                          <FormLabel className="text-sm">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="bg-muted/50 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-[120px] bg-muted/50 resize-none text-base" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full text-base md:text-lg font-semibold h-14 md:h-12 hover-press rounded-xl">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
