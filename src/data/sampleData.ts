export interface User {
    name: string;
    registerNumber: string;
    department: string;
    year: string;
    email: string;
    phone: string;
    photo?: string; // base64 string
}

export interface Staff {
    id: number;
    name: string;
    designation: string;
    qualification: string;
    subjects: string[];
    image: string;
    // Optional extended fields for profile page
    department?: string;
    yearOfJoining?: string;
    experience?: string;
    mobile?: string;
    email?: string;
    linkedin?: string;
    additionalRoles?: string[];
}

export interface Subject {
    id: string;
    name: string;
    code: string;
    semester: number;
}

export interface Unit {
    unitNumber: number;
    title: string;
    description: string;
    downloadUrl: string;
}

export interface QuestionBank {
    id: number;
    title: string;
    year: string;
    downloadUrl: string;
}

export const SAMPLE_USER: User = {
    name: "Khan",
    registerNumber: "210623205056",
    department: "Information Technology",
    year: "IV Year / 7th Semester",
    email: "khan@example.com",
    phone: "9876543210",
};

export const STAFF_DATA: Staff[] = [
    {
        id: 1,
        name: "Dr. Selvam",
        designation: "Professor & Head",
        qualification: "Ph.D. (IT)",
        subjects: ["Cloud Computing", "Data Mining"],
        image: "/assets/images/selvam.jpg",
    },
    {
        id: 2,
        name: "Mrs. Ruth Shobitha",
        designation: "Assistant Professor",
        qualification: "M.E. (IT)",
        subjects: ["Web Technology", "Python Programming"],
        image: "/assets/images/ruthshobitha.jpg",
    },
    {
        id: 3,
        name: "Mrs. Yuvabharathi",
        designation: "Assistant Professor",
        qualification: "M.Tech (IT)",
        subjects: ["Computer Networks", "Cryptography"],
        image: "/assets/images/yuvabharathi.jpg",
    },
    {
        id: 4,
        name: "Mr. Kalaiarasan",
        designation: "Assistant Professor",
        qualification: "M.E. (IT)",
        subjects: ["Operating Systems", "Compiler Design"],
        image: "/assets/images/kalaiarasan.jpg",
    },
    {
        id: 5,
        name: "Mrs. Kanmani",
        designation: "Assistant Professor",
        qualification: "M.E. (IT)",
        subjects: ["Database Management Systems", "Big Data Analytics"],
        image: "/assets/images/kanmani.jpg",
    },
    {
        id: 6,
        name: "Mrs. Shanmuga Priya",
        designation: "Assistant Professor",
        qualification: "M.Tech (IT)",
        subjects: ["Software Engineering", "Agile Methodologies"],
        image: "/assets/images/shanmugapriya.jpg",
    },
    {
        id: 7,
        name: "Mr. Manikandan",
        designation: "Assistant Professor",
        qualification: "M.E. (IT)",
        subjects: ["Artificial Intelligence", "Machine Learning"],
        image: "/assets/images/manikandan.jpg",
    },
];

export const SUBJECTS_DATA: Subject[] = [
    // Semester 1
    { id: "sem1-sub1", name: "Professional English – I", code: "", semester: 1 },
    { id: "sem1-sub2", name: "Matrices and Calculus", code: "", semester: 1 },
    { id: "sem1-sub3", name: "Engineering Physics", code: "", semester: 1 },
    { id: "sem1-sub4", name: "Engineering Chemistry", code: "", semester: 1 },
    { id: "sem1-sub5", name: "Problem Solving and Python Programming", code: "", semester: 1 },
    { id: "sem1-sub6", name: "Heritage of Tamils", code: "", semester: 1 },
    { id: "sem1-sub7", name: "Problem Solving & Python Programming Lab", code: "", semester: 1 },
    { id: "sem1-sub8", name: "Physics & Chemistry Lab", code: "", semester: 1 },
    { id: "sem1-sub9", name: "English Lab", code: "", semester: 1 },

    // Semester 2
    { id: "sem2-sub1", name: "Professional English – II", code: "", semester: 2 },
    { id: "sem2-sub2", name: "Statistics and Numerical Methods", code: "", semester: 2 },
    { id: "sem2-sub3", name: "Physics for Information Science", code: "", semester: 2 },
    { id: "sem2-sub4", name: "Basic Electrical and Electronics Engineering", code: "", semester: 2 },
    { id: "sem2-sub5", name: "Engineering Graphics", code: "", semester: 2 },
    { id: "sem2-sub6", name: "Programming in C", code: "", semester: 2 },
    { id: "sem2-sub7", name: "Tamils and Technology", code: "", semester: 2 },
    { id: "sem2-sub8", name: "Engineering Practices Lab", code: "", semester: 2 },
    { id: "sem2-sub9", name: "C Programming Lab", code: "", semester: 2 },
    { id: "sem2-sub10", name: "Communication Lab", code: "", semester: 2 },

    // Semester 3
    { id: "sem3-sub1", name: "Discrete Mathematics", code: "", semester: 3 },
    { id: "sem3-sub2", name: "Digital Principles and Computer Organization", code: "", semester: 3 },
    { id: "sem3-sub3", name: "Foundations of Data Science", code: "", semester: 3 },
    { id: "sem3-sub4", name: "Data Structures and Algorithms", code: "", semester: 3 },
    { id: "sem3-sub5", name: "Object-Oriented Programming", code: "", semester: 3 },
    { id: "sem3-sub6", name: "DSA Laboratory", code: "", semester: 3 },
    { id: "sem3-sub7", name: "OOP Laboratory", code: "", semester: 3 },
    { id: "sem3-sub8", name: "Data Science Laboratory", code: "", semester: 3 },
    { id: "sem3-sub9", name: "Professional Development", code: "", semester: 3 },

    // Semester 4
    { id: "sem4-sub1", name: "Theory of Computation", code: "", semester: 4 },
    { id: "sem4-sub2", name: "Artificial Intelligence and Machine Learning", code: "", semester: 4 },
    { id: "sem4-sub3", name: "Database Management Systems", code: "", semester: 4 },
    { id: "sem4-sub4", name: "Web Essentials", code: "", semester: 4 },
    { id: "sem4-sub5", name: "Operating Systems", code: "", semester: 4 },
    { id: "sem4-sub6", name: "Environmental Sciences and Sustainability", code: "", semester: 4 },
    { id: "sem4-sub7", name: "Operating Systems Laboratory", code: "", semester: 4 },
    { id: "sem4-sub8", name: "DBMS Laboratory", code: "", semester: 4 },

    // Semester 5
    { id: "sem5-sub1", name: "Computer Networks", code: "", semester: 5 },
    { id: "sem5-sub2", name: "Full Stack Web Development", code: "", semester: 5 },
    { id: "sem5-sub3", name: "Distributed Computing", code: "", semester: 5 },
    { id: "sem5-sub4", name: "Embedded Systems and IoT", code: "", semester: 5 },
    { id: "sem5-sub5", name: "Full Stack Web Development Laboratory", code: "", semester: 5 },

    // Semester 6
    { id: "sem6-sub1", name: "Software Engineering (or Object-Oriented Software Engineering)", code: "", semester: 6 },
    { id: "sem6-sub2", name: "Mobile Application Development Laboratory", code: "", semester: 6 },

    // Semester 7
    { id: "sem7-sub1", name: "Human Values and Ethics", code: "", semester: 7 },
    { id: "sem7-sub2", name: "Summer Internship / Industrial Training", code: "", semester: 7 },

    // Semester 8
    //     { id: "sem8-sub1", name: "Project Work / Final Year Project", code: "", semester: 8 },
];

export const UNITS_DATA: Record<string, Unit[]> = {
    // Semester 1
    "sem1-sub1": [ // Professional English – I
        { unitNumber: 1, title: "Introduction to Communication", description: "Basics of communication and grammar.", downloadUrl: "/assets/pdfs/sem1/sub1/unit1.pdf" },
        { unitNumber: 2, title: "Narration and Description", description: "Narrative techniques and descriptive writing.", downloadUrl: "/assets/pdfs/sem1/sub1/unit2.pdf" },
        { unitNumber: 3, title: "Process Description", description: "Describing processes and flowcharts.", downloadUrl: "/assets/pdfs/sem1/sub1/unit3.pdf" },
        { unitNumber: 4, title: "Classifications and Definitions", description: "Writing definitions and classifying data.", downloadUrl: "/assets/pdfs/sem1/sub1/unit4.pdf" },
        { unitNumber: 5, title: "Creative Writing", description: "Essay writing and creative expression.", downloadUrl: "/assets/pdfs/sem1/sub1/unit5.pdf" },
    ],
    "sem1-sub2": [ // Matrices and Calculus
        { unitNumber: 1, title: "Matrices", description: "Eigenvalues and Eigenvectors.", downloadUrl: "/assets/pdfs/sem1/sub2/unit1.pdf" },
        { unitNumber: 2, title: "Differential Calculus", description: "Limits, continuity, and derivatives.", downloadUrl: "/assets/pdfs/sem1/sub2/unit2.pdf" },
        { unitNumber: 3, title: "Functions of Several Variables", description: "Partial derivatives and total derivatives.", downloadUrl: "/assets/pdfs/sem1/sub2/unit3.pdf" },
        { unitNumber: 4, title: "Integral Calculus", description: "Definite and indefinite integrals.", downloadUrl: "/assets/pdfs/sem1/sub2/unit4.pdf" },
        { unitNumber: 5, title: "Multiple Integrals", description: "Double and triple integrals.", downloadUrl: "/assets/pdfs/sem1/sub2/unit5.pdf" },
    ],
    "sem1-sub3": [ // Engineering Physics
        { unitNumber: 1, title: "Properties of Matter", description: "Elasticity and viscosity.", downloadUrl: "/assets/pdfs/sem1/sub3/unit1.pdf" },
        { unitNumber: 2, title: "Waves and Fiber Optics", description: "Oscillatory motion and optical fibers.", downloadUrl: "/assets/pdfs/sem1/sub3/unit2.pdf" },
        { unitNumber: 3, title: "Thermal Physics", description: "Heat transfer and thermodynamics.", downloadUrl: "/assets/pdfs/sem1/sub3/unit3.pdf" },
        { unitNumber: 4, title: "Quantum Physics", description: "Black body radiation and Schrödinger equation.", downloadUrl: "/assets/pdfs/sem1/sub3/unit4.pdf" },
        { unitNumber: 5, title: "Crystal Physics", description: "Crystal structures and defects.", downloadUrl: "/assets/pdfs/sem1/sub3/unit5.pdf" },
    ],
    "sem1-sub4": [ // Engineering Chemistry
        { unitNumber: 1, title: "Water and its Treatment", description: "Hardness of water and purification.", downloadUrl: "/assets/pdfs/sem1/sub4/unit1.pdf" },
        { unitNumber: 2, title: "Nano Chemistry", description: "Synthesis and properties of nanomaterials.", downloadUrl: "/assets/pdfs/sem1/sub4/unit2.pdf" },
        { unitNumber: 3, title: "Phase Rule and Alloys", description: "Phase diagrams and alloy composition.", downloadUrl: "/assets/pdfs/sem1/sub4/unit3.pdf" },
        { unitNumber: 4, title: "Fuels and Combustion", description: "Types of fuels and calorific value.", downloadUrl: "/assets/pdfs/sem1/sub4/unit4.pdf" },
        { unitNumber: 5, title: "Energy Sources and Storage Devices", description: "Batteries and renewable energy.", downloadUrl: "/assets/pdfs/sem1/sub4/unit5.pdf" },
    ],
    "sem1-sub5": [ // Problem Solving and Python Programming
        { unitNumber: 1, title: "Algorithmic Problem Solving", description: "Algorithms, flowcharts, and pseudocode.", downloadUrl: "/assets/pdfs/sem1/sub5/unit1.pdf" },
        { unitNumber: 2, title: "Data, Expressions, Statements", description: "Python basics and data types.", downloadUrl: "/assets/pdfs/sem1/sub5/unit2.pdf" },
        { unitNumber: 3, title: "Control Flow, Functions", description: "Conditionals, loops, and functions.", downloadUrl: "/assets/pdfs/sem1/sub5/unit3.pdf" },
        { unitNumber: 4, title: "Lists, Tuples, Dictionaries", description: "Compound data structures in Python.", downloadUrl: "/assets/pdfs/sem1/sub5/unit4.pdf" },
        { unitNumber: 5, title: "Files, Modules, Packages", description: "File handling and modular programming.", downloadUrl: "/assets/pdfs/sem1/sub5/unit5.pdf" },
    ],
    "sem1-sub6": [ // Heritage of Tamils
        { unitNumber: 1, title: "Language and Literature", description: "History of Tamil language.", downloadUrl: "/assets/pdfs/sem1/sub6/unit1.pdf" },
        { unitNumber: 2, title: "Heritage - Rock Art to Modern Art", description: "Evolution of Tamil art forms.", downloadUrl: "/assets/pdfs/sem1/sub6/unit2.pdf" },
        { unitNumber: 3, title: "Folk and Martial Arts", description: "Traditional arts and sports.", downloadUrl: "/assets/pdfs/sem1/sub6/unit3.pdf" },
        { unitNumber: 4, title: "Thinai Concept", description: "Flora and fauna in Tamil culture.", downloadUrl: "/assets/pdfs/sem1/sub6/unit4.pdf" },
        { unitNumber: 5, title: "Contribution of Tamils", description: "Tamils' role in Indian freedom struggle.", downloadUrl: "/assets/pdfs/sem1/sub6/unit5.pdf" },
    ],
    "sem1-sub7": [ // Problem Solving & Python Programming Lab
        { unitNumber: 1, title: "Lab Manual", description: "Complete laboratory manual for Python programming.", downloadUrl: "/assets/pdfs/sem1/sub7/lab_manual.pdf" },
    ],
    "sem1-sub8": [ // Physics & Chemistry Lab
        { unitNumber: 1, title: "Physics Lab Manual", description: "Experiments in Physics.", downloadUrl: "/assets/pdfs/sem1/sub8/physics_manual.pdf" },
        { unitNumber: 2, title: "Chemistry Lab Manual", description: "Experiments in Chemistry.", downloadUrl: "/assets/pdfs/sem1/sub8/chemistry_manual.pdf" },
    ],
    "sem1-sub9": [ // English Lab
        { unitNumber: 1, title: "Communication Skills Lab Manual", description: "Listening, Speaking, Reading, Writing skills.", downloadUrl: "/assets/pdfs/sem1/sub9/english_lab_manual.pdf" },
    ],
};

export const QUESTION_BANKS_DATA: Record<string, QuestionBank[]> = {
    sub1: [
        { id: 1, title: "Nov/Dec 2023 Question Paper", year: "2023", downloadUrl: "/assets/pdfs/qb1.pdf" },
        { id: 2, title: "Apr/May 2023 Question Paper", year: "2023", downloadUrl: "/assets/pdfs/qb2.pdf" },
    ],
};

export interface Event {
    id: number;
    title: string;
    date: string;
    type: 'academic' | 'event' | 'holiday';
}

export interface RecentDownload {
    id: number;
    title: string;
    subject: string;
    date: string;
}

export const EVENTS_DATA: Event[] = [
    { id: 1, title: "Model Exam I Begins", date: "Oct 15, 2023", type: "academic" },
    { id: 2, title: "Industrial Visit - Infosys", date: "Oct 20, 2023", type: "event" },
    { id: 3, title: "Diwali Holiday", date: "Nov 12, 2023", type: "holiday" },
    { id: 4, title: "Semester Lab Exams", date: "Nov 25, 2023", type: "academic" },
];

export const RECENT_DOWNLOADS: RecentDownload[] = [
    { id: 1, title: "Unit 1 - Introduction", subject: "Cloud Computing", date: "2 days ago" },
    { id: 2, title: "Lab Manual", subject: "Web Technology", date: "5 days ago" },
    { id: 3, title: "Question Bank 2023", subject: "Data Mining", date: "1 week ago" },
];

