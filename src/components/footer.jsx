import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Services",
    links: [
      {
        label: "Computer Access",
        path: "/#services/computer",
        icon: "fas fa-desktop",
      },
      {
        label: "Printing & Copying",
        path: "/#services/printing",
        icon: "fas fa-print",
      },
      {
        label: "Study Rooms",
        path: "/#services/study-rooms",
        icon: "fas fa-chair",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "Visit Us",
        path: "https://www.google.com/maps/search/Southville+8B+Phase+5,+Barangay+San+Isidro,+Montalban,+Rizal/@14.606816,121.0131297,11z/data=!3m1!4b1?hl=en&entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D",
        icon: "fas fa-map-marker-alt",
      },
      { label: "Email Us", path: "/#contact/email", icon: "fas fa-envelope" },
      {
        label: "Phone Directory",
        path: "/#contact/phone",
        icon: "fas fa-phone",
      },
      {
        label: "Social Media",
        path: "https://www.facebook.com/profile.php?id=61554969080114",
        icon: "fab fa-facebook",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "FAQs",
        path: "/#resources/faqs",
        icon: "fas fa-question-circle",
      },
      {
        label: "Library Catalog",
        path: "/#resources/catalog",
        icon: "fas fa-book",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="">
              <h3 className="text-xl font-bold mb-6 text-secondary border-b-2 border-secondary pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="flex items-center text-white/80 hover:text-secondary hover:scale-105 transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <i
                        className={`${link.icon} mr-3 text-secondary group-hover:text-white`}
                      ></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-white/70 text-sm mb-4">
              © 2025 LIBROSYNC. All rights reserved. | Southville 8B E-Library
            </p>
            <p className="text-white/50 text-xs">
              Empowering knowledge through accessible digital resources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
