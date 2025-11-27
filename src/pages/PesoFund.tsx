import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Snowflake, Home } from "lucide-react";
import { Link } from "wouter";

export default function PesoFund() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300">
            Infrastructure development across East and Southern Africa
          </p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--navy))] mb-4">
              Focus Areas
            </h2>
            <p className="text-lg text-[rgb(var(--slate))] max-w-3xl mx-auto">
              We develop essential infrastructure across Zambia, Kenya, and Tanzania
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[rgb(var(--gold))]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                  Renewable Energy
                </h3>
                <p className="text-[rgb(var(--slate))]">
                  Solar power and clean energy solutions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center mx-auto mb-4">
                  <Snowflake className="w-8 h-8 text-[rgb(var(--gold))]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                  Cold Chain & Food Security
                </h3>
                <p className="text-[rgb(var(--slate))]">
                  Cold storage and logistics infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-lg bg-[rgb(var(--gold))]/10 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-[rgb(var(--gold))]" />
                </div>
                <h3 className="text-xl font-bold text-[rgb(var(--navy))] mb-3">
                  Hospitality & Tourism
                </h3>
                <p className="text-[rgb(var(--slate))]">
                  Sustainable tourism experiences
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[rgb(var(--navy))] text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner in Building Africa's Future
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            TriMesa Capital Partners works with institutional and accredited investors who share our vision for sustainable African infrastructure development.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[rgb(var(--gold))] text-[rgb(var(--navy))] hover:bg-[rgb(var(--gold))]/90 text-lg px-8"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
