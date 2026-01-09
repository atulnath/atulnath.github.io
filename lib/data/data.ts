import type {
  Project,
  Experience,
  Education,
  Achievement,
  Skill,
  ContactInfo,
  PersonalInfo,
} from "../types/types";

export const personalInfo: PersonalInfo = {
  name: "Atul Chandra Nath",
  title: "Automotive Software Graduate | Embedded Systems Enthusiast",
  bio: "Currently working on drone technologies and data-driven systems using python, databases, Rust-based Rocket backend, and Vue.js frontend visualization, with a focus on learning  and growing in modern software development.",
  location: "Chemnitz, Germany",
  education: "M.Sc in Automotive Software Engineering - TU Chemnitz",
  interests: [
    "Computer Vision",
    "Machine Learning",
    "Artificial Intelligence",
    "Large Language Models",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1uzS84N2kDwzRHC6xxsDph-98o-8VL_O5/view?usp=sharing",
  profileImage:
    process.env.NODE_ENV === "production"
      ? "/portfolio/profile-pic.jpg"
      : "/profile-pic.jpg",
};

export const aboutSections = [
  "I'm an Automotive Software Graduate with hands-on experience in computer vision, embedded systems, and data-driven software development. During my internship and bechelor's thesis, i developed License Plate Recognition systems based on Bangladeshi and German license plates that were published in IEEE, building a strong foundation in image processing, Python, and applied machine learning.",
  "In my master's work, I am integrating a module to the university's drone platform that collects real-time drone positioning data and visualizes it through a Rust-based Rocket backend and Vue.js frontend, enhancing my skills in embedded systems, real-time data processing, and full-stack development.",
  "Besides my thesis work, i am keeping my upskilled with current technological trends by working and learning about Artificial Intelligence tools, doing leetcode problems, and learning new programming languages and frameworks.",
];

export const experiences: Experience[] = [
  {
    id: "thesis-tuc-chemnitz",
    title: "Thesis - GPS-based UAV Precision Landing System",
    company: "Technical University Chemnitz | Full Time",
    location: "On-campus, Chemnitz, Germany",
    startDate: "Oct 2025",
    endDate: "Ongoing",
    duration: "Running",
    description:
      "Developing a GPS-based UAV precision landing system using RTK GPS and Pixhawk for centimeter-level accuracy as part of my Master’s thesis. Implemented python-based software for precise landing and heading control, validated through real-world experiments. Currently building data-driven drone systems on the university drone website using Python, Rust (Rocket), Vue.js, and databases, focusing on full-stack integration and modern software development.",
    achievements: [
      "Designed and implemented an RTK GPS-based landing algorithm achieving high-precision UAV landings in confined spaces.",
      "Developed embedded python-based software for real-time RTK GPS processing and Pixhawk integration.",
      "Validated performance through experimental UAV landings, improving accuracy and reliability.",
      "Integrated drone telemetry and modules into a full-stack system with Python backend, Rust/Rocket APIs, Vue.js frontend, and databases for real-time visualization.",
    ],

    tools: [
      "Pixhawk Flight Controller",
      "Ardusimple simpleRTK2b",
      "Holybro H-RTK F9P",
      "Python",
      "Rust/Rocket",
      "Vue.js",
      "Databases",
      "Git",
    ],

    languages: ["Python", "Rust", "PostgresSQL", "JavaScript"],
  },
  {
    id: "intership-tuc-chemnitz",
    title: "Intern - German License Plate Recognition System",
    company: "Technical University Chemnitz | Full Time",
    location: "On-campus, Chemnitz, Germany",
    startDate: "Oct 2023",
    endDate: "March 2024",
    duration: "6 months",
    description:
      "Designed and implemented a real-time German License Plate Recognition (LPR) system using deep learning and computer vision techniques. The system leverages YOLOv8 for high-speed license plate detection, SORT for multi-object tracking across video frames, and EasyOCR for accurate alphanumeric recognition. Built using Python and OpenCV, the solution processes video streams to simultaneously detect, track, and recognize German license plates under varying lighting and environmental conditions. The research was validated on a dataset of 4,000+ images and published at the 2024 IEEE CPMT Symposium Japan (ICSJ), demonstrating strong detection and recognition performance suitable for intelligent transportation and smart city applications.",
    achievements: [
      "Developed a complete end-to-end Automatic License Plate Recognition (ALPR) pipeline for German vehicles, integrating detection, tracking, and OCR into a unified real-time video processing system.",
      "Achieved a 95% license plate detection rate using a custom-trained YOLOv8 model and a 94% character recognition accuracy using EasyOCR on German license plate formats.",
      "Implemented SORT (Simple Online and Real-time Tracking) to reliably associate license plates with vehicles across consecutive video frames, improving consistency and reducing duplicate recognition.",
      "Curated and trained on a dataset of over 4,000 annotated German vehicle and license plate images sourced from Roboflow, covering multiple angles, lighting conditions, and real-world scenarios.",
      "Published the research findings at the IEEE CPMT Symposium Japan (ICSJ 2024), highlighting the system’s effectiveness for traffic monitoring, law enforcement, and intelligent transportation systems.",
      "Designed preprocessing and validation logic for OCR output, including confidence thresholds, character filtering, plate formatting, and size constraints to improve recognition robustness.",
    ],
    tools: [
      "YOLOv8",
      "EasyOCR",
      "OpenCV",
      "SORT Tracking Algorithm",
      "Roboflow",
      "NumPy",
      "Matplotlib",
      "Django",
      "Flask",
    ],
    languages: ["Python"],
  },
  {
    id: "master-thesis-ustc-bd",
    title: "Thesis - Bangladeshi License Plate Recognition System",
    company: "University of Science & Technology Chattogram (USTC)",
    location: "On-campus, Chittagong, Bangladesh",
    startDate: "July 2015",
    endDate: "June 2016",
    duration: "1 year",
    description:
      "Successfully completed advanced training in computer vision and deep learning, focusing on image preprocessing, contour-based localization, and CNN architectures. Applied supervised learning techniques to build and evaluate a Bangla License Plate Recognition system for real-world intelligent transportation use cases.",
    achievements: [
      "Strong foundation in computer vision and deep learning techniques with hands-on experience in image preprocessing, contour analysis, and feature extraction using Python and OpenCV.",
      "Practical implementation of supervised deep learning models (CNNs) for character segmentation and recognition from real-world vehicle license plate images under diverse conditions.",
      "Designed and deployed a Bangla License Plate Recognition system, achieving high detection, segmentation, and recognition accuracy to support intelligent transportation and smart city applications.",
    ],
    tools: ["Python", "OpenCV", "NumPy", "Computer Vision", "Machine Learning"],
    languages: ["Python"],
  },
];

export const educations: Education[] = [
  {
    id: "ucp-bs",
    institution: "Chemnitz University of Technology",
    location: "Chemnitz, Germany",
    degree: "M.Sc. in Automotive Software Engineering",
    startDate: "2018",
    endDate: "Currently Studying",
    duration: "In Progress",
  },
  {
    id: "pgc-ics",
    institution: "University Of Science & Technology Chattogram (USTC)",
    location: "Chittagong, Bangladesh",
    degree: "B.Sc in Computer Science & Engineering",
    startDate: "2012",
    endDate: "Completed",
    duration: "4 Years",
    gpa: "2.5/4.0",
  },
];

export const projects: Project[] = [
  {
    id: "intern-tuc-chemnitz",
    title:
      "Master's Internship Project - German License Plate Recognition System",
    description:
      "Developed a German Automatic License Plate Recognition (ALPR) system using YOLOv8 for real-time license plate detection and EasyOCR for character recognition. Implemented the solution in Python with OpenCV for video and image processing, and integrated the SORT algorithm to track vehicles across frames. Trained the model on 4,000+ German license plate images, achieving a 95% detection accuracy and 94% recognition accuracy under varied lighting and environmental conditions.",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/lpr-de.png"
        : "/lpr-de.png",
    technologies: [
      "Python",
      "YOLOv8",
      "EasyOCR",
      "OpenCV",
      "SORT Tracker",
      "Computer Vision",
      "Deep Learning",
      "Object Detection",
      "Optical Character Recognition (OCR)",
    ],
  },
  {
    id: "drone-web-design",
    title:
      "A Full-Stack Drone Data Visualization System based on Rust & Vue.js",
    description:
      "Developed a real-time GPS data processing and visualization system as part of my thesis project. GPS base and rover data were collected using Python after establishing a connection with an Ubuntu environment and stored in a PostgreSQL database. Implemented a backend using the Rust Rocket framework to expose the data via RESTful APIs generated using OpenAPI tooling. These APIs were consumed by a frontend application to display GPS data dynamically, with automatic updates triggered whenever new records were inserted into the database.",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/drone.jpg"
        : "/drone.jpg",
    technologies: [
      "Python",
      "Ubuntu",
      "PostgreSQL",
      "Rust",
      "Rocket Framework",
      "OpenAPI",
      "REST APIs",
      "Real-Time Data Streaming",
      "Database Integration",
      "Frontend Visualization",
    ],
  },
  {
    id: "b.sc-project-lpr",
    title: "Bangla License Plate Recognition System",
    description:
      "Designed and implemented a Bangla License Plate Recognition (LPR) system for smart vehicle management using computer vision and deep learning techniques. The system consists of three stages: license plate detection, character segmentation, and character recognition. Plate localization was achieved through image preprocessing, adaptive thresholding, contour detection, tilt correction, and region-of-interest cropping. Character recognition was performed using a deep Convolutional Neural Network (CNN) trained to learn discriminative features directly from segmented characters. The system was implemented in Python using OpenCV and evaluated on offline vehicle images captured under diverse illumination, weather, and road conditions, achieving high detection, segmentation, and recognition accuracy.",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/bangla-lpr.png"
        : "/bangla-lpr.png",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
      "Deep Learning",
      "Convolutional Neural Networks (CNN)",
      "Adaptive Thresholding",
      "Contour Detection",
      "Character Segmentation",
      "Intelligent Transportation Systems (ITS)",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ieee-paper-japan-2024",
    title:
      "German License Plate Recognition System Using the YoloV8 Model and EasyOCR",
    organization: "IEEE, Japan",
    description:
      "This research focuses on developing a German License Plate Recognition (LPR) using the technology of the YOLOv8 model and EasyOCR recognition technology. The Python programming language and OpenCV image-processing library are used to develop this system whereas the EasyOCR library is used as an OCR for recognizing characters.",
    links: [
      {
        url: "https://ieeexplore.ieee.org/document/10804754",
        text: "View Research Paper",
      },
      {
        url: "https://www.researchgate.net/publication/387397017_German_License_Plate_Recognition_System_Using_the_YoloV8_Model_and_EasyOCR",
        text: "view ResearchGate Page",
      },
    ],
  },
  {
    id: "ieee-paper-dhaka",
    title:
      "License Plate Recognition System Based on Contour Properties and Deep Learning Model",
    organization: "IEEE, Bangladesh",
    description:
      "The intent of this research is to design a license plate recognition (LPR) system in the domain of Bangla language for smart vehicle management. The proposed system is designed on the basis of computer vision tools and deep supervised machine learning model. The system has three modules: license plate detection, character segmentation and recognition of the characters of the License Plate (LP).",
    links: [
      {
        url: "https://ieeexplore.ieee.org/document/8289029",
        text: "View Research Paper",
      },
      {
        url: "https://www.researchgate.net/publication/322040262_License_Plate_Recognition_System_Based_on_Contour_Properties_and_Deep_Learning_Model",
        text: "view ResearchGate Page",
      },
    ],
  },
  {
    id: "seminar-tuc-report",
    title: "Car2X Communication Protocol Seminar Report",
    organization: "Technische Universität Chemnitz, Germany",
    description:
      "I conducted an in-depth seminar study on Car2X (Vehicle-to-Everything) communication protocols as part of my academic work under the Chair of Computer Engineering. The report analyzes DSRC, C-V2X, and ETSI ITS-G5 standards, comparing their architectures, spectrum usage, latency characteristics, deployment status, and real-world applications in Intelligent Transportation Systems (ITS). The work also discusses global deployments, security and privacy challenges, and future prospects for connected and autonomous vehicles.",
    links: [
      {
        url: "https://www.researchgate.net/publication/399434176_Car2X_Communication_Protocol",
        text: "view ResearchGate Page",
      },
    ],
  },
];

export const technicalSkills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C/C++", "HTML/CSS", "SQL", "JavaScript", "Rust", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "HuggingFace",
      "OpenAI",
      "Numpy",
      "Pandas",
      "Flask",
      "OpenCV",
      "Django",
      "YOLOv8",
      "EasyOCR",
      "Rocket",
      "Vue.js",
      "Next.js",
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      "PhotoShop",
      "Git & GitHub",
      "CI/CD",
      "Google Cloud",
      "Postman",
      "U-Center",
      "Mission Planner",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
];

export const contactInfo: ContactInfo = {
  email: "enggatulbd@gmail.com",
  location: "Chemnitz, Germany",
  phone: "+491776695401",
  github: "https://github.com/atulnath",
  linkedin: "https://www.linkedin.com/in/atul-chandra-nath/",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/atul-chandra-nath/",
    github: "https://github.com/atulnath",
  },
};
