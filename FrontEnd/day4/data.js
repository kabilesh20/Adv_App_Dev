import yogaGoldIcon from "@services/engi1.jpg";
import yogaWhiteIcon from "@services/arts.jpg";
import meditationWhiteIcon from "@services/mbbs logo.jpg";
import meditationGoldIcon from "@services/engi1.jpg";
import retreatWhite from "@services/arts.jpg";
import retreatGold from "@services/mbbs logo.jpg";
/* Service Data Array */
const serviceData = [
  {
    title: "Yoga",
    activeIcon: yogaWhiteIcon,
    inActiveIcon: yogaGoldIcon,
  },
  {
    title: "Meditation",
    activeIcon: meditationWhiteIcon,
    inActiveIcon: meditationGoldIcon,
  },
  {
    title: "Retreats",
    activeIcon: retreatWhite,
    inActiveIcon: retreatGold,
  },
];

/* Cards Data Array */
const cardsData = [
  [
    // Courses under Yoga service
    {
      header: "Arts and Science",
      price: "Application fee per Course is 500",
      buttonText: "Enroll Here",
      className: "basic",
      cardContainer: "yoga",
      elements: [
        "BSC Computer Science",
        "3 years",
        "5 Days per week",
        " Computer science graduates are well-suited for various roles in IT, including IT consulting, technical support, system administration, and IT management.",
      ],
    },
    {
      header: "Engineering",
      price: "Application fee per Course is 1000",
      buttonText: "Enroll Here",
      className: "standard",
      cardContainer: "yoga",
      elements: [
        "BTECH Information Technology",
        "4 years",
        "6 Days per week",
        "B.Tech IT graduates can specialize in cybersecurity, working as cybersecurity analysts, ethical hackers, or security consultants to protect organizations from cyber threats.",
      ],
    },
    {
      header: "Medical",
      price: "Application fee per Course is 10000",
      buttonText: "Enroll Here",
      className: "premium",
      cardContainer: "yoga",
      elements: [
        "Medicine(MBBS OR MD)",
        "5 years",
        "6 days per week",
        "The most common outcome is becoming a licensed medical doctor. MD graduates can practice medicine in various settings, such as hospitals, clinics, private practices, or academic institutions.",
      ],
    },
  ],

  [
    // Courses under Meditation service

    {
      header: "Arts and Science",
      price: "Application fee per Course is 500",
      buttonText: "Enroll Here",
      className: "basic",
      cardContainer: "meditation",
      elements: [
        "BSC MATHS",
        "3 years",
        "5 days Per week",
        "BSc Mathematics graduates can pursue careers in education, teaching mathematics at the secondary school level. Additional teacher certification may be required depending on the region.",
      ],
    },
    {
      header: "Engineering",
      price: "Application fee per Course is 1000",
      buttonText: "Enroll Here",
      className: "standard",
      cardContainer: "meditation",
      elements: [
        "BE COMPUTER SCIENCE ENGINEERING",
        "4 years",
        "6 days Per Week",
        " BE CSE graduates can pursue careers in developing mobile applications for platforms like iOS and Android, using programming languages such as Swift, Kotlin, or React Native.",
      ],
    },
    {
      header: "Medical",
      price: "Application fee per Course is 10000",
      buttonText: "Enroll Here",
      className: "premium",
      cardContainer: "meditation",
      elements: [
        "Veterinary Medicine (BVSc or DVM)",
        "5 years",
        "6 days per week",
        "The most common outcome is becoming a licensed veterinarian. BVSc graduates can work in private veterinary clinics, animal hospitals, or establish their own practices. They diagnose and treat illnesses and injuries in animals, perform surgeries, and provide preventive care.",
      ],
    },
  ],
  [
    // Courses under Meditation service

    {
      header: "Arts and Science",
      price: "Application fee per Course is 500",
      buttonText: "Enroll Here",
      className: "basic",
      cardContainer: "retreat",
      elements: [
        "Bachelor of Philosophy (BPhil)",
        "3 years",
        "5 days per week",
        " Graduates with a BPhil degree will have a solid foundation in philosophical theories, methodologies, and critical thinking skills. They will be well-versed in the history of philosophy and various philosophical traditions.",
      ],
    },
    {
      header: "Engineering",
      price: "Application fee per Course is 1000",
      buttonText: "Enroll Here",
      className: "standard",
      cardContainer: "retreat",
      elements: [
        "BTECH AIDS",
        "4 years",
        "6 days per week",
        "AI experts contribute to the development of cutting-edge technologies, including machine learning algorithms, natural language processing, computer vision, and robotics.",
      ],
    },
    {
      header: "Medical",
      price: "Application fee per Course is 10000",
      buttonText: "Enroll Here",
      className: "premium",
      cardContainer: "retreat",
      elements: [
        "Bachelor of Dental Surgery (BDS)",
        "5 years",
        "6 days per week",
        "BDS professionals may perform minor oral surgeries, including extractions and surgical procedures related to oral and maxillofacial conditions.",
      ],
    },
  ],
];

export { cardsData, serviceData };
