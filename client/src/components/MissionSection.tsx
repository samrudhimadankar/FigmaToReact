export default function MissionSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Get To Know Us */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎯</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get To Know Us!
            </h2>
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.
            </p>
          </div>

          {/* Mission Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">👥</span>
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">💡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Perspective */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Perspective Illustration */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🤝</span>
                    </div>
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💻</span>
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-3xl">🌟</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Our Perspective
              </h3>
              <div className="w-20 h-1 bg-green-600 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              We're a community-driven initiative aiming to bridge the gap between research and practice, develop networking for the upcoming opportunities. We believe in connecting fellow developers, spreading stimulating ideas and working for a solution driven team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}