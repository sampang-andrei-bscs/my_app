"use client";
import Image from "next/image";

export default function SisigPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiRg39uVTOWMiXgahqJUPwdItcn3T9zALKpxu4" // Replace with your hero image
          alt="Sisig"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6 drop-shadow-2xl">Sisig</h1>
            <p className="text-3xl mb-8 drop-shadow-2xl">
              A Famous Dish of Kapampangan Cuisine
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
              Ingredients for Sisig
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            For the Meat:
✅ 1 kg pork maskara (pig's face) – includes ears, cheeks, and jowls
1/4 kg pork liver – for added richness (optional) </p>

<p className="text-2xl text-gray-700 mb-8 leading-relaxed">
For Boiling the Meat:
✅ 6 cups water
✅ 1 tbsp salt
✅ 2 bay leaves
✅ 1 tsp whole peppercorns
✅ 1 onion (quartered) 
</p>
<p className="text-2xl text-gray-700 mb-8 leading-relaxed">
For Grilling & Seasoning:
✅ 2 tbsp soy sauce – for umami flavor
✅ 1 tbsp calamansi juice – fresh, for tanginess (or lemon juice as a substitute)
✅ 1/2 tsp salt
✅ 1/2 tsp ground black pepper
</p>
<p className="text-2xl text-gray-700 mb-8 leading-relaxed">
For Sautéing & Final Flavoring:
✅ 3 tbsp pork fat or butter – for extra flavor
✅ 1 onion (finely chopped)
✅ 2-3 pcs green chili (siling haba) – chopped
✅ 2 pcs red chili (siling labuyo) – chopped (adjust for spice level)
</p>
<p className="text-2xl text-gray-700 mb-8 leading-relaxed">
For Serving (Optional):
✅ 1 raw egg – to mix in before serving
✅ More calamansi halves – for squeezing on top
✅ Chicharon (crushed) – for extra crunch
            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiRg39uVTOWMiXgahqJUPwdItcn3T9zALKpxu4" // Replace with a landscape image
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
              The History of Sisig
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
            Kapampangan Sisig is one of the most famous Filipino dishes, originating from Pampanga, the culinary capital of the Philippines. Traditionally, it consists of chopped pig's face and ears, chicken liver, onions, and calamansi, served sizzling hot. But its evolution spans centuries, adapting through time.

            </p>
          </div>
          <div>
            <Image
              src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiRg39uVTOWMiXgahqJUPwdItcn3T9zALKpxu4" // Replace with a landscape image
              alt="Sisig Dish"
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
            Mid-20th Century: The Evolution into a Meat Dish
            </h3>
            <p className="text-gray-600 leading-relaxed">
            During the American period (1898-1946), U.S. military bases like Clark Air Base in Angeles City supplied large amounts of pork. However, pig heads—specifically the ears, cheeks, and snout—were discarded. Resourceful Kapampangan cooks, led by Lucia Cunanan ("Aling Lucing"), started using these unwanted pig parts, boiling and grilling them before chopping them finely and seasoning them with vinegar, calamansi, onions, and chicken liver.

By the 1970s, this version of sisig became popular as a dish served at eateries and drinking spots in Pampanga, especially as a pulutan (beer companion).
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Modern Sisig: The Sizzling Era
            </h3>
            <p className="text-gray-600 leading-relaxed">
            The sizzling plate version we know today was popularized by Aling Lucing Cunanan of Angeles City in the 1970s. She is often called the "Sisig Queen" for introducing the idea of serving sisig on a hot iron plate with crispy edges. Her version made sisig a national and international sensation.
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
        Kapampangan sisig has come a long way from being a sour green mango dish to a sizzling, flavorful delicacy that defines Filipino cuisine. Whether you enjoy it traditional or modern, there's no denying that sisig is a true Filipino classic with deep Kapampangan roots.


        </p>
        <div className="mt-8 text-center">
          <a
            href="#ingredients"
            className="bg-gray-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Try a sisig recipe
          </a>
        </div>
      </section>
    </main>
  );
}