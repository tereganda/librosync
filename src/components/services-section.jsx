import { Book, BookOpen, Laptop, Clock, Printer } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Offer a Collection of Books",
    description:
      "Explore a diverse range of books across different genres and subjects, curated to support your growth.",
    icon: Book,
  },
  {
    id: 2,
    title: "Borrow Books",
    description:
      "Easily borrow books to take home and enjoy at your own pace, supporting your love for reading.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Free Use of PC",
    description:
      "Access our computers for free to study, research, or complete school and work projects efficiently.",
    icon: Laptop,
  },
  {
    id: 4,
    title: "Open Hours",
    description:
      "Monday to Friday, 8:00 AM to 5:00 PM. Visit us anytime within our service hours.",
    icon: Clock,
  },
  {
    id: 5,
    title: "Free Document Printing",
    description:
      "Cut-off for printing is from 3:30 PM to 4:00 PM. Print your documents at no cost during this time.",
    icon: Printer,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="screen py-32">
        <div className="text-center space-y-1 md:space-y-2 mb-14">
          <h2 className="text-dark text-2xl md:text-3xl font-bold">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the wide range of services we offer to support your
            learning journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="bg-primary/10 text-primary rounded-full p-4 mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
