import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroSlider() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "/img/P1.jpg",
      tagline1: "Step into a year full of",
      tagline2: "possibilities and hope.",
      tagline3: "Together, we're building",
      tagline4: "a brighter tomorrow.",
      buttons: [
        { text: "Inquire Now", type: "primary" },
        { text: "See Branches", type: "secondary" },
      ],
    },
    {
      id: 2,
      image: "/img/P2.jpg",
      tagline1: "Let us turn your dream business,",
      tagline2: "car, and house into reality.",
      tagline3: "With fast and flexible financing,",
      tagline4: "kaya mo na!",
      buttons: [{ text: "Inquire Now", type: "primary" }],
    },
    {
      id: 3,
      image: "/img/P3.png",
      tagline1: "Sa tulong ng JuanTahanan, kaya",
      tagline2: "mo nang magkabahay!",
      tagline3: "Abot-kayang housing loan para sa",
      tagline4: "bawat pamilyang Pilipino.",
      buttons: [{ text: "Inquire Now", type: "primary" }],
    },
  ];

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="relative w-full h-87.5 sm:h-112.5 md:h-137.5 lg:h-162.5 xl:h-187.5">
              <img
                src={slide.image}
                alt="Hero"
                className="w-full h-full object-cover"
              />

              {/* Optional overlay for text visibility */}
              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-xl sm:max-w-2xl">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 sm:mb-6 leading-tight">
                      <p
                        className="text-green-700 font-bold"
                        style={{ WebkitTextStroke: "1px #000" }}
                      >
                        {slide.tagline1}
                      </p>
                      <p
                        className="text-green-700 font-bold"
                        style={{ WebkitTextStroke: "1px #000" }}
                      >
                        {slide.tagline2}
                      </p>
                      <p
                        className="text-[#FF5722] font-bold"
                        style={{ WebkitTextStroke: "1px #000" }}
                      >
                        {slide.tagline3}
                      </p>
                      <p
                        className="text-[#FF5722] font-bold"
                        style={{ WebkitTextStroke: "1px #000" }}
                      >
                        {slide.tagline4}
                      </p>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {slide.buttons.map((button, idx) => (
                        <button
                          key={idx}
                          className={`px-5 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base w-full sm:w-auto ${
                            button.type === "primary"
                              ? "bg-[#FF5722] text-white hover:bg-[#F4511E]"
                              : "bg-white text-[#FF5722] border-2 border-white hover:bg-gray-100"
                          }`}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[#FF5722]  hover:bg-[#FF5722] p-2 sm:p-3 rounded-[5px] z-10 hidden md:block"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[#FF5722]  hover:bg-[#ff5f2e] p-2 sm:p-3 rounded-[5px] z-10  hidden md:block"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
    </div>
  );
}
