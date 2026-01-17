import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import { Button } from "@/components/ui/button";
import { Users, Maximize, Check } from "lucide-react";
import deluxeImage from "@/assets/room-deluxe.png";
import premiumImage from "@/assets/room-premium.png";
import villaImage from "@/assets/room-villa.png";
import presidentialImage from "@/assets/room-presidential.png";

const roomImages: Record<string, string> = {
  deluxe: deluxeImage,
  premium: premiumImage,
  villa: villaImage,
  presidential: presidentialImage,
};

const Rooms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={deluxeImage}
            alt="Luxury Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Accommodation
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold">
            Rooms & Suites
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each room at {siteData.name} is a haven of comfort and elegance,
            thoughtfully designed to provide the perfect retreat after a day of
            exploration or relaxation.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-secondary pt-5">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteData.rooms.map((room, index) => (
              <div
                key={room.id}
                className="card-luxury overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={roomImages[room.id]}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
                    From ₹{room.priceFrom.toLocaleString()}/night
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl md:text-3xl mb-3">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{room.description}</p>

                  {/* Room Details */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize className="w-4 h-4 text-primary" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{room.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 text-xs bg-secondary px-3 py-1.5 rounded-full"
                      >
                        <Check className="w-3 h-3 text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-emerald-light"
                  >
                    <Link to="/contact">Book This Room</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-serif text-xl mb-2">Check-in Time</h4>
              <p className="text-accent text-2xl font-medium">
                {siteData.timings.checkIn}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Check-out Time</h4>
              <p className="text-accent text-2xl font-medium">
                {siteData.timings.checkOut}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2">Front Desk</h4>
              <p className="text-accent text-2xl font-medium">
                {siteData.timings.frontDesk}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
