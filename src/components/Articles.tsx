export function Articles() {
  const articles = [
    {
      id: 1,
      image: "/img/P5.jpg",
      date: { day: "12", month: "Feb" },
      title: "How Sangla OR/CR Works: Requirements & Loan Process in the...",
      description:
        "Learn how Sangla OR/CR works: use your vehicle's Official Receipt and Certificate of Registration for quick loans...",
    },
    {
      id: 2,
      image: "/img/P6.jpg",
      date: { day: "11", month: "Feb" },
      title: "How to Become a Loan Advisor in the Philippines (Salary,...",
      description:
        "Learn how to become a Loan Advisor in the Philippines, salary potential, requirements, and how to apply...",
    },
    {
      id: 3,
      image: "/img/P7.webp",
      date: { day: "06", month: "Feb" },
      title: "Best Valentine's Gift Ideas in the Philippines",
      description:
        "Find the best Valentine's gift ideas in the Philippines. Discover thoughtful gifts to celebrate love and friendship.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-zinc-700 mb-8 sm:mb-12 font-bold">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Image with Date Badge */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#FF5722] text-white px-3 py-2 rounded text-center z-10">
                  <div className="text-xl sm:text-2xl leading-none">
                    {article.date.day}
                  </div>
                  <div className="text-xs">{article.date.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg text-zinc-700 mb-2 sm:mb-3 line-clamp-2 font-bold">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm line-clamp-2">
                  {article.description}
                </p>
                <button className="bg-[#FF5722] text-white px-4 sm:px-6 py-2 rounded hover:bg-[#F4511E] text-sm">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
