"use client";
import Image from "next/image";

export default function BulanglangPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMik2ZEsMh8BHG2MXr9VJRKnwiDeyutOQa4Yglx" // Replace with your hero image
          alt="Buro"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Bulanglang</h1>
            <p className="text-3xl mb-8 drop-shadow-2xl">
            A Traditional Filipino Vegetable Stew
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
              Ingredients for Bulanglang
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            1kg ulang(shrimp)
6 cups water
1 medium onion, peeled and quartered
2 cloves garlic, minced
1 thumb-sized ginger, peeled and sliced
2 medium tomatoes, quartered
2 tbsp fish sauce (patis) or salt (to taste)
1 small kalabasa (squash), peeled and sliced into chunks
1 small eggplant, sliced into rounds
1/2 cup sitaw (string beans), cut into 2-inch pieces
1 bunch kangkong (water spinach), cut into 3-inch lengths
1 small labanos (radish), peeled and sliced
1 small ampalaya (bitter melon), sliced (optional, for a bitter flavor)
1-2 tbsp bagoong (fermented shrimp paste) or shrimp paste (optional)
1-2 fresh long green chili (optional for a mild spicy kick)
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMik2ZEsMh8BHG2MXr9VJRKnwiDeyutOQa4Yglx" // Replace with a landscape image
              alt="Bulanglang Dish"
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
              The History of Bulanglang
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Bulanglang is a popular Filipino vegetable stew, known for its light, flavorful broth that highlights a variety of fresh, seasonal vegetables. Its origins are linked to Filipino cuisine's emphasis on using fresh, local ingredients while reflecting the simplicity and ingenuity of rural cooking traditions.
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMik2ZEsMh8BHG2MXr9VJRKnwiDeyutOQa4Yglx" // Replace with a landscape image
              alt="Bulanglang Dish"
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
            Tagalog Region
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Bulanglang is believed to have originated from the Tagalog region, although variations of this dish can be found across the Philippines, especially in rural and coastal areas where vegetables are abundant. The dish is particularly popular in Batangas, Cavite, and Laguna in the Luzon region.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            The Role of Bulanglang in Filipino Culture
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Bulanglang is seen as a comfort food in Filipino households, especially during Lenten season, when many people abstain from eating meat. It’s a light, healthy alternative, full of vitamins and minerals from the vegetables, and is often paired with steamed rice.

Additionally, it’s not just a family meal but also a community dish. Families often share it during communal meals or festivals, making it a dish that symbolizes unity and the sharing of blessings.
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
        Bulanglang reflects the Filipino values of resourcefulness, simplicity, and community. It has evolved into a beloved dish across the country, with regional variations, but always maintaining its humble beginnings as a wholesome and flavorful vegetable stew.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a Bulanglang Recipe
          </a>
        </div>
      </section>
    </main>
  );
}