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
                  backgroundImage: "url('/public/bg.jpg')",
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
        </main>
      </>
  )
}

