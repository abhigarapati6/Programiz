import React from "react";
import { FaDatabase, FaBookOpen, FaListUl } from "react-icons/fa";

function Sql() {
  const topics = [
    "Introduction",
    "SQL SELECT (I)",
    "SQL SELECT (II)",
    "SQL JOINS",
    "SQL Database and Table",
    "SQL Insert, Update and Delete",
    "SQL Constraints",
    "SQL Additional Topics",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <FaDatabase style={styles.icon} />
        Welcome to SQL
      </h1>

      {/* About SQL */}
      <section style={{ ...styles.section, ...styles.card }}>
        <p style={styles.paragraph}>
          SQL, or Structured Query Language, is the standard language to access and manage data. It is used in different industries like IT, finance, healthcare, and research.
          <br /><br />
          Data is a valuable commodity, and learning SQL gives you a deeper understanding of how data is stored and manipulated. This gives you an edge in your professional career.
          <br /><br />
          Due to its heavy use in backend development and data science, there is a high demand for SQL professionals with a competitive salary.
        </p>
      </section>

      {/* Course Outline */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>
          <FaListUl style={styles.icon} />
          SQL Course Outline
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
          <FaBookOpen style={styles.icon} /> Begin Your SQL Learning Path!
        </h2>
        <p style={styles.paragraph}>
          Understand how to work with databases, write queries, and manage data efficiently using SQL.
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
    background: "linear-gradient(135deg, #e8f0ff 0%, #f2f7ff 100%)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#1565c0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#1976d2",
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
  orderedList: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  cta: {
    textAlign: "center",
    backgroundColor: "#dbeeff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    marginTop: "40px",
    color: "#0d47a1",
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
};

export default Sql;
