import { motion } from "framer-motion";
import { announcements } from "@/lib/sample";
import AnnoncementCard from "./cards/announcement-card";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AnnouncementsSection = () => {
  return (
    <section id="announcement">
      <div className="screen py-32">
        <div className="text-center space-y-1 md:space-y-2 mb-10">
          <h2 className="text-dark text-2xl md:text-3xl font-bold">
            Library Updates & Events
          </h2>
          <p className="text-gray-600">
            Stay informed about the latest news, events, and updates from our
            library
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {announcements.map((a) => (
            <motion.div
              key={a.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }} // animate each time it enters view
            >
              <AnnoncementCard announcement={a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
