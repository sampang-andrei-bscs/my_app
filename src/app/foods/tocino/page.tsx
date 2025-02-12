"use client";
import Image from "next/image";

export default function TocinoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMivbvyA9IJqdYRtKyskN3SGFZanW1gfUEQDxAo" // Replace with your hero image
          alt="Tocino"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Tocino</h1>
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
            ✅ 1 kg pork (preferably pork belly or pork shoulder, thinly sliced)
✅ 1/2 cup brown sugar
✅ 1 tbsp salt
✅ 1 tbsp soy sauce (optional, for extra umami)
✅ 1 tsp black pepper
✅ 5 cloves garlic (minced)
✅ 2 tbsp pineapple juice or calamansi juice (for slight tanginess)
✅ 1 tsp annatto powder (achuete) (for reddish color)
✅ 2 tbsp vinegar (optional, for preservation)
✅ 1/2 tsp Prague powder #1 (optional, for curing & longer shelf life)
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMivbvyA9IJqdYRtKyskN3SGFZanW1gfUEQDxAo" // Replace with a landscape image
              alt="Tocino Dish"
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
              The History of Tocino
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Tocino is a sweet and savory cured meat that has been a staple of Filipino breakfasts, often served with garlic rice (sinangag) and fried egg (itlog), forming the popular dish Tocilog. This well-loved delicacy has a rich history, influenced by Spanish curing techniques and Kapampangan culinary traditions.
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMivbvyA9IJqdYRtKyskN3SGFZanW1gfUEQDxAo" // Replace with a landscape image
              alt="Tocino Dish"
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
            Spanish Influence and Indigenous Preservation
            </h3>
            <p className="text-gray-600 leading-relaxed">
            The term "tocino" comes from Spanish, where it originally referred to salted pork belly or bacon. During the Spanish colonization of the Philippines (1565-1898), Spanish curing methods were introduced, influencing Filipino methods of preserving meat. However, Filipinos adapted the technique by using a sweeter cure, replacing the heavily salted preservation methods with a mix of sugar, salt, and local spices.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Pampanga: The Birthplace of Filipino Tocino
            </h3>
            <p className="text-gray-600 leading-relaxed">
            The Kapampangans are credited with perfecting and popularizing tocino in the early 20th century. They developed a signature curing mix using sugar, salt, and sometimes pineapple juice, giving the meat its distinctive sweet, slightly tangy flavor. The most well-known Kapampangan version is called Pindang, a variant of tocino that sometimes undergoes light fermentation before cooking.</p>
            <p className="text-gray-600 leading-relaxed">
A key figure in the commercial success of tocino is Lolita Hizon, who founded Pampanga’s Best in the 1960s. Her business helped bring Kapampangan-style tocino to a national and international market.
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
        Tocino has evolved from a simple preservation technique into a Filipino culinary icon, deeply tied to Kapampangan cuisine and Spanish influences. Whether enjoyed in a classic tocilog, grilled, or as a fusion dish, it remains a beloved part of Filipino food culture.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a Tocino Recipe
          </a>
        </div>
      </section>
    </main>
  );
}