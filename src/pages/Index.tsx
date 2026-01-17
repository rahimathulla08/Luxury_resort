import { Link } from "react-router-dom";
import { Star, ArrowRight, MapPin, Clock } from "lucide-react";
import { siteData } from "@/config/siteData";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-resort.png";
import poolImage from "@/assets/amenity-pool.png";
import roomImage from "@/assets/room-deluxe.png";
import restaurantImage from "@/assets/amenity-restaurant.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${siteData.name} - Luxury Resort`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/70" />
        </div>

        <div className="relative z-10 container-luxury text-center text-white pt-20">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xs sm:text-sm md:text-base tracking-[0.4em] uppercase mb-4 text-gold font-medium">
              {siteData.category}
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 drop-shadow-lg">
              {siteData.name}
            </h1>

            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-white/90 mb-8">
              {siteData.tagline}
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full mb-10">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${i < Math.floor(siteData.rating.score)
                      ? "fill-gold text-gold"
                      : "text-white/30"
                      }`}
                  />
                ))}
              </div>
              <span className="text-sm md:text-base font-medium">
                {siteData.rating.score}
              </span>
              <span className="text-xs md:text-sm text-white/70">
                ({siteData.rating.reviewCount.toLocaleString()} reviews)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-charcoal hover:bg-gold-light px-10 py-6 text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-500 shadow-gold hover:shadow-lg"
              >
                <Link to="/amenities">View Amenities</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-charcoal px-10 py-6 text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-500"
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Welcome to
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              {siteData.name}
            </h2>

            <div className="divider-gold mb-8" />

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {siteData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              image: roomImage,
              title: "Luxury Accommodation",
              desc: "Elegantly designed rooms and suites with premium amenities",
              link: "/Gallery",
              label: "Explore Rooms"
            }, {
              image: poolImage,
              title: "World-Class Amenities",
              desc: "Infinity pool, spa, fine dining and more",
              link: "/amenities",
              label: "View Amenities"
            }, {
              image: restaurantImage,
              title: "Culinary Excellence",
              desc: "Gourmet dining experiences with local and international flavors",
              link: "/gallery",
              label: "View Gallery"
            }].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-lg md:text-xl lg:text-2xl text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-primary-foreground/80 mb-4">
                    {item.desc}
                  </p>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-accent text-xs md:text-sm font-medium tracking-wide uppercase group-hover:gap-4 transition-all duration-300"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
