// ServicesSection.jsx
const ServicesSection = () => {
  const services = [
   {
  title: "Books & Stationery",
  description: "Academic materials, textbooks, and study supplies delivered securely",
  icon: "📚"
},
{
  title: "Clothing & Accessories",
  description: "Safe transport of clothes, shoes, and personal items",
  icon: "👕"
},
{
  title: "Electronics & Gadgets",
  description: "Secure delivery of phones, laptops, and accessories",
  icon: "💻"
},
{
  title: "Health & Essentials",
  description: "Delivery of medicines, toiletries, and daily essentials",
  icon: "💊"
},
{
  title: "Fragile Items",
  description: "Special care delivery for breakable or delicate goods",
  icon: "🫧"
},
{
  title: "Gifts & Personal Items",
  description: "Send thoughtful packages, souvenirs, and keepsakes",
  icon: "🎁"
}

    // {
    //   title: "Food & Meals",
    //   description: "Fresh food delivery from restaurants to your doorstep",
    //   icon: "🍔"
    // }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 items-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;