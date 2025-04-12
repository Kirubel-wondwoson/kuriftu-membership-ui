import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { MembershipTier } from "@/components/membership-tier"
import { TestimonialCard } from "@/components/testimonial-card"
import { BenefitItem } from "@/components/benefit-item"
import { MembershipComparison } from "@/components/membership-comparison"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="https://www.kurifturesorts.com/_nuxt/img/logo.e2cce34.svg" alt="Kuriftu Resort Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-serif font-semibold text-primary">Kuriftu Resort</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#membership" className="text-sm font-medium hover:text-primary transition-colors">
              Membership
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white">Join Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
            alt="Kuriftu Resort"
            width={1920}
            height={1080}
            className="w-full h-[600px] object-cover"
            priority
          />
          <div className="container relative z-20 flex flex-col items-center justify-center h-[600px] text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
              Experience Exclusive Privileges with Kuriftu Membership
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
              Join our prestigious membership program and unlock a world of luxury, personalized service, and
              exceptional benefits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore Membership
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Book a Stay
              </Button>
            </div>
          </div>
        </section>

        {/* Membership Overview */}
        <section id="membership" className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Choose Your Membership Tier
              </h2>
              <p className="text-muted-foreground text-lg">
                Our three exclusive membership tiers offer progressively premium benefits tailored to your preferences
                and lifestyle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <MembershipTier
                name="Golden"
                price="$100"
                color="gold"
                description="Perfect for first-time or occasional visitors seeking enhanced experiences."
                benefits={[
                  "10% discount on accommodations",
                  "Early check-in when available",
                  "Welcome amenity upon arrival",
                  "Member-only promotions",
                  "Birthday special offer",
                  "5% discount at resort restaurants",
                ]}
              />

              <MembershipTier
                name="Platinum"
                price="$350"
                color="platinum"
                description="Designed for regular guests who appreciate premium service and exclusive access."
                benefits={[
                  "15% discount on accommodations",
                  "Guaranteed late checkout (2 PM)",
                  "Complimentary 30-min spa treatment",
                  "Room upgrade when available",
                  "Priority restaurant reservations",
                  "Exclusive access to member events",
                  "Dedicated concierge service",
                  "10% discount at resort restaurants",
                ]}
                featured={true}
              />

              <MembershipTier
                name="Diamond"
                price="$750"
                color="diamond"
                description="The ultimate luxury experience for our most valued guests."
                benefits={[
                  "25% discount on accommodations",
                  "Guaranteed room upgrade",
                  "Complimentary airport transfers",
                  "Personalized in-room amenities",
                  "Dedicated personal assistant",
                  "Exclusive access to private events",
                  "Complimentary 60-min spa treatment",
                  "20% discount at resort restaurants",
                  "Complimentary minibar",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">Membership Benefits</h2>
              <p className="text-muted-foreground text-lg">
                Enjoy exclusive privileges and personalized experiences designed to make every stay memorable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitItem
                icon="hotel"
                title="Preferential Room Rates"
                description="Enjoy significant discounts on our luxurious accommodations with every stay."
                image="/kuriftu-resort-2.jpg"
              />
              <BenefitItem
                icon="utensils"
                title="Dining Privileges"
                description="Special discounts and priority reservations at our award-winning restaurants."
                image="/kuriftu-dining.jpg"
              />
              <BenefitItem
                icon="spa"
                title="Spa Treatments"
                description="Complimentary and discounted wellness and spa services to rejuvenate your body and mind."
                image="/kuriftu-spa.jpg"
              />
              <BenefitItem
                icon="gift"
                title="Welcome Amenities"
                description="Personalized welcome gifts and in-room amenities tailored to your preferences."
                image="/kuriftu-resort-3.jpg"
              />
              <BenefitItem
                icon="calendar"
                title="Exclusive Events"
                description="Access to member-only events, activities, and experiences throughout the year."
                image="/kuriftu-pool.jpg"
              />
              <BenefitItem
                icon="star"
                title="Loyalty Points"
                description="Earn points with every stay and redeem them for free nights, upgrades, and more."
                image="/kuriftu-resort-1.jpg"
              />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">Membership Comparison</h2>
              <p className="text-muted-foreground text-lg">
                Compare our membership tiers to find the perfect fit for your lifestyle and preferences.
              </p>
            </div>

            <MembershipComparison />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">Member Experiences</h2>
              <p className="text-muted-foreground text-lg">
                Hear what our valued members have to say about their Kuriftu Resort membership experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                tier="Diamond Member"
                image="/testimonial-1.jpg"
                quote="The Diamond membership has transformed our family vacations. The personalized service and exclusive benefits make every stay truly special."
              />
              <TestimonialCard
                name="Michael Chen"
                tier="Platinum Member"
                image="/testimonial-2.jpg"
                quote="As a business traveler, the Platinum membership offers incredible value. The guaranteed late checkout and dedicated concierge have been game-changers."
              />
              <TestimonialCard
                name="Amara Okafor"
                tier="Golden Member"
                image="/testimonial-3.jpg"
                quote="Even at the Golden tier, the benefits are substantial. The discounts alone have paid for my membership several times over."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gold-gradient text-white">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Experience?</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Join our exclusive membership program today and start enjoying premium benefits on your very next stay.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Become a Member
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-gradient">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find answers to common questions about our membership program.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-secondary p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">How do I upgrade my membership tier?</h3>
                <p className="text-muted-foreground">
                  You can upgrade your membership tier at any time by contacting our membership concierge or through
                  your online member portal. Upgrades are prorated based on your current membership period.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Are membership fees refundable?</h3>
                <p className="text-muted-foreground">
                  Membership fees are non-refundable. However, all benefits remain active for the full duration of your
                  membership period regardless of usage.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">How do I earn and redeem loyalty points?</h3>
                <p className="text-muted-foreground">
                  You earn points based on your spending at the resort and your membership tier. Points can be redeemed
                  for room nights, spa treatments, dining, and exclusive experiences through your member portal or at
                  the resort.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">Can I share my membership benefits with family?</h3>
                <p className="text-muted-foreground">
                  Yes, certain benefits can be shared with immediate family members staying in the same room. Additional
                  family memberships are also available at a discounted rate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="https://www.kurifturesorts.com/_nuxt/img/logo.e2cce34.svg" alt="Kuriftu Resort Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-serif font-semibold text-primary-foreground">Kuriftu Resort</span>
              </div>
              <p className="text-white/70">
                Luxury accommodations and exceptional experiences in breathtaking locations.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4 text-primary-foreground">Membership</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Join Now
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Member Login
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4 text-primary-foreground">Resort</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Accommodations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Dining
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Spa & Wellness
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                    Activities
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif font-medium text-lg mb-4 text-primary-foreground">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70">membership@kuriftu.com</li>
                <li className="text-white/70">+251 116 672 121</li>
                <li className="text-white/70">Bishoftu, Ethiopia</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-primary-foreground transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Kuriftu Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
