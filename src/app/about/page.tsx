/* eslint-disable react/no-unescaped-entities */
// src/app/about/page.tsx
"use client"; // Important for client-side components (like maps)
import Image from "next/image"; // For optimized images
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <section className="container mx-auto max-w-4xl">
        {/* About Us Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h1 className="text-4xl font-bold text-red-900 text-center mb-4">About Us</h1>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            We are passionate about exploring Kapampangan cuisine and beyond, bringing you authentic recipes, cooking tips, and the rich stories behind every dish. Whether you're a home cook looking for new recipes, a foodie curious about global flavors, or someone who simply loves great food, you’ll find something to satisfy your cravings here!
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-center text-red-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-center leading-relaxed">
          We dive into the rich history and cultural significance of every dish, ensuring that traditional flavors and cooking techniques live on.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center text-red-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiMi0YAle1b2WkvBclOSXGqRAxFdj0nyeh6uEC"
                  alt="Team Member 1"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-red-900 mb-1">Andrei Sampang</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
              "Fix one bug, introduce two more. The web dev circle of life."
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMi9H1WHWjZiU8t3q76YpJKLjr1aEVgXfsSMFeo"
                  alt="Team Member 2"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-red-900 mb-1">Carlos Miguel Viray</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
              "JavaScript: The language that lets you do anything… poorly."
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMiq6q66h7FWSpsdOIXCe9E4Jc3BkV8GZym2orn"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-red-900 mb-1">Arvie Santos</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
              "Debugging is like being the detective in a crime movie where you are also the murderer."
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src="https://rsv7mzgpyn.ufs.sh/f/RjBoytRTOWMi0Glt2voymWBePvnOGJYKCkx7wHR4hZXFqu65"
                  alt="Team Member 4"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium text-red-900 mb-1">Jasper Pineda</h3>
              <p className="text-gray-500 italic text-sm mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-gray-600 text-sm">
              "Ctrl + C, Ctrl + V – the true full-stack developer’s toolkit."
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-red-900 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-200">
            Have questions or suggestions?{" "}
            <Link href="/contact" className="text-white hover:underline">
              Get in touch!
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}