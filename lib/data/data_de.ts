import type {
  Project,
  Experience,
  Education,
  Achievement,
  Certification,
  Skill,
  ContactInfo,
  PersonalInfo,
} from "../types/types";
import { getAssetPath } from "../utils/assetPath";

export const personalInfo: PersonalInfo = {
  name: "Atul Chandra Nath",
  title: "Absolvent der Automobilsoftware | Begeistert von Embedded Systems",
  bio: "Derzeit arbeite ich an Drohnentechnologien und datengetriebenen Systemen mit Python, Datenbanken, einem Rust-basierten Rocket-Backend und einer Vue.js-Frontend-Visualisierung, mit dem Fokus auf kontinuierliches Lernen und Weiterentwicklung in moderner Softwareentwicklung.",
  location: "Chemnitz, Deutschland",
  education: "M.Sc. in Automotive Software Engineering – TU Chemnitz",
  interests: [
    "Computer Vision",
    "Maschinelles Lernen",
    "Künstliche Intelligenz",
    "Large Language Models",
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1uzS84N2kDwzRHC6xxsDph-98o-8VL_O5/view?usp=sharing",
  profileImage: getAssetPath("/profile-pic.jpg"),
};

export const aboutSections = [
  "Ich bin Absolvent der Automobilsoftware mit praktischer Erfahrung in Computer Vision, Embedded Systems und datengetriebener Softwareentwicklung. Während meines Praktikums und meiner Bachelorarbeit entwickelte ich Systeme zur Kennzeichenerkennung für bangladeschische und deutsche Kennzeichen, die bei IEEE veröffentlicht wurden. Dadurch konnte ich eine starke Grundlage in Bildverarbeitung, Python und angewandtem maschinellem Lernen aufbauen.",
  "Im Rahmen meiner Masterarbeit integriere ich ein Modul in die universitäre Drohnenplattform, das Echtzeit-Positionsdaten der Drohne erfasst und über ein Rust-basiertes Rocket-Backend sowie ein Vue.js-Frontend visualisiert. Dadurch vertiefe ich meine Kenntnisse in Embedded Systems, Echtzeit-Datenverarbeitung und Full-Stack-Entwicklung.",
  "Neben meiner Masterarbeit bilde ich mich kontinuierlich weiter, indem ich mich mit aktuellen Technologien im Bereich Künstliche Intelligenz beschäftige, LeetCode-Aufgaben löse und neue Programmiersprachen sowie Frameworks lerne.",
];

export const experiences: Experience[] = [
  {
    id: "thesis-tuc-chemnitz",
    title: "Masterarbeit – GPS-basiertes UAV-Präzisionslandesystem",
    company: "Technische Universität Chemnitz | Vollzeit",
    location: "Campus, Chemnitz, Deutschland",
    startDate: "Okt 2025",
    endDate: "Laufend",
    duration: "Laufend",
    description:
      "Entwicklung eines GPS-basierten UAV-Präzisionslandesystems mit RTK-GPS und Pixhawk zur Erreichung einer zentimetergenauen Landegenauigkeit im Rahmen meiner Masterarbeit. Implementierung pythonbasierter Software für präzise Landung und Heading-Kontrolle, validiert durch reale Flugexperimente. Aktuell Aufbau datengetriebener Drohnensysteme für die Universitätswebseite mit Python, Rust (Rocket), Vue.js und Datenbanken mit Fokus auf Full-Stack-Integration und moderne Softwareentwicklung.",
    achievements: [
      "Entwurf und Implementierung eines RTK-GPS-basierten Landungsalgorithmus für hochpräzise UAV-Landungen auf engem Raum.",
      "Entwicklung eingebetteter pythonbasierter Software für Echtzeit-RTK-GPS-Verarbeitung und Pixhawk-Integration.",
      "Experimentelle Validierung der Landungen zur Verbesserung von Genauigkeit und Zuverlässigkeit.",
      "Integration von Drohnentelemetrie in ein Full-Stack-System mit Python-Backend, Rust/Rocket-APIs, Vue.js-Frontend und Datenbanken zur Echtzeit-Visualisierung.",
    ],
    tools: [
      "Pixhawk Flight Controller",
      "Ardusimple simpleRTK2b",
      "Holybro H-RTK F9P",
      "Python",
      "Rust/Rocket",
      "Vue.js",
      "Datenbanken",
      "Git",
    ],
    languages: ["Python", "Rust", "PostgreSQL", "JavaScript"],
  },
  {
    id: "intership-tuc-chemnitz",
    title: "Praktikant – Deutsches Kennzeichenerkennungssystem",
    company: "Technische Universität Chemnitz | Vollzeit",
    location: "Campus, Chemnitz, Deutschland",
    startDate: "Okt 2023",
    endDate: "März 2024",
    duration: "6 Monate",
    description:
      "Entwurf und Implementierung eines Echtzeit-Kennzeichenerkennungssystems für deutsche Fahrzeuge unter Verwendung von Deep Learning und Computer Vision. Das System nutzt YOLOv8 zur schnellen Kennzeichendetektion, SORT zur Multi-Objekt-Verfolgung über Videoframes hinweg und EasyOCR zur zuverlässigen alphanumerischen Erkennung. Implementiert in Python und OpenCV zur Verarbeitung von Videoströmen unter unterschiedlichen Licht- und Umweltbedingungen. Die Forschung wurde auf einem Datensatz mit über 4.000 Bildern validiert und auf dem IEEE CPMT Symposium Japan (ICSJ 2024) veröffentlicht.",
    achievements: [
      "Entwicklung einer vollständigen End-to-End-ALPR-Pipeline mit Detektion, Tracking und OCR in Echtzeit.",
      "Erreichung einer Erkennungsrate von 95 % bei der Kennzeichendetektion und 94 % Zeichen-Erkennungsgenauigkeit.",
      "Implementierung des SORT-Algorithmus zur konsistenten Verfolgung von Fahrzeugen über mehrere Frames.",
      "Aufbau und Training eines Datensatzes mit über 4.000 annotierten deutschen Kennzeichenbildern.",
      "Veröffentlichung der Forschungsergebnisse auf dem IEEE CPMT Symposium Japan (ICSJ 2024).",
      "Entwicklung robuster OCR-Nachverarbeitung mit Konfidenzfiltern und Formatvalidierung.",
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
    title: "Bachelorarbeit – Bangladeschisches Kennzeichenerkennungssystem",
    company: "University of Science & Technology Chattogram (USTC)",
    location: "Campus, Chittagong, Bangladesch",
    startDate: "Juli 2015",
    endDate: "Juni 2016",
    duration: "1 Jahr",
    description:
      "Erfolgreicher Abschluss einer vertieften Ausbildung in Computer Vision und Deep Learning mit Fokus auf Bildvorverarbeitung, konturbasierte Lokalisierung und CNN-Architekturen. Anwendung überwachter Lernverfahren zur Entwicklung eines Bangla-Kennzeichenerkennungssystems für reale Verkehrsanwendungen.",
    achievements: [
      "Fundierte Kenntnisse in Computer Vision und Deep Learning mit praktischer Erfahrung in Bildvorverarbeitung und Merkmalsextraktion.",
      "Praktische Umsetzung überwachter CNN-Modelle zur Zeichensegmentierung und -erkennung.",
      "Entwicklung eines Bangla-Kennzeichenerkennungssystems für intelligente Verkehrssysteme.",
    ],
    tools: [
      "Python",
      "OpenCV",
      "NumPy",
      "Computer Vision",
      "Maschinelles Lernen",
    ],
    languages: ["Python"],
  },
];

export const educations: Education[] = [
  {
    id: "ucp-bs",
    institution: "Technische Universität Chemnitz",
    location: "Chemnitz, Deutschland",
    degree: "M.Sc. in Automotive Software Engineering",
    startDate: "2018",
    endDate: "Derzeit Studierend",
    duration: "In Bearbeitung",
  },
  {
    id: "pgc-ics",
    institution: "University of Science & Technology Chattogram (USTC)",
    location: "Chittagong, Bangladesch",
    degree: "B.Sc. in Informatik",
    startDate: "2012",
    endDate: "Abgeschlossen",
    duration: "4 Jahre",
    gpa: "2,5/4,0",
  },
];

export const projects: Project[] = [
  {
    id: "intern-tuc-chemnitz",
    title: "Masterpraktikumsprojekt – Deutsches Kennzeichenerkennungssystem",
    description:
      "Entwicklung eines deutschen Automatic License Plate Recognition (ALPR)-Systems mit YOLOv8 zur Echtzeit-Kennzeichendetektion und EasyOCR zur Zeichenerkennung. Implementiert in Python mit OpenCV und Integration des SORT-Algorithmus zur Fahrzeugverfolgung über mehrere Frames. Training mit über 4.000 Bildern und Erreichung hoher Genauigkeit unter realen Bedingungen.",
    image: getAssetPath("/lpr-de.png"),
    technologies: [
      "Python",
      "YOLOv8",
      "EasyOCR",
      "OpenCV",
      "SORT Tracker",
      "Computer Vision",
      "Deep Learning",
      "Objekterkennung",
      "Optische Zeichenerkennung (OCR)",
    ],
  },
  {
    id: "drone-web-design",
    title: "Full-Stack-Drohnen-Datenvisualisierungssystem mit Rust & Vue.js",
    description:
      "Entwicklung eines Echtzeit-GPS-Datenverarbeitungs- und Visualisierungssystems im Rahmen der Masterarbeit. Erfassung der GPS-Daten mit Python, Speicherung in PostgreSQL und Bereitstellung über ein Rust-Rocket-Backend mit REST-APIs, die von einem Frontend dynamisch visualisiert werden.",
    image: getAssetPath("/drone.jpg"),
    technologies: [
      "Python",
      "Ubuntu",
      "PostgreSQL",
      "Rust",
      "Rocket Framework",
      "OpenAPI",
      "REST APIs",
      "Echtzeit-Datenverarbeitung",
      "Datenbankintegration",
      "Frontend-Visualisierung",
    ],
  },
  {
    id: "b.sc-project-lpr",
    title: "Bangla-Kennzeichenerkennungssystem",
    description:
      "Entwurf und Implementierung eines Bangla-Kennzeichenerkennungssystems für intelligentes Fahrzeugmanagement mit Computer Vision und Deep Learning. Das System umfasst Kennzeichendetektion, Zeichensegmentierung und -erkennung unter realen Bedingungen.",
    image: getAssetPath("/bangla-lpr.png"),
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Bildverarbeitung",
      "Deep Learning",
      "Convolutional Neural Networks (CNN)",
      "Adaptive Schwellenwertbildung",
      "Konturerkennung",
      "Zeichensegmentierung",
      "Intelligente Verkehrssysteme (ITS)",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "ieee-paper-japan-2024",
    title: "Deutsches Kennzeichenerkennungssystem mit YOLOv8 und EasyOCR",
    organization: "IEEE, Japan",
    description:
      "Diese Forschungsarbeit konzentriert sich auf die Entwicklung einer deutschen Kennzeichenerkennung (LPR) unter Verwendung der Technologie des YOLOv8-Modells und der EasyOCR-Erkennungstechnologie. Für die Entwicklung dieses Systems werden die Programmiersprache Python und die Bildverarbeitungsbibliothek OpenCV verwendet, während die EasyOCR-Bibliothek als OCR für die Zeichenerkennung eingesetzt wird.",
    links: [
      {
        url: "https://ieeexplore.ieee.org/document/10804754",
        text: "Forschungspapier ansehen",
      },
      {
        url: "https://www.researchgate.net/publication/387397017_German_License_Plate_Recognition_System_Using_the_YoloV8_Model_and_EasyOCR",
        text: "ResearchGate-Seite ansehen",
      },
    ],
  },
  {
    id: "ieee-paper-dhaka",
    title:
      "Kennzeichenerkennungssystem basierend auf Kontureigenschaften und Deep Learning",
    organization: "IEEE, Bangladesch",
    description:
      "Das Ziel dieser Forschungsarbeit ist es, ein Kennzeichenerkennungssystem (LPR) im Bereich der Bangla-Sprache für ein intelligentes Fahrzeugmanagement zu entwerfen. Das vorgeschlagene System basiert auf Computer-Vision-Tools und einem tiefen, überwachten maschinellen Lernmodell. Das System verfügt über drei Module: Kennzeichenerkennung, Zeichensegmentierung und Erkennung der Zeichen des Kennzeichens (LP).",
    links: [
      {
        url: "https://ieeexplore.ieee.org/document/8289029",
        text: "Forschungspapier ansehen",
      },
      {
        url: "https://www.researchgate.net/publication/322040262_License_Plate_Recognition_System_Based_on_Contour_Properties_and_Deep_Learning_Model",
        text: "ResearchGate-Seite ansehen",
      },
    ],
  },
  {
    id: "seminar-tuc-report",
    title: "Seminararbeit – Car2X-Kommunikationsprotokolle",
    organization: "Technische Universität Chemnitz, Deutschland",
    description:
      "Im Rahmen meiner akademischen Arbeit am Lehrstuhl für Technische Informatik habe ich eine eingehende Seminarstudie zu Car2X (Vehicle-to-Everything) Kommunikationsprotokollen durchgeführt. Der Bericht analysiert die Standards DSRC, C-V2X und ETSI ITS-G5 und vergleicht deren Architekturen, Spektrumnutzung, Latenzeigenschaften, Bereitstellungsstatus und reale Anwendungen in intelligenten Transportsystemen (ITS). Die Arbeit diskutiert auch globale Bereitstellungen, Sicherheits- und Datenschutzherausforderungen sowie Zukunftsaussichten für vernetzte und autonome Fahrzeuge.",
    links: [
      {
        url: "https://www.researchgate.net/publication/399434176_Car2X_Communication_Protocol",
        text: "ResearchGate-Seite ansehen",
      },
    ],
  },
];

export const technicalSkills: Skill[] = [
  {
    category: "Programmiersprachen",
    items: ["Python", "C/C++", "HTML/CSS", "SQL", "JavaScript", "Rust", "Java"],
  },
  {
    category: "Frameworks & Bibliotheken",
    items: [
      "HuggingFace",
      "OpenAI",
      "NumPy",
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
    category: "Tools & Technologien",
    items: [
      "Photoshop",
      "Git & GitHub",
      "CI/CD",
      "Google Cloud",
      "Postman",
      "U-Center",
      "Mission Planner",
    ],
  },
  {
    category: "Datenbanken",
    items: ["PostgreSQL", "MySQL"],
  },
];

export const contactInfo: ContactInfo = {
  email: "enggatulbd@gmail.com",
  location: "Chemnitz, Deutschland",
  phone: "+491776695401",
  github: "https://github.com/atulnath",
  linkedin: "https://www.linkedin.com/in/atul-chandra-nath/",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/atul-chandra-nath/",
    github: "https://github.com/atulnath",
  },
};
