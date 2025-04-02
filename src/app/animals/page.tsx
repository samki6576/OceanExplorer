import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

export default function AnimalsPage() {
  const categories = [
    { id: "mammals", name: "Mammals" },
    { id: "fish", name: "Fish" },
    { id: "invertebrates", name: "Invertebrates" },
    { id: "reptiles", name: "Reptiles" },
    { id: "birds", name: "Sea Birds" },
  ]

  const animals = [
    {
      id: 1,
      name: "Blue Whale",
      category: "mammals",
      image: "https://images.unsplash.com/photo-1548638168-bdb1d0f1e700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ymx1ZSUyMHdoYWxlfGVufDB8fDB8fHww",
      description:
        "The blue whale is the largest animal known to have ever existed, reaching a maximum confirmed length of 29.9 meters and weight of 173 tonnes.",
    },
    {
      id: 2,
      name: "Great White Shark",
      category: "fish",
      image: "https://images.unsplash.com/photo-1597305526414-f2f172412ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoaXRlJTIwc2hhcmt8ZW58MHx8MHx8fDA%3D",
      description:
        "The great white shark is notable for its size, with larger female individuals growing to 6.1 m in length and 1,905–2,268 kg in weight.",
    },
    {
      id: 3,
      name: "Giant Squid",
      category: "invertebrates",
      image: "https://images.unsplash.com/photo-1503019419990-1d961b6301aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FpbnQlMjBzcXVpZHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "The giant squid is a deep-ocean dwelling squid and can grow to a tremendous size, offering an example of deep-sea gigantism.",
    },
    {
      id: 4,
      name: "Sea Turtle",
      category: "reptiles",
      image: "https://images.unsplash.com/photo-1533787896899-91b040188f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVydGxlJTIwc2VhfGVufDB8fDB8fHww",
      description:
        "Sea turtles are reptiles of the order Testudines and of the suborder Cryptodira. There are seven existing species of sea turtles.",
    },
    {
      id: 5,
      name: "Dolphin",
      category: "mammals",
      image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Dolphins are highly intelligent marine mammals and are part of the family of toothed whales that includes orcas and pilot whales.",
    },
    {
      id: 6,
      name: "Clownfish",
      category: "fish",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvd24lMjBmaXNofGVufDB8fDB8fHww",
      description:
        "Clownfish are small, brightly colored fish that live in sea anemones. They have a symbiotic relationship with the anemones.",
    },
    {
      id: 7,
      name: "Octopus",
      category: "invertebrates",
      image: "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Octopuses are soft-bodied, eight-limbed mollusks of the order Octopoda. They are known for their intelligence and ability to change color.",
    },
    {
      id: 8,
      name: "Albatross",
      category: "birds",
      image: "https://images.unsplash.com/photo-1532943126512-e2bcf68a488c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxiYXRyb3NzfGVufDB8fDB8fHww",
      description:
        "Albatrosses are large seabirds that can spend years at sea without ever touching land. They have the largest wingspan of any bird.",
    },
  ]

  return (
    <div className="container py-10">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Sea Animals</h1>
        <p className="text-muted-foreground text-lg">
          Explore the fascinating creatures that inhabit our oceans, from the smallest plankton to the largest whales.
        </p>
        <div className="relative max-w-md">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search animals..." className="pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 flex flex-wrap h-auto">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {animals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        </TabsContent>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {animals
                .filter((animal) => animal.category === category.id)
                .map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

interface Animal {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={animal.image || "/placeholder.svg"}
          alt={animal.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <Badge className="mb-2">{animal.category.charAt(0).toUpperCase() + animal.category.slice(1)}</Badge>
        <CardTitle className="text-xl">{animal.name}</CardTitle>
        <CardDescription className="mt-2 line-clamp-3">{animal.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/animals/${animal.id}`} className="text-blue-600 hover:underline dark:text-blue-400">
          Learn more
        </Link>
      </CardFooter>
    </Card>
  )
}

