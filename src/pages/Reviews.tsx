import { Layout } from "@/components/layout/Layout";
import { siteData } from "@/config/siteData";
import { Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const Reviews = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Guest Reviews"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>

        <div className="relative z-10 container-luxury text-center text-primary-foreground">
          <p className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 text-accent">
            Testimonials
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
            Guest Reviews
          </h1>
        </div>
      </section>

      {/* Rating Overview */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center items-center gap-1 sm:gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${i < Math.floor(siteData.rating.score)
                      ? "fill-accent text-accent"
                      : "text-primary-foreground/30"
                    }`}
                />
              ))}
            </div>

            <p className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent mb-4">
              {siteData.rating.score}
              <span className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/60">
                /{siteData.rating.maxScore}
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-xl text-primary-foreground/80">
              Based on{" "}
              <span className="text-accent font-medium">
                {siteData.rating.reviewCount.toLocaleString()}
              </span>{" "}
              {siteData.rating.platform} reviews
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-accent mb-4">
              What Our Guests Say
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl md:text-5xl mb-6">
              Recent Reviews
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.reviews.map((review, index) => (
              <div
                key={review.id}
                className="card-luxury p-6 sm:p-8 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-accent/30 mb-6" />

                <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm sm:text-base">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {review.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < review.rating
                          ? "fill-accent text-accent"
                          : "text-muted-foreground/30"
                        }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="mt-16 text-center">
            <a
              href="https://www.google.com/search?q=Woodland+Resorts+Moinabad+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-secondary px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-sm sm:text-base text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">View All Reviews on Google</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
