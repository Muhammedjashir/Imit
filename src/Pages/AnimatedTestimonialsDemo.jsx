import { AnimatedTestimonials } from "../Component/ui/AnimatedTestimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "React is a JavaScript library for building fast and interactive user interfaces using a component-based architecture. It efficiently updates the UI with its virtual DOM, making development smooth and scalable.",
      name: "React",
      designation: "React Front - end",
      src: "https://img.freepik.com/free-vector/atom-science-education-icon-vector-neon-digital-graphic_53876-114080.jpg?t=st=1741602886~exp=1741606486~hmac=500273dedd32905bd5d0ebee3386dac170ac57ce78c149d6bfbb16b7d6e8519c&w=740",
    },
    {
      quote:
        "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it highly scalable and efficient for modern applications. It supports powerful querying, indexing, and real-time analytics for handling large datasets.",
      name: "Mongo db",
      designation: "MongoDb Database",
      src: "https://juliocasal.com/assets/images/tns-39-what-is-mongodb.jpg",
    },
    {
      quote:
        "MySQL is a popular open-source relational database management system (RDBMS) known for its speed, reliability, and ease of use. It uses structured query language (SQL) to manage and organize data efficiently.",
      name: "MySql",
      designation: "MySQL Database",
      src: "https://bif.telkomuniversity.ac.id/sahecar/2024/12/Apa-Itu-MySQL-Pengertian-MySQL-Cara-Kerja-dan-Kelebihannya.png",
    },
    {
      quote:
        "Node.js is a runtime environment that allows you to run JavaScript on the server side, enabling fast, scalable, and efficient backend development. It is built on Chrome's V8 engine and is commonly used for building APIs, real-time applications, and web servers.",
      name: "Node JS",
      designation: "Node JS Framework",
      src: "https://beecrowd.com/wp-content/uploads/2024/04/2022-11-25-Nodes-js.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Flutter",
      designation: "Flutter Mobile App",
      src: "https://d2ms8rpfqc4h24.cloudfront.net/What_is_Flutter_f648a606af.png",
    },
    {
      quote:
        "Firebase is a backend-as-a-service (BaaS) platform by Google that provides tools for authentication, real-time databases, cloud storage, hosting, and serverless functions. It helps developers build and scale web and mobile apps quickly without managing backend infrastructure.",
      name: "Firebase",
      designation: "Firebase Mobile",
      src: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
    },
    {
      quote:
        "AWS (Amazon Web Services) is a cloud computing platform that offers scalable and secure solutions for computing, storage, databases, machine learning, and more. It enables businesses to deploy applications globally with high availability and reliability.",
      name: "AWS",
      designation: "Amazon AWS Cloud",
      src: "https://materialplus.srijan.net/hubfs/Srijan%20Blog%20-2021/AWS-The-Right-Cloud-for-Media-and-Entertainment-Workloads.png",
    },
    {
      quote:
        "Angular is a powerful TypeScript-based framework for building dynamic, scalable, and high-performance web applications. It provides a structured architecture, two-way data binding, and a modular approach for developing single-page applications (SPAs).",
      name: "Angular ",
      designation: "Angular Front - end",
      src: "https://ionic.io/blog/wp-content/uploads/2024/02/angular-feature-image-1.png",
    },
    {
      quote:
        "MariaDB is an open-source relational database management system (RDBMS) that is a fork of MySQL. It offers high performance, scalability, and strong security while maintaining compatibility with MySQL, making it a great choice for modern applications.",
      name: "Maria DB ",
      designation: "Maria DB Database",
      src: "https://mariadb.com/wp-content/uploads/2018/10/mariadb-social-share.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
