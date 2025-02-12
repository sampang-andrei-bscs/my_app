/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const touristSpots = [
  {
    id: 1,
    name: "Sisig",
    description: "a Filipino dish made from pork parts and chicken liver, seasoned with onions, chili peppers, and calamansi. It's a staple of Kapampangan cuisine and is often served on a sizzling plate. ",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiLT8piuW4vH1TAxoOZaQV30psBMYijL7KXqz5",
    path: "/foods/sisig",
  },
  {
    id: 2,
    name: "Buro",
    description: "Buro or balo-balo is basically fermented rice (mixed with shrimp or fish) which is a popular condiment in Pampanga. Some find eating buro extreme, maybe because of its pungent smell and appearance, but it makes eating much better. Once you overcome the thought of eating fermented rice, you might find eating buro delectable especially with deep fried hito (cat fish), mustasa (mustard greens), and boiled vegetables (okra, eggplant, etc.) on the side.",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMifzIb3AKeadN2m3kBPLIc9OhGKEZoQ4njwtqD",
    path: "/foods/buro",
  },
  {
    id: 3,
    name: "Tocino",
    description: "The tocino is probably one of the famed products of Pampanga that has been a staple of Filipino breakfast item for many years. If it’s your first time to hear about this dish, tocino is a processed pork meat that is sweet and salty when cooked, perfect for rice and sunny side up egg on the side. While this product is available nationwide, you should not miss-out on the chance to taste the authentic Kapampangan tocino that is offered only in the province which is “Pindang Damulag” – a thinly sliced carabao meat cured with vinegar and seasonings. The taste of pindang is sour compared to the sweet tocino that we are all familiar with, but pair it with a cup of rice with sliced tomatoes on the side, and you’ll surely experience one taste that is uniquely Kapampangan.",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMivbvyA9IJqdYRtKyskN3SGFZanW1gfUEQDxAo",
    path: "/foods/tocino",
  },
  {
    id: 4,
    name: " Bulanglang Kapampangan (Guava Sour Soup)",
    description: "This dish looks like a typical sinigang but it smells and tastes differently. Sinigang takes its sourness from the tamarind used for the broth, while bulanglang takes its sweet and sour flavor from the native guava. Usually mixed in the fruity thick soup are milkfish belly, ulang or fresh water prawns, and pork and partnered with something salty like bagoong (shrimp paste), patis (fish sauce), or soy sauce. Celebrity chef and travel host Anthony Bourdain was able to try this dish at Claude Tayag’s Bale Dutung and describes bulanglang as “a dish with so many flavors in just one scoop.”",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMik2ZEsMh8BHG2MXr9VJRKnwiDeyutOQa4Yglx",
    path: "/foods/bulanglang",
  },
  {
    id: 5,
    name: "Tibuk-tibuk",
    description: "Besides their main dishes, Kapampangans also take their desserts seriously. One dessert that you should try when visiting Pampanga is tibuk-tibuk. This is Pampanga’s version of Maja Blanca that is traditionally made with carabao’s milk, with a hint of dayap zest (local lemon) with latik on top. Tibuk-tibuk or tibok is literally translated as “heart beat” that describes the bubbles pulsating up and down (that looks like a beating heart) when the pudding is cooked. We suggest you try Susie’s Cuisine’s version of the tibuk-tibuk, for that creamy, melt in your mouth goodness that tastes like heaven.",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMim80XCDboPLiYVrf8hXAUz2RvTKneEdNjt70x",
    path: "/foods/tibuktibuk",
  },
  {
    id: 6,
    name: "Halo-Halo",
    description: "If you’re in Pampanga, don’t miss out on the chance to try two of the well-known halo-halo establishments in the area, which are Razon’s Halo-halo and Kabigting’s Halo-halo. These two names are considered as royalties in the local halo-halo scene. What makes their version of the halo-halo special is they use minimal ingredients for the dessert. Razon’s version of the halo-halo has only three ingredients which are sun-ripened saging na saba (sweetened local banana), macapuno, and leche flan with dayap rind topped with finely shaved ice. Kabigting’s Halo-halo also has a handful of ingredients which are sweet beans cooked halaya style, cream corn, and their special ingredient which is pastillas made from carabao’s milk.",
    imageUrl: "https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMim80XCDboPLiYVrf8hXAUz2RvTKneEdNjt70x",
    path: "/foods/halohalo",
  },
];

// Reusable SpotCard Component
const SpotCard = ({ spot, onClick }: { spot: any; onClick: () => void }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={spot.imageUrl}
      alt={spot.name}
      width={400}
      height={250}
      className="w-full h-48 object-cover"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
      <p className="text-gray-600 text-sm">{spot.description}</p>
      <button
        className="mt-4 inline-block text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        aria-label={`Explore ${spot.name}`}
      >
        Explore More
      </button>
    </div>
  </div>
);

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % touristSpots.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4">Pampanga Delicacies</h1>
            <p className="text-xl">Explore the best Dish in Pampanga.</p>
          </div>
        </div>
        {/* Slideshow */}
        <div className="absolute inset-0">
          {touristSpots.map((spot, index) => (
            <div
              key={spot.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={spot.imageUrl}
                alt={spot.name}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-lg font-semibold text-white">{spot.name}</h2>
                <p className="text-sm text-white">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Delicacies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {touristSpots.map((spot) => (
            <SpotCard
              key={spot.id}
              spot={spot}
              onClick={() => router.push(spot.path)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}