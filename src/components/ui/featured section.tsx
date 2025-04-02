import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedSection() {
  const featuredAnimals = [
    {
      id: 1,
      name: "Blue Whale",
      category: "Mammals",
      image: "https://images.unsplash.com/photo-1548638168-bdb1d0f1e700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMHdoYWxlfGVufDB8fDB8fHww",
      description: "The largest animal known to have ever existed, reaching lengths of 29.9 meters.",
      fact: "A blue whale's heart is the size of a small car.",
    },
    {
      id: 2,
      name: "Great White Shark",
      category: "Fish",
      image: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Larger female individuals grow to 6.1 m in length.",
      fact: "Can detect one drop of blood in 100 liters of water.",
    },
    {
      id: 3,
      name: "Giant Squid",
      category: "Invertebrates",
      image: "https://images.unsplash.com/photo-1551899714-406fb07fb6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhaW50JTIwc3F1aWR8ZW58MHx8MHx8fDA%3D",
      description: "Deep-ocean dwelling squid showing deep-sea gigantism.",
      fact: "Has the largest eyes in the animal kingdom (10 inches).",
    },
    {
      id: 4,
      name: "Sea Turtle",
      category: "Reptiles",
      image: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VhJTIwdHVydGxlfGVufDB8fDB8fHww",
      description: "Seven existing species of these ancient mariners.",
      fact: "Can hold their breath for several hours.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Sea Creatures</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore some of the most fascinating creatures that inhabit our oceans.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          {featuredAnimals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover"
                  priority={animal.id <= 2} // Only prioritize first two images
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">
                  {animal.category}
                </Badge>
                <CardTitle className="text-2xl">{animal.name}</CardTitle>
                <CardDescription className="mt-2">{animal.description}</CardDescription>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <p className="text-sm font-medium">Did you know?</p>
                  <p className="text-sm text-muted-foreground">{animal.fact}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link 
                  href={`/animals/${animal.id}`} 
                  className="text-blue-600 hover:underline dark:text-blue-400 font-medium"
                >
                  Learn more →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}