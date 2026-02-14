import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Maria Santos",
      location: "Manila",
      text: "SAFC made it so easy for me to get a car loan! The process was fast and the staff were very helpful.",
      rating: 5,
    },
    {
      id: 2,
      name: "Juan Dela Cruz",
      location: "Cebu",
      text: "I got my dream house through SAFC's financing. They made everything simple and affordable!",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Garcia",
      location: "Davao",
      text: "Best loan service in the Philippines! Very accommodating and fast approval.",
      rating: 5,
    },
    {
      id: 4,
      name: "Pedro Reyes",
      location: "Quezon City",
      text: "Highly recommended! SAFC helped me expand my business with their truck financing.",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-gray-800 mb-8 sm:mb-12">
          What Our Clients Say
        </h2>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 sm:px-3">
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FF5722] text-[#FF5722]"
                      />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="text-base sm:text-lg text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 sm:p-3 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800  hidden md:block" />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 sm:p-3 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800  hidden md:block" />
          </button>
        </div>
      </div>
    </section>
  );
}
