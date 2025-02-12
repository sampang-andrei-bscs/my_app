"use client";
import Image from "next/image";

export default function BuroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMifzIb3AKeadN2m3kBPLIc9OhGKEZoQ4njwtqD" // Replace with your hero image
          alt="Buro"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Buro</h1>
            <p className="text-3xl mb-8 drop-shadow-2xl">
              A Tangy Delicacy of Kapampangan Cuisine
            </p>
            <a
              href="#details"
              className="bg-white text-gray-800 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

     
      <section id="ingredients" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Ingredients for Buro
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            For Fish Buro (Burong Isda):
1 kg dalag (mudfish), tilapia, or hito (catfish) (cleaned and cut into small pieces)
2 cups cooked rice (cooled, preferably slightly dry)
2 tbsp salt (or adjust to taste)
1 tbsp fermented rice water or sterilized water
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMifzIb3AKeadN2m3kBPLIc9OhGKEZoQ4njwtqD" // Replace with a landscape image
              alt="Buro Dish"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      <section id="details" className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              The History of Buro
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
              Buro is a traditional Kapampangan fermented dish, commonly made with rice and fish or shrimp. It has been a staple in Pampanga for generations, known for its strong aroma and tangy, umami-rich flavor. Buro pairs well with grilled or fried meats, particularly hito (catfish) and mustasa (mustard leaves).
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMifzIb3AKeadN2m3kBPLIc9OhGKEZoQ4njwtqD" // Replace with a landscape image
              alt="Buro Dish"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="container mx-auto px-6 py-16 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Origins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Spanish Colonial Period (1565-1898): The Rise of Buro
            </h3>
            <p className="text-gray-600 leading-relaxed">
              During the Spanish era, Pampanga became the culinary center of the Philippines, and buro was recognized as a specialty dish. It was often served with grilled or fried meats, balancing their rich, smoky flavors. Wealthier families refined the fermentation process, improving the texture and taste of buro.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Modern Adaptations and Culinary Innovations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Some modern buro recipes use less fermentation time to reduce the strong sourness, making it more appealing to new generations. In restaurants, buro is often sautéed with garlic, onions, and tomatoes before serving, enhancing its flavor. Other variations include spicier versions with chili or additional seasonings.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Conclusion
        </h2>
        <p className="text-2xl text-gray-700 text-center leading-relaxed">
          From an ancient food preservation technique to a beloved Kapampangan delicacy, buro has stood the test of time. Whether paired with grilled catfish, fresh mustasa leaves, or enjoyed as a side dish, its bold flavors continue to define the richness of Kapampangan cuisine.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a Buro Recipe
          </a>
        </div>
      </section>
    </main>
  );
}