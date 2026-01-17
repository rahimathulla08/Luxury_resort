import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import { Leaf, Heart, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-resort.png";
import exteriorImage from "@/assets/gallery-exterior.png";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Nature First",
      description:
        "Our resort is designed to harmonize with the natural environment, preserving the beauty of the woodland while offering modern comforts.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description:
        "Every guest is unique. Our dedicated team ensures your stay is tailored to your preferences and exceeds expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "From our luxurious rooms to our gourmet dining, we maintain the highest standards of quality in everything we do.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We support local artisans, farmers, and businesses, creating authentic experiences rooted in our community.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={exteriorImage}
            alt={`About ${siteData.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Our Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
            About {siteData.name}
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
                Since 2015
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground">
                A Legacy of Luxury in Nature
              </h2>
              <div className="divider-gold mb-8 mx-0" />

              <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Nestled in the serene woodlands of Moinabad, {siteData.name} was
                  born from a vision to create a sanctuary where luxury meets
                  nature.
                </p>
                <p>
                  Today, we stand as one of the premier resort destinations near
                  Hyderabad, offering discerning travelers an escape into
                  tranquility.
                </p>
                <p>
                  Every detail at {siteData.name} is thoughtfully curated –
                  creating moments that stay with you forever.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt={siteData.name}
                className="rounded-lg shadow-luxury-lg"
              />

              {/* ✅ FIXED: Visible on small screens */}
              <div className="absolute -bottom-6 left-4 sm:-left-6 bg-primary px-4 py-3 sm:p-4 rounded-lg shadow-luxury-lg">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-accent mb-1 sm:mb-2">
                  10+
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-foreground">
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-6">
              What Sets Us Apart
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-sm sm:text-lg text-muted-foreground">
              At {siteData.name}, we're guided by core values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-luxury p-8 text-center hover-lift"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <h3 className="font-serif text-lg sm:text-xl mb-4">
                  {value.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute top-0 left-0 right-0 h-px bg-border" />

        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              By the Numbers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
              Our Resort at a Glance
            </h2>
            <div className="divider-gold mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              ["50+", "Luxury Rooms"],
              [`${siteData.rating.score}`, "Guest Rating"],
              ["25", "Acres of Paradise"],
              ["1000+", "Happy Guests"],
            ].map(([value, label], i) => (
              <div key={i}>
                <p className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary mb-2">
                  {value}
                </p>
                <p className="text-[10px] sm:text-sm uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
