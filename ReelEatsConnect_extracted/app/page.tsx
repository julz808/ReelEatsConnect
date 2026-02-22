import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="ReelEats"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-heading font-bold text-2xl">
                ReelEats <span className="text-primary">Connect</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                How It Works
              </Link>
              <Link href="#for-creators" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                For Creators
              </Link>
              <Link href="#for-venues" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                For Venues
              </Link>
              <Link href="/auth/login/creator">
                <Button variant="ghost" size="sm" className="transition-all hover:scale-105">Sign In</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Large, Bold, Minimal */}
      <section className="pt-40 pb-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Flowing background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-5 animate-pulse">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0Z"
              fill="#fd7158"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Zap className="w-4 h-4" />
              Australia's Food Creator Marketplace
            </div>

            <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              Where Creators
              <br />
              <span className="text-primary">Meet Venues</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              The marketplace connecting food content creators with restaurants, cafes, and bars for authentic collaborations. <span className="font-semibold text-primary">Free to join.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Link href="/auth/signup/creator">
                <Button size="lg" className="text-lg px-10 py-7 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 duration-300">
                  I'm a Creator
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/auth/signup/restaurant">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-2 transition-all hover:scale-105 hover:border-primary hover:text-primary duration-300">
                  I'm a Venue
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="transition-all hover:scale-110 duration-300">
                <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600">Active Venues</div>
              </div>
              <div className="transition-all hover:scale-110 duration-300">
                <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-600">Creators</div>
              </div>
              <div className="transition-all hover:scale-110 duration-300">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">Connections Made</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              How <span className="text-primary">ReelEats Connect</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Four simple steps from sign up to collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Sign up for free and build your professional profile with your content style and preferences.",
              },
              {
                step: "02",
                title: "Browse & Discover",
                description: "Explore creators or venues that align with your style and collaboration goals.",
              },
              {
                step: "03",
                title: "Express Interest",
                description: "One click to show interest. When both sides match, you connect instantly.",
              },
              {
                step: "04",
                title: "Collaborate",
                description: "Access contact info and coordinate your content collaboration directly.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative animate-in fade-in slide-in-from-bottom-4 duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 h-full border border-gray-100 hover:border-primary/20 hover:-translate-y-2 group-hover:scale-105">
                  <div className="text-6xl font-bold text-primary/10 mb-4 transition-all duration-500 group-hover:text-primary/20">{item.step}</div>
                  <h3 className="font-heading font-semibold text-2xl mb-4 transition-colors group-hover:text-primary">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Creators Section */}
      <section id="for-creators" className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                For Creators
              </div>
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Get discovered by venues <span className="text-primary">ready to collaborate</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build your portfolio, connect with Melbourne's food venues, and create authentic content that grows your audience. <span className="font-semibold text-primary">Completely free.</span>
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free to join - no hidden fees or subscriptions",
                  "Browse restaurants, cafes, and bars looking for creators",
                  "Simple one-click matching - no complex applications",
                  "Direct access to venue contacts when you match",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-700 group hover:translate-x-2 transition-transform" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup/creator">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
                  Join for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-200">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/20 rounded-[3rem] p-8 transition-all hover:scale-105 duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500">
                  <Users className="w-32 h-32 text-primary/20 transition-all duration-500 hover:text-primary/30 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Venues Section */}
      <section id="for-venues" className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative animate-in fade-in slide-in-from-left duration-1000 delay-200">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/20 rounded-[3rem] p-8 transition-all hover:scale-105 duration-500">
                <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl flex items-center justify-center hover:shadow-3xl transition-shadow duration-500">
                  <Heart className="w-32 h-32 text-primary/20 transition-all duration-500 hover:text-primary/30 hover:scale-110" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-in fade-in slide-in-from-right duration-1000">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                For Venues
              </div>
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6 leading-tight">
                Find creators who <span className="text-primary">match your venue's vibe</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with authentic food creators who create content that drives real engagement and brings customers through your doors. <span className="font-semibold text-primary">Zero cost to join.</span>
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Free to join - no upfront costs or monthly fees",
                  "Browse content creators by niche and location",
                  "Express interest with one click - simple and fast",
                  "Connect directly when creators match back",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 animate-in fade-in slide-in-from-right duration-700 group hover:translate-x-2 transition-transform" style={{ animationDelay: `${index * 100 + 300}ms` }}>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/signup/restaurant">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
                  Join for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
            Ready to start <span className="text-primary">connecting?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Join hundreds of creators and venues already collaborating on ReelEats Connect
          </p>
          <p className="text-2xl font-semibold text-primary mb-12">
            100% Free to Join
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup/creator">
              <Button size="lg" className="text-lg px-10 py-7 rounded-full transition-all hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
                Sign Up as Creator
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/auth/signup/restaurant">
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-full border-2 transition-all hover:scale-105 hover:border-primary hover:text-primary duration-300">
                Sign Up as Venue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="ReelEats"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading font-bold text-lg">
                ReelEats <span className="text-primary">Connect</span>
              </span>
            </div>
            <div className="text-sm text-gray-600">
              &copy; 2025 ReelEats. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
