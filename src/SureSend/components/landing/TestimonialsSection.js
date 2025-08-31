// TestimonialsSection.jsx
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Fast and reliable service! My package arrived within 30 minutes.",
      author: "Afolabi Idrees",
      role: "Regular Customer"
    },
    {
      quote: "The best delivery service in town. Highly recommended!",
      author: "Adigun Yusuf",
      role: "Business Owner"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-500 p-6 rounded-lg">
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-blue-100">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
