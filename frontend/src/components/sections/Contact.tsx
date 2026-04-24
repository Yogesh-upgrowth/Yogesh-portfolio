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
    <section id="contact" className="py-24 bg-muted/30" style={{ contentVisibility: "auto", containIntrinsicSize: "0 580px" }}>
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column — slides in from left */}
          <div
            ref={leftRef}
            className={`reveal ${leftVisible ? "in-view" : ""}`}
            style={{ animationName: leftVisible ? "fade-in-left" : undefined }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Let's build products that actually move the needle.</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to scale? Fill out the form or reach out directly. I'm always open to discussing new opportunities and challenges.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:yogesh.productmanager@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors group hover-lift">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Email Me</div>
                  <div className="font-semibold">yogesh.productmanager@gmail.com</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors group cursor-pointer hover-lift">
                <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5 text-green-600 group-hover:text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">Available on Request</div>
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
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-muted/50" />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="bg-muted/50" />
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              className="min-h-[120px] bg-muted/50 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full text-lg font-semibold h-12 hover-press">
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
