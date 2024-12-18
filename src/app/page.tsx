import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
      <>
        <SiteHeader />
        <main>
          <section className="relative h-screen flex items-center justify-center">
            <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
            >
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative z-10 text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Create a{" "}
                <span className="block text-6xl md:text-8xl mt-2">
                sustainable
              </span>{" "}
                <span className="block text-6xl md:text-8xl mt-2">
                future.
              </span>
              </h1>
              <p className="text-xl md:text-2xl mt-6">
                The Farmers Smart Companion
              </p>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {[...Array(3)].map((_, i) => (
                  <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                          i === 0 ? "bg-white" : "bg-white/50"
                      }`}
                  />
              ))}
            </div>
          </section>
          <section className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Welcome To The Future Of Agriculture</h2>
              <p className="text-lg text-gray-600">
                Smart Sprout is your ultimate platform for smarter, sustainable farming.
              </p>
              <p className="text-lg text-gray-600">
Revolutionize your farming with Smart Sprout! Get real-time soil insights, detect crop diseases, and plan ahead with accurate weather forecasts—all powered by AI and IoT technology. Smarter farming starts here. Let’s grow better, together!              </p>
            </div>
          </section>
        </main>
      </>
  )
}


