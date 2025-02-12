"use client";
import Image from "next/image";

export default function BuroPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMim80XCDboPLiYVrf8hXAUz2RvTKneEdNjt70x" // Replace with your hero image
          alt="Tibuk-Tibuk"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Tibuk-Tibuk</h1>
            <p className="text-3xl mb-8 drop-shadow-2xl">
            A traditional Kapampangan dessert
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
              Ingredients for Tibuk-Tibuk
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            1 cup malagkit rice (glutinous rice)
4 cups carabao’s milk (or whole milk as a substitute)
1 cup coconut milk (fresh or canned)
1 cup sugar (or adjust to your desired sweetness)
1/2 teaspoon vanilla extract (optional for added aroma)
1/4 teaspoon salt (to balance sweetness)
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMim80XCDboPLiYVrf8hXAUz2RvTKneEdNjt70x" // Replace with a landscape image
              alt="Tibuk-Tibuk"
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
              The History of Tibuk-Tibuk
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Tibuk-tibuk is a traditional Kapampangan dessert, known for its creamy, rich texture and unique flavor. It’s a caramelized rice pudding that has been cherished for generations, showcasing the sweet and comforting nature of Filipino desserts.
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMim80XCDboPLiYVrf8hXAUz2RvTKneEdNjt70x" // Replace with a landscape image
              alt="Tibuk-Tibuk"
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
            The Birth of Tibuk-Tibuk in Pampanga
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Tibuk-tibuk is thought to have originated in Pampanga, one of the most renowned regions in the Philippines for its exceptional culinary heritage. Pampanga, often called the “Culinary Capital of the Philippines”, is home to many well-loved Filipino dishes and sweets, and tibuk-tibuk is a proud part of its rich history.

The name "tibuk-tibuk" comes from the sound it makes during the cooking process when the rice mixture is stirred. The term refers to the rhythmic "tibuk" or thudding sound produced when the pudding thickens and forms small clumps while it is simmering. This distinctive name adds to the charm of this treat.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            The Cultural Connection
            </h3>
            <p className="text-gray-600 leading-relaxed">
            Tibuk-tibuk was originally created for celebrations like birthdays, weddings, and town festivals. It was served as a dessert that honored the abundance of locally grown rice and the milk produced by carabaos, both of which were important aspects of daily life in Pampanga. Over time, this humble dessert grew in popularity and became a cherished dish that reflected the resourcefulness and creativity of the Kapampangan people in making delicious meals with locally sourced ingredients.
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
        Tibuk-tibuk’s long history, from a humble, special occasion dish to a cherished regional delicacy, reflects the richness of Kapampangan culture and the dedication of the people who have kept this dish alive through the centuries. Whether enjoyed during a family gathering or as a special treat, tibuk-tibuk continues to be a symbol of the warmth and hospitality that defines Filipino food culture.
        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a Tibuk-Tibuk Recipe
          </a>
        </div>
      </section>
    </main>
  );
}