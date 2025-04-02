// app/Animalspages/page.tsx
interface Animalspage {
    id: number;
   name:  string;
   decription:string;
  }
  
  export default async function AnimalsPage() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/Animalspage");
      
      if (!res.ok) {
        throw new Error(`Failed to fetch Animalspages: ${res.status}`);
      }
  
      const Animalspages: Animalspage[] = await res.json();
  
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Blog Animalspages</h1>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Animalspages.map((Animalspage) => (
              <li 
                key={Animalspage.id} 

                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                
              </li>
            ))}
          </ul>
        </div>
      );
    } catch (error) {
      console.error(error);
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p className="text-red-500">
            Failed to load Animalspages. Please try again later.
          </p>
        </div>
      );
    }
  }