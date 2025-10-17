import React from "react";
import { FaJava, FaRocket, FaListOl, FaBook } from "react-icons/fa";

function Java() {
  const topics = [
    "Get Started With Java",
    "Your First Java Program",
    "Java Comments",
    "Java Fundamentals",
    "Java Flow Control",
    "Java Arrays",
    "Java OOP (I)",
    "Java OOP (II)",
    "Java OOP (III)",
    "Java Exception Handling",
    "Java List",
    "Java Queue",
    "Java Map",
    "Java Set",
    "Java I/O Streams",
    "Java Reader/Writer",
    "Additional Topics",
    "learn more"
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <FaJava style={styles.icon} />
        Welcome to Java Programming
      </h1>

      {/* About Java */}
      <section style={{ ...styles.section, ...styles.card }}>
        <p style={styles.paragraph}>
          Java is a versatile, class-based, object-oriented programming language used by over 9 million developers.
          It powers web apps, Android development, enterprise systems, big data, and more. Known for its portability,
          reliability, and security, Java is a staple in academia and enterprise development.
        </p>
      </section>

      {/* Features & Topics */}
      <div style={styles.grid}>
        {/* Why Java */}
        <section style={{ ...styles.section, ...styles.card }}>
          <h2 style={styles.subHeading}>
            <FaRocket style={styles.icon} /> Why Learn Java?
          </h2>
          <ul style={styles.list}>
            <li>✅ Platform Independent (Write Once, Run Anywhere)</li>
            <li>✅ Ideal for Enterprise Applications</li>
            <li>✅ Strong Community & Rich Libraries</li>
            <li>✅ Android App Development</li>
            <li>✅ High Demand in Global Job Market</li>
          </ul>
        </section>

        {/* Java Roadmap */}
        <section style={{ ...styles.section, ...styles.card }}>
          <h2 style={styles.subHeading}>
            <FaListOl style={styles.icon} /> Java Course Roadmap
          </h2>
          <ol style={styles.orderedList}>
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ol>
        </section>
      </div>

      {/* Final Call to Action */}
      <section style={styles.cta}>
        <h2 style={styles.ctaHeading}>
          <FaBook style={styles.icon} /> Start Your Java Journey Today!
        </h2>
        <p style={styles.paragraph}>
          Explore tutorials, build projects, and master Java with structured learning paths.
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
    background: "linear-gradient(135deg, #f5f0ff 0%, #fdf6ff 100%)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#6a1b9a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#8e24aa",
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
    backgroundColor: "#e1bee7",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    marginTop: "40px",
    color: "#4a0072",
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
    fontSize: "28px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
};

export default Java;
