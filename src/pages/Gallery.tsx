import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-resort.png";
import deluxeImage from "@/assets/room-deluxe.png";
import premiumImage from "@/assets/room-premium.png";
import villaImage from "@/assets/room-villa.png";
import presidentialImage from "@/assets/room-presidential.png";
import poolImage from "@/assets/amenity-pool.png";
import restaurantImage from "@/assets/amenity-restaurant.png";
import spaImage from "@/assets/amenity-spa.png";
import eventImage from "@/assets/gallery-event.png";
import exteriorImage from "@/assets/gallery-exterior.png";

const galleryImages = [
  { id: 1, src: heroImage, category: "exterior", title: "Resort Overview" },
  { id: 2, src: exteriorImage, category: "exterior", title: "Evening View" },
  { id: 3, src: deluxeImage, category: "rooms", title: "Deluxe Room" },
  { id: 4, src: premiumImage, category: "rooms", title: "Premium Suite" },
  { id: 5, src: villaImage, category: "rooms", title: "Private Villa" },
  { id: 6, src: presidentialImage, category: "rooms", title: "Presidential Suite" },
  { id: 7, src: poolImage, category: "amenities", title: "Infinity Pool" },
  { id: 8, src: spaImage, category: "amenities", title: "Luxury Spa" },
  { id: 9, src: restaurantImage, category: "dining", title: "Fine Dining" },
  { id: 10, src: eventImage, category: "events", title: "Wedding Venue" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] =
    useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={exteriorImage}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Visual Journey
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {siteData.galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 rounded-full ${activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end justify-start p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-serif text-base sm:text-lg md:text-xl text-primary-foreground">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary-foreground hover:text-accent transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-primary-foreground">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
