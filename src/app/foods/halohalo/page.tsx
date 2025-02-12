"use client";
import Image from "next/image";

export default function BuroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMi2pmAU6VfoWKHLT0PU5cQq8NSshr6CX73xekY" // Replace with your hero image
          alt="Halo-Halo"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Halo-Halo</h1>
            <p className="text-3xl mb-8 drop-shadow-2xl">
            The Philippines' most famous cold dessert
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
              Ingredients for Halo-Halo
            </h2>
            <p className="text-l text-gray-700 mb-8 leading-relaxed">
            🥥 Base Ingredients:
1 cup shaved ice (finely crushed for a smooth texture)
1/2 cup evaporated milk (or fresh milk for a lighter version)
🍌 Sweetened Fruits & Beans: (Use as many as you like!)
1/4 cup sweetened saba bananas (cooked in sugar syrup)
1/4 cup sweetened macapuno (coconut strings)
1/4 cup nata de coco (coconut jelly)
1/4 cup sweetened red mung beans
1/4 cup sweetened garbanzo beans (chickpeas)
1/4 cup sweetened white beans
1/4 cup sweetened jackfruit (langka), sliced
🟣 Toppings & Extras:
1 scoop ube halaya (purple yam jam)
1 slice leche flan (caramel custard)
1 scoop ube or mango ice cream (optional but highly recommended)
Pinipig (crispy rice flakes) for crunch
Grated cheese (optional, for a salty contrast)
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMi2pmAU6VfoWKHLT0PU5cQq8NSshr6CX73xekY" // Replace with a landscape image
              alt="Halo-Halo Dish"
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
              The History of Halo-Halo
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Halo-halo, the Philippines' most famous cold dessert, is a delightful mix of shaved ice, sweetened fruits, beans, milk, and ice cream, topped with leche flan and ube. While this refreshing dessert is now a staple throughout the country, its roots can be traced back to Pampanga, where it first gained popularity and evolved into the halo-halo we know today.
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMi2pmAU6VfoWKHLT0PU5cQq8NSshr6CX73xekY" // Replace with a landscape image
              alt="Halo-Halo Dish"
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
            Japanese Influence on Pampanga’s Halo-Halo
            </h3>
            <p className="text-gray-600 leading-relaxed">
            The earliest version of halo-halo is believed to have originated from the Japanese dessert called "kakigori", which is a sweetened shaved ice treat topped with red beans and syrup. During the early 1900s, Japanese migrants in the Philippines introduced a similar dessert known as "Mitsumame", a mix of crushed ice, sweetened red beans (azuki), and syrup.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Pampanga’s Role in Perfecting Halo-Halo
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Pampanga, known as the Culinary Capital of the Philippines, played a huge role in refining and popularizing halo-halo. One of the most famous pioneers of halo-halo in Pampanga is Razon’s of Guagua, a family-run business that started in the 1970s.

Unlike the more complex versions of halo-halo found in Manila, Razon’s halo-halo is simpler.
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
        The history of halo-halo is a testament to Filipino ingenuity, blending foreign influences with local ingredients to create something uniquely Filipino. Pampanga played a significant role in shaping and refining this beloved dessert, particularly through establishments like Razon’s of Guagua, which introduced a simplified yet flavorful version.

Today, halo-halo is not just a dessert—it’s a symbol of Filipino culture, diversity, and creativity. Whether enjoyed on a hot summer day or during family gatherings, it continues to bring joy to Filipinos and food lovers around the world.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a Halo-Halo Recipe
          </a>
        </div>
      </section>
    </main>
  );
}