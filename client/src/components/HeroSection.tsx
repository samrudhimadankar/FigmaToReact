import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-blue-600">Google</span>{" "}
                <span className="text-gray-900 dark:text-white">Developer Groups</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-600 dark:text-gray-400 mt-2">
                  RBU Chapter
                </div>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                Google Developer Groups are community groups for college and university students interested in Google developer technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg"
                data-testid="button-join-hero"
              >
                JOIN US
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-8 items-center">
                  {/* Illustration Elements */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💡</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">💻</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                    </div>
                  </div>

                  {/* Character Illustrations */}
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍💻</span>
                    </div>
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center ml-4">
                      <span className="text-xl">👨‍💻</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <span className="text-lg">🧑‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}