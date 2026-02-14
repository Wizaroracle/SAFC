import {
  FileText,
  Car,
  Truck,
  Receipt,
  UserCircle,
  Home,
  CarFront,
  CarTaxiFront,
} from "lucide-react";

export function LoanServices() {
  const services = [
    {
      icon: FileText,
      title: "Sangla OR/CR",
      description:
        "Need quick cash? Use your car or truck's ORCR as collateral and get the funds you need fast—no need to sell your vehicle!",
    },
    {
      icon: CarTaxiFront,
      title: "Car Financing",
      description:
        "Get the car you've always wanted—whether brand new or used—with our easy and affordable car financing options.",
    },
    {
      icon: Truck,
      title: "Truck Financing",
      description:
        "Take your business to the next level with reliable truck financing, designed to support your growing business operations.",
    },
    {
      icon: Receipt,
      title: "Sangla Titulo",
      description:
        "With Sangla Titulo, turn your property's title into quick cash without the hassle—no need to sell your property.",
    },
    {
      icon: UserCircle,
      title: "JUANAsenso",
      description:
        "Enjoy quick collateral loans with special refinancing rates - exclusive for Filipina entrepreneurs.",
    },
    {
      icon: CarTaxiFront,
      title: "Repossessed Assets",
      description:
        "Avail repossessed cars, trucks, and properties at great deals, with flexible financing options",
    },
    {
      icon: Home,
      title: "JuanTahanan",
      description:
        "Own your home with our easy and affordable housing loan. Designed for Filipino families and OFWs who dream of stability and a brighter future.",
    },
    {
      icon: CarFront,
      title: "BiyaHERO",
      description:
        "Get fast and affordable financing for your PUV, TNVS, or UV Express. Drive your business with flexible terms and trusted local support from SAFC",
    },
    {
      icon: Car,
      title: "BiyaHERO",
      description:
        "Get fast and affordable financing for your PUV, TNVS, or UV Express. Drive your business with flexible terms and trusted local support from SAFC",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-zinc-700 mb-8 sm:mb-12 px-4 font-bold">
          Affordable Loan Services for Filipinos Nationwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`border-t-4 border-[#FF5722] bg-white p-4 sm:p-10 shadow-md hover:shadow-lg transition-all duration-300 group hover:bg-[#FF5722] rounded-[5px]`}
            >
              <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF5722] mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl mb-2 sm:mb-3 text-gray-900 group-hover:text-white transition-colors duration-300 font-bold">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 group-hover:text-white transition-colors duration-300 ">
                {service.description}
              </p>
              <button className="bg-[#FF5722] text-white px-4 sm:px-5 py-3 text-sm sm:text-base border group-hover:border transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
