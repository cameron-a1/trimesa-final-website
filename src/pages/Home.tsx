import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Zap, Snowflake, Building2 } from "lucide-react";

export default function Home() {
  const sectors = [
    {
      icon: Zap,
      title: "Renewable Energy",
      description: "Solar power infrastructure and distributed energy systems delivering reliable electricity across East and Southern Africa.",
    },
    {
      icon: Snowflake,
      title: "Cold Chain & Logistics",
      description: "Temperature-controlled storage and distribution networks supporting agricultural value chains and food security.",
    },
    {
      icon: Building2,
      title: "Hospitality & Real Estate",
      description: "Sustainable tourism infrastructure and commercial developments in high-growth African markets.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-24 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src="/brand/trimesa-logo-transparent.png"
                alt="TriMesa Capital Partners"
                className="h-64 sm:h-80 md:h-96 lg:h-[48rem] xl:h-[56rem] w-auto max-w-full mx-auto object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Africa's
              <span className="block text-[rgb(var(--gold))]">Essential Infrastructure</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              TriMesa Capital Partners is a specialized investment firm focused on essential infrastructure development across Zambia, Kenya, and Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/peso-fund">
                <Button
                  size="lg"
                  className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
                >
                  Our Approach
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[rgb(var(--navy))] text-lg px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
              Investment Focus
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              We concentrate on sectors that address critical infrastructure gaps and deliver sustainable returns in African emerging markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardContent className="pt-8 pb-8">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[rgb(var(--gold))]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-[rgb(var(--slate))] leading-relaxed">
                      {sector.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Geographic Focus Section */}
      <section className="py-24 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
                East & Southern Africa
              </h2>
              <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
                Our investment platform maintains permanent operational presence across three core markets.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-6 border-2">
                <div className="text-2xl font-bold text-[rgb(var(--navy))] mb-2">Zambia</div>
                <div className="text-sm text-[rgb(var(--slate))]">Southern Africa</div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2">
                <div className="text-2xl font-bold text-[rgb(var(--navy))] mb-2">Kenya</div>
                <div className="text-sm text-[rgb(var(--slate))]">East Africa</div>
              </div>
              <div className="bg-white rounded-lg p-6 border-2">
                <div className="text-2xl font-bold text-[rgb(var(--navy))] mb-2">Tanzania</div>
                <div className="text-sm text-[rgb(var(--slate))]">East Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            For Institutional Investors
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            TriMesa Capital Partners serves institutional and accredited investors seeking exposure to African infrastructure opportunities.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
            >
              Request Information
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
