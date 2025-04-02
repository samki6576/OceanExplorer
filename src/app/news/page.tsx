import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import Image from "next/image"
import Link from "next/link"
import { Search, Calendar } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "New Coral Species Discovered in Pacific",
      category: "Discovery",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1581011277401-9f2953225051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29yYWx8ZW58MHx8MHx8fDA%3D",
      summary:
        "Scientists have identified a previously unknown species of coral that shows remarkable resilience to warming waters, potentially offering insights into coral reef conservation.",
    },
    {
      id: 2,
      title: "Ocean Cleanup Project Shows Promising Results",
      category: "Conservation",
      date: "June 3, 2023",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW58ZW58MHx8MHx8fDA%3D",
      summary:
        "The latest ocean cleanup initiative has removed over 100 tons of plastic from the Great Pacific Garbage Patch, marking a significant milestone in ocean conservation efforts.",
    },
    {
      id: 3,
      title: "Deep Sea Expedition Reveals Unknown Creatures",
      category: "Exploration",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1549074862-6173e20d02a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcCUyMHNlYXxlbnwwfHwwfHx8MA%3D%3D",
      summary:
        "A recent deep-sea expedition has documented dozens of potentially new species living in the hadal zone, expanding our understanding of life in extreme environments.",
    },
    {
      id: 4,
      title: "Rising Ocean Temperatures Affecting Migration Patterns",
      category: "Climate",
      date: "July 8, 2023",
      image: "https://images.unsplash.com/photo-1604599340287-2042e85a3802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVlcCUyMHNlYXxlbnwwfHwwfHx8MA%3D%3D",
      summary:
        "New research indicates that changing ocean temperatures are significantly altering the traditional migration routes of several marine species, with potential ecosystem impacts.",
    },
    {
      id: 5,
      title: "Breakthrough in Sustainable Fishing Techniques",
      category: "Technology",
      date: "May 30, 2023",
      image: "https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpc2hpbmd8ZW58MHx8MHx8fDA%3D",
      summary:
        "Innovative fishing methods developed by marine engineers promise to reduce bycatch by up to 85%, potentially revolutionizing commercial fishing practices.",
    },
    {
      id: 6,
      title: "Marine Protected Areas Show Biodiversity Increase",
      category: "Conservation",
      date: "June 17, 2023",
      image: "https://images.unsplash.com/photo-1598408745613-178751e2ccde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW5lfGVufDB8fDB8fHww",
      summary:
        "A decade-long study of marine protected areas reveals significant increases in both biodiversity and fish populations, supporting the case for expanded conservation zones.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Ocean News & Discoveries</h1>
        <p className="text-muted-foreground text-lg">
          Stay informed about the latest happenings in our oceans, from new species discoveries to conservation efforts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search news..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="discovery">Discovery</SelectItem>
              <SelectItem value="conservation">Conservation</SelectItem>
              <SelectItem value="exploration">Exploration</SelectItem>
              <SelectItem value="climate">Climate</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{article.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {article.date}
                </div>
              </div>
              <CardTitle className="line-clamp-2 text-xl">{article.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-3">{article.summary}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/news/${article.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
                Read full article
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

