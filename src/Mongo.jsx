import React from "react";
import { FaLeaf, FaCogs, FaServer } from "react-icons/fa";

function Mongo() {
  const topics = [
    "Introduction to NoSQL & MongoDB",
    "MongoDB Installation & Setup",
    "Basic Mongo Shell Commands",
    "Creating Databases & Collections",
    "CRUD Operations (Create, Read, Update, Delete)",
    "Querying Documents",
    "Aggregation Framework",
    "Indexing in MongoDB",
    "Data Modeling & Best Practices",
    "Working with Mongoose (Node.js ODM)",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <FaLeaf style={styles.icon} />
        Welcome to MongoDB
      </h1>

      {/* About MongoDB */}
      <section style={{ ...styles.section, ...styles.card }}>
        <p style={styles.paragraph}>
          MongoDB is a document-oriented NoSQL database used to store high volumes of data in a flexible, scalable format.
          It uses a JSON-like format called BSON, making it ideal for modern web applications, especially those using JavaScript.
          <br /><br />
          Known for its performance and scalability, MongoDB is widely adopted for real-time analytics, content management,
          IoT, mobile apps, and more.
        </p>
      </section>

      {/* Why Learn MongoDB */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>
          <FaCogs style={styles.icon} />
          Why Learn MongoDB?
        </h2>
        <ul style={styles.list}>
          <li>✅ Schema-less (flexible) document structure</li>
          <li>✅ Ideal for fast, iterative development</li>
          <li>✅ Built-in replication and sharding for scalability</li>
          <li>✅ Great for handling unstructured or semi-structured data</li>
          <li>✅ Works seamlessly with Node.js and JavaScript-based stacks</li>
        </ul>
      </section>

      {/* Learning Roadmap */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>
          <FaServer style={styles.icon} />
          MongoDB Learning Roadmap
        </h2>
        <ol style={styles.orderedList}>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ol>
      </section>

      {/* Call to Action */}
      <section style={styles.cta}>
        <h2 style={styles.ctaHeading}>
          <FaLeaf style={styles.icon} />
          Master Modern Data with MongoDB!
        </h2>
        <p style={styles.paragraph}>
          Learn how to design scalable applications and manage big data efficiently with MongoDB.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "50px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    background: "linear-gradient(135deg, #e8fff5 0%, #f5fff8 100%)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#2e7d32",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#388e3c",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  section: {
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.7",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  orderedList: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  cta: {
    textAlign: "center",
    backgroundColor: "#d0f0df",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    marginTop: "40px",
    color: "#1b5e20",
  },
  ctaHeading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  icon: {
    fontSize: "26px",
  },
};

export default Mongo;
