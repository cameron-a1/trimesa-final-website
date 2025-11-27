import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Shield, Target } from "lucide-react";

export default function GovernanceESG() {
  const esgFocusAreas = [
    {
      icon: Leaf,
      title: "African Energy Access",
      description: "We invest in renewable energy and grid infrastructure to expand electricity access across underserved African markets, addressing critical power deficits in Zambia, Kenya, and Tanzania.",
    },
    {
      icon: Users,
      title: "African Job Creation",
      description: "Our portfolio companies create sustainable employment opportunities in local African communities, building skilled workforces and supporting economic development in frontier markets.",
    },
    {
      icon: Shield,
      title: "Community Development",
      description: "We support local communities through our infrastructure projects, creating lasting positive impact and sustainable growth across East and Southern Africa.",
    },
    {
      icon: Target,
      title: "Africa Climate Resilience",
      description: "We focus on essential African infrastructure and services that enhance climate adaptation and reduce environmental impact across East and Southern African markets.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ESG Commitment
          </h1>
          <p className="text-xl text-gray-300">
            Sustainable development across African emerging markets
          </p>
        </div>
      </section>

      {/* ESG Focus Areas */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-4">
              Our ESG Focus
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              TriMesa Capital Partners integrates environmental, social, and governance considerations into every investment decision, creating sustainable value for communities and investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {esgFocusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-2 hover:border-[rgb(var(--gold))] transition-colors">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[rgb(var(--gold))]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                          {area.title}
                        </h3>
                        <p className="text-[rgb(var(--slate))] leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[rgb(var(--off-white))]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[rgb(var(--navy))] mb-6">
              Creating Lasting Impact
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] leading-relaxed">
              Our commitment to sustainable development goes beyond financial returns. We build infrastructure that serves communities, creates employment, and addresses critical needs across Zambia, Kenya, and Tanzania. Every project is designed to deliver measurable environmental and social benefits alongside economic value.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
