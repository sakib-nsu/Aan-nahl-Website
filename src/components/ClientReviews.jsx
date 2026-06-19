import { useState } from "react";

const reviews = [
  {
    name: "Sakib",
    role: "Founder, MSH",
    image:
      "https://annahl.xyz/office/uploads/profiles/10-image_2023_08_31t08_52_37_579z.jpg",
    rating: 5,
    comment:
      "Aan-Nahl helped us transform our idea into a reliable digital product. Their team understood our business goals and delivered a smooth, responsive platform on time.",
  },
  {
    name: "Oasif",
    role: "CEO, BP",
    image:
      "https://annahl.xyz/office/uploads/profiles/6-oasif%20ashraf.jpeg",
    rating: 5,
    comment:
      "The communication was excellent from start to finish. They handled design, development, and testing with real professionalism. We are very happy with the result.",
  },
  {
    name: "David Thompson",
    role: "CEO, Tech Startup",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    rating: 5,
    comment:
      "Their dedicated development team worked like an extension of our own company. Fast delivery, clean code, and strong technical guidance throughout the project.",
  },
];

export default function ClientReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReview = reviews[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#fffaf3] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="review-blob absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#ff9828]/20 blur-3xl" />
          <div className="review-blob review-delay-2 absolute -right-32 bottom-16 h-[420px] w-[420px] rounded-full bg-orange-300/25 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,152,40,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,152,40,0.07)_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex rounded-full border border-[#ff9828]/20 bg-white/80 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#ff8616] shadow-sm backdrop-blur">
              Testimonials
            </span>

            <h2 className="text-4xl font-black uppercase tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Client Reviews
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              We believe strong partnerships create better products. Here is
              what our clients say about working with us.
            </p>
          </div>

          {/* Review Card */}
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white/85 p-6 shadow-[0_28px_90px_rgba(17,24,39,0.10)] backdrop-blur-xl sm:p-10 lg:p-12">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#ff9828]/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-orange-300/20 blur-2xl" />

              <div className="relative grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                {/* Client */}
                <div className="text-center lg:text-left">
                  <div className="relative mx-auto h-36 w-36 lg:mx-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff9828] to-[#ef5638] p-1">
                      <img
                        src={activeReview.image}
                        alt={activeReview.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>

                    <div className="absolute -bottom-2 -right-2 grid h-12 w-12 place-items-center rounded-full bg-[#ff9828] text-2xl font-black text-white shadow-lg shadow-orange-200">
                      “
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-gray-950">
                    {activeReview.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-[#ff8616]">
                    {activeReview.role}
                  </p>

                  <div className="mt-5 flex justify-center gap-1 text-2xl text-[#ff9828] lg:justify-start">
                    {Array.from({ length: activeReview.rating }).map(
                      (_, index) => (
                        <span key={index}>★</span>
                      )
                    )}
                  </div>
                </div>

                {/* Comment */}
                <div>
                  <p className="text-xl font-medium leading-9 text-gray-700 sm:text-2xl sm:leading-10">
                    “{activeReview.comment}”
                  </p>

                  <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    {/* Dots */}
                    <div className="flex justify-center gap-3 lg:justify-start">
                      {reviews.map((review, index) => (
                        <button
                          key={review.name}
                          type="button"
                          aria-label={`Show review ${index + 1}`}
                          onClick={() => setActiveIndex(index)}
                          className={`h-3 rounded-full transition-all duration-300 ${
                            activeIndex === index
                              ? "w-10 bg-[#ff9828]"
                              : "w-3 bg-gray-300 hover:bg-[#ff9828]/60"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-3">
                      <button
                        type="button"
                        onClick={goToPrevious}
                        className="grid h-12 w-12 place-items-center rounded-full border border-gray-200 bg-white text-xl font-black text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9828] hover:bg-[#ff9828] hover:text-white"
                        aria-label="Previous review"
                      >
                        ‹
                      </button>

                      <button
                        type="button"
                        onClick={goToNext}
                        className="grid h-12 w-12 place-items-center rounded-full border border-gray-200 bg-white text-xl font-black text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff9828] hover:bg-[#ff9828] hover:text-white"
                        aria-label="Next review"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Stats */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              <StatCard number="10+" label="Years Experience" />
              <StatCard number="100+" label="Projects Delivered" />
              <StatCard number="95%" label="Client Satisfaction" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes reviewBlob {
          0% {
            transform: translate(0, 0) scale(1);
          }

          33% {
            transform: translate(32px, -36px) scale(1.08);
          }

          66% {
            transform: translate(-26px, 28px) scale(0.96);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        .review-blob {
          animation: reviewBlob 9s infinite ease-in-out;
        }

        .review-delay-2 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white/80 p-6 text-center shadow-[0_18px_60px_rgba(17,24,39,0.07)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#ff9828]/40 hover:shadow-orange-100">
      <h4 className="text-4xl font-black text-[#ff8616]">{number}</h4>
      <p className="mt-2 text-sm font-bold uppercase tracking-wide text-gray-600">
        {label}
      </p>
    </div>
  );
}