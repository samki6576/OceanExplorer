import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Waves, Fish, Anchor, ArrowRight, ExternalLink } from "lucide-react"
import FeaturedSection from "@/components/ui/featured section"
import NewsletterSignup from "@/components/ui/newsletter"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Discover the Ocean
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Explore the Wonders of the Deep Blue Sea
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Dive into fascinating facts about marine life, ocean conservation, and the latest discoveries from the
                  world&#39;s oceans.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/animals">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                    Explore Sea Life <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/news">
                  <Button size="lg" variant="outline">
                    Latest Ocean News
                  </Button>
                </Link>
              </div>
            </div>
      <div
        className="relative lg:block"
     
      >
        
      </div>
          </div>
        </div>
      </section>

      {/* Featured Animals Section */}
      <FeaturedSection />

      {/* Latest News Section */}
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1468581264429-2548ef9eb732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VhfGVufDB8fDB8fHww')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                Latest Updates
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ocean News & Discoveries</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Stay informed about the latest happenings in our oceans, from new species discoveries to conservation
                efforts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "New Coral Species Discovered in Pacific",
                description:
                  "Scientists have identified a previously unknown species of coral that shows remarkable resilience to warming waters.",
                image:
                  "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8fDB8fHww",
              },
              {
                id: 2,
                title: "Ocean Cleanup Project Shows Promising Results",
                description:
                  "The latest ocean cleanup initiative has removed over 100 tons of plastic from the Great Pacific Garbage Patch.",
                image:
                  "https://images.unsplash.com/photo-1497290756760-23ac55edf36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VhfGVufDB8fDB8fHww"
              },
              {
                id: 3,
                title: "Deep Sea Expedition Reveals Unknown Creatures",
                description:
                  "A recent deep-sea expedition has documented dozens of potentially new species living in the hadal zone.",
                image:
                  "https://images.unsplash.com/photo-1503756234508-e32369269deb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhfGVufDB8fDB8fHww",
              },
            ].map((news) => (
              <Card key={news.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    src={news.image}
                    width={400}
                    height={200}
                    alt={news.title}
                    className="w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-2">Marine Science</Badge>
                  <CardTitle className="line-clamp-1 text-xl">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {news.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link
                    href={`/news/${news.id}`}
                    className="text-blue-600 hover:underline inline-flex items-center dark:text-blue-400"
                  >
                    Read more <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/news">
              <Button variant="outline" size="lg">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Explore With Us?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into a world of ocean knowledge with our comprehensive resources and community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Fish className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
                title: "Extensive Species Database",
                description: "Access detailed information on thousands of marine species from around the world.",
              },
              {
                icon: <Waves className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
                title: "Latest Ocean News",
                description: "Stay updated with the most recent discoveries, conservation efforts, and marine events.",
              },
              {
                icon: <Anchor className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
                title: "Expert Contributors",
                description: "Content verified by marine biologists and oceanographers for accuracy.",
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="flex items-center justify-center">{feature.icon}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="mt-2">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}

