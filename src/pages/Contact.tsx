import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
} from "lucide-react";
import exteriorImage from "@/assets/gallery-exterior.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will contact you shortly.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={exteriorImage}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                Reach Out
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl md:text-5xl mb-6">
                We'd Love to Hear From You
              </h2>

              <div className="divider-gold mb-8 mx-0" />

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-10">
                Have questions about your upcoming stay or want to make a
                reservation? Our team is here to help you plan the perfect
                getaway.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${siteData.phone}`}
                  className="flex items-start gap-4 p-5 sm:p-6 bg-secondary rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base text-foreground mb-1">
                      Call Us
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {siteData.phoneDisplay}
                    </p>
                    <p className="text-xs sm:text-sm text-accent mt-1">
                      Click to call directly
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-start gap-4 p-5 sm:p-6 bg-secondary rounded-lg hover:bg-primary/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base text-foreground mb-1">
                      Email Us
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {siteData.email}
                    </p>
                    <p className="text-xs sm:text-sm text-accent mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-secondary rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base text-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {siteData.address.full}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Plus Code: {siteData.address.plusCode}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-secondary rounded-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base text-foreground mb-1">
                      Timings
                    </h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Check-in: {siteData.timings.checkIn} | Check-out:{" "}
                      {siteData.timings.checkOut}
                    </p>
                    <p className="text-xs sm:text-sm text-accent mt-1">
                      Front Desk: {siteData.timings.frontDesk}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button
                  asChild
                  className="flex-1 bg-primary text-primary-foreground hover:bg-emerald-light text-sm"
                >
                  <a href={`tel:${siteData.phone}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm"
                >
                  <a
                    href={siteData.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-luxury p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                <h3 className="font-serif text-xl sm:text-2xl">
                  Send an Inquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">
                      Check-in Date
                    </label>
                    <Input
                      type="date"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-2">
                      Check-out Date
                    </label>
                    <Input
                      type="date"
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-emerald-light py-5 sm:py-6 text-xs sm:text-sm font-medium tracking-widest uppercase"
                >
                  Submit Inquiry
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                We respect your privacy. Your information will only be used to
                respond to your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] relative">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
            siteData.name + " " + siteData.address.city
          )}&zoom=14`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Resort Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
