import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const articles = [
  {
    title: "TriMesa Market Insight #1",
    slug: "market-insight-1",
    date: "Coming Soon",
  },
  {
    title: "TriMesa Market Insight #2",
    slug: "market-insight-2",
    date: "Coming Soon",
  },
  {
    title: "TriMesa Market Insight #3",
    slug: "market-insight-3",
    date: "Coming Soon",
  },
  {
    title: "TriMesa Market Insight #4",
    slug: "market-insight-4",
    date: "Coming Soon",
  },
];

export default function Insights() {
  const handleArticleClick = (slug: string) => {
    toast.info("Article coming soon", {
      description: "This content is currently being developed.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[rgb(var(--navy))] to-[rgb(var(--slate))] text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Market perspectives on African infrastructure investment
          </p>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="border-2 hover:border-[rgb(var(--gold))] transition-all hover:shadow-lg cursor-pointer"
                onClick={() => handleArticleClick(article.slug)}
              >
                <CardHeader>
                  <CardTitle className="text-[rgb(var(--navy))] text-xl leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[rgb(var(--slate))] font-medium">
                      {article.date}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[rgb(var(--gold))] hover:text-[rgb(var(--gold))]/80 hover:bg-[rgb(var(--gold))]/10"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
