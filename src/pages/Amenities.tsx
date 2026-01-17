import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import {
  Wifi,
  UtensilsCrossed,
  Car,
  Waves,
  Wind,
  Accessibility,
  Sparkles,
  ChefHat,
} from "lucide-react";
import poolImage from "@/assets/amenity-pool.png";
import restaurantImage from "@/assets/amenity-restaurant.png";
import spaImage from "@/assets/amenity-spa.png";

const iconMap: Record<string, React.ElementType> = {
  Wifi,
  UtensilsCrossed,
  Car,
  Waves,
  Wind,
  Accessibility,
  Sparkles,
  ChefHat,
};

const featuredAmenities = [
  {
    title: "Infinity Pool",
    description:
      "Our stunning infinity pool overlooks the lush forest, offering a serene swimming experience. Enjoy poolside service and comfortable loungers as you take in the breathtaking views.",
    image: poolImage,
  },
  {
    title: "Fine Dining Restaurant",
    description:
      "Experience culinary excellence at our multi-cuisine restaurant. Our chefs craft exquisite dishes using locally sourced ingredients, paired with an extensive wine selection.",
    image: restaurantImage,
  },
  {
    title: "Luxury Spa & Wellness",
    description:
      "Rejuvenate your body and mind at our world-class spa. Choose from a range of traditional and modern treatments designed to restore balance and vitality.",
    image: spaImage,
  },
];

const Amenities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={poolImage}
            alt="Resort Amenities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Experiences
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
            Our Amenities
          </h1>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              World-Class Facilities
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl mb-6">
              Everything You Need
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
              {siteData.name} offers an array of premium amenities designed to
              make your stay exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.amenities.map((amenity, index) => {
              const IconComponent = iconMap[amenity.icon] || Sparkles;
              return (
                <div
                  key={amenity.id}
                  className="card-luxury p-6 sm:p-8 text-center hover-lift group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>

                  <h3 className="font-serif text-base sm:text-lg mb-3">
                    {amenity.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="section-padding bg-secondary">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              Signature Experiences
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl">
              Featured Amenities
            </h2>
          </div>

          <div className="space-y-10">
            {featuredAmenities.map((amenity, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-4xl mb-5">
                    {amenity.title}
                  </h3>
                  <div className="w-12 sm:w-16 h-0.5 bg-accent mb-6" />
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Amenities;
