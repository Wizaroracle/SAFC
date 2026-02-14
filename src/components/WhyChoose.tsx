import { AnimatedCounter } from "./AnimatedCounter";

export function WhyChoose() {
  return (
    <section className="py-12 sm:py-16 bg-[#FFF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/img/P4.jpg"
              alt="Why Choose SAFC"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-zinc-700 mb-6 sm:mb-8 font-bold">
              Why Choose SAFC?
            </h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-1 mb-6 sm:mb-8">
              <div className="border-r-2 border-[#FF5722] pl-2 sm:pl-1 w-30">
                <AnimatedCounter end={85} />
                <div className="text-gray-600 text-xs sm:text-base fon">
                  Branches
                </div>
              </div>
              <div className="border-r-2 border-[#FF5722] pl-2 sm:pl-1 w-30">
                <AnimatedCounter end={8} suffix="k+" />
                <div className="text-gray-600 text-xs sm:text-base">
                  Loan Advisors
                </div>
              </div>
              <div className="l-2 sm:pl-1 w-30">
                <AnimatedCounter end={40} suffix="k+" />
                <div className="text-gray-600 text-xs sm:text-base">
                  Clients
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              At SAFC (South Asialink Finance Corporation), we believe in the
              power of dreams. We know that having the right support can turn
              your vision into reality. Since 2003, we've been helping Filipinos
              achieve their dream car, house, or business with fast and
              affordable financing options. With 85 branches nationwide, we make
              sure that your dreams are never out of reach.{" "}
              <strong>With financing made easy by SAFC, kaya mo na!</strong>
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="bg-[#FF5722] text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-[#F4511E] text-sm sm:text-base">
                Learn More
              </button>
              <button className="bg-white text-[#FF5722] px-6 sm:px-8 py-2 sm:py-3 rounded border-2 border-[#FF5722] hover:bg-gray-50 text-sm sm:text-base">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
