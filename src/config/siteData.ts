// Centralized configuration file for Woodland Resorts
// Change any value here to update the entire website

export const siteData = {
  // Basic Information
  name: "Woodland Resorts",
  tagline: "Where Nature Meets Luxury",
  description: "Experience unparalleled luxury amidst the serene beauty of nature at Woodland Resorts. Our premium resort offers world-class amenities, exceptional hospitality, and an unforgettable escape from the ordinary.",
  // shortDescription: "A luxury resort destination offering premium hospitality, serene natural surroundings, and world-class amenities for the discerning traveler.",

  // Contact Information
  phone: "+91 99518 44444",
  phoneDisplay: "+91 99518 44444",
  email: "reservations@woodlandresorts.com",

  // Address
  address: {
    full: "Sy no. 18, Aziznagar Village Rd, near Srinidhi School, opp. Nagbabu Studio, Moinabad, Telangana – 500075",
    street: "Sy no. 18, Aziznagar Village Rd",
    landmark: "near Srinidhi School, opp. Nagbabu Studio",
    city: "Moinabad",
    state: "Telangana",
    pincode: "500075",
    country: "India",
    plusCode: "88VP+MQ, Moinabad, Telangana",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.2!3d17.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE4JzAwLjAiTiA3OMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
    directionsUrl: "https://www.google.com/maps/dir//Woodland+Resorts+Moinabad"
  },

  // Ratings & Reviews
  rating: {
    score: 4.4,
    maxScore: 5,
    reviewCount: 1482,
    platform: "Google"
  },

  // Timings
  timings: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    frontDesk: "24/7"
  },

  // Category
  category: "Resort Hotel",

  // Social Links
  social: {
    facebook: "https://facebook.com/woodlandresorts",
    instagram: "https://instagram.com/woodlandresorts",
    twitter: "https://twitter.com/woodlandresorts",
    youtube: "",
    linkedin: ""
  },

  // Amenities
  amenities: [
    {
      id: "wifi",
      name: "Free Wi-Fi",
      description: "High-speed internet throughout the property",
      icon: "Wifi"
    },
    {
      id: "breakfast",
      name: "Gourmet Breakfast",
      description: "Complimentary breakfast with local and international cuisine",
      icon: "UtensilsCrossed"
    },
    {
      id: "parking",
      name: "Free Parking",
      description: "Secure parking for all guests",
      icon: "Car"
    },
    {
      id: "pool",
      name: "Outdoor Swimming Pool",
      description: "Infinity pool with stunning views",
      icon: "Waves"
    },
    {
      id: "ac",
      name: "Air-Conditioned Rooms",
      description: "Climate-controlled comfort in every room",
      icon: "Wind"
    },
    {
      id: "accessible",
      name: "Accessible Facilities",
      description: "Wheelchair accessible throughout",
      icon: "Accessibility"
    },
    {
      id: "spa",
      name: "Luxury Spa",
      description: "Rejuvenating treatments and wellness services",
      icon: "Sparkles"
    },
    {
      id: "restaurant",
      name: "Fine Dining",
      description: "Multi-cuisine restaurant with scenic views",
      icon: "ChefHat"
    }
  ],

  // Room Categories
  rooms: [
    {
      id: "deluxe",
      name: "Deluxe Room",
      description: "Elegant comfort with modern amenities and garden views",
      size: "350 sq ft",
      capacity: "2 Adults",
      priceFrom: 8999,
      features: ["King Bed", "Garden View", "Rain Shower", "Smart TV"]
    },
    {
      id: "premium",
      name: "Premium Suite",
      description: "Spacious luxury with separate living area and premium amenities",
      size: "550 sq ft",
      capacity: "2 Adults + 1 Child",
      priceFrom: 14999,
      features: ["King Bed", "Pool View", "Bathtub", "Mini Bar", "Balcony"]
    },
    {
      id: "villa",
      name: "Private Villa",
      description: "Ultimate privacy with private pool and personalized butler service",
      size: "1200 sq ft",
      capacity: "4 Adults",
      priceFrom: 29999,
      features: ["2 Bedrooms", "Private Pool", "Kitchen", "Garden", "Butler Service"]
    },
    {
      id: "presidential",
      name: "Presidential Suite",
      description: "The epitome of luxury with panoramic views and exclusive amenities",
      size: "2000 sq ft",
      capacity: "4 Adults + 2 Children",
      priceFrom: 49999,
      features: ["3 Bedrooms", "Private Terrace", "Jacuzzi", "Dining Room", "24/7 Butler"]
    }
  ],

  // Gallery Categories
  galleryCategories: [
    { id: "all", name: "All" },
    { id: "rooms", name: "Rooms" },
    { id: "exterior", name: "Exterior" },
    { id: "amenities", name: "Amenities" },
    { id: "dining", name: "Food & Drinks" },
    { id: "events", name: "Events" }
  ],

  // Sample Reviews
  reviews: [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "December 2025",
      comment: "Absolutely stunning resort! The rooms were immaculate, the staff was incredibly welcoming, and the pool area is breathtaking. Perfect getaway from the city.",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      rating: 5,
      date: "November 2025",
      comment: "One of the best resorts near Hyderabad. The attention to detail is remarkable. The spa services were world-class. Will definitely return!",
      avatar: "RM"
    },
    {
      id: 3,
      name: "Ananya Reddy",
      rating: 4,
      date: "October 2025",
      comment: "Beautiful property surrounded by nature. The breakfast spread was amazing with so many options. Great place for a family vacation.",
      avatar: "AR"
    }
  ],

  // SEO
  seo: {
    title: "Luxury Resort in Moinabad | Woodland Resorts",
    description: "Experience premium luxury at Woodland Resorts, a 5-star resort near Hyderabad. World-class amenities, serene nature, and exceptional hospitality await you.",
    keywords: "luxury resort, Moinabad resort, Hyderabad resort, woodland resorts, premium hotel, nature resort, wedding venue"
  }
};

export type SiteData = typeof siteData;
