import React from "react";

function Python() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Welcome to Python Programming</h1>

      {/* About Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>🐍 About Python</h2>
        <p>
          Python is a high-level, interpreted programming language known for its simplicity and readability.
          It powers millions of developers across web development, data science, machine learning, automation, and beyond.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>🌟 Key Features</h2>
        <ul style={styles.list}>
          <li>✅ Simple and beginner-friendly syntax</li>
          <li>✅ Massive libraries and frameworks</li>
          <li>✅ Cross-platform support</li>
          <li>✅ Supports multiple programming paradigms</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>💡 Popular Use Cases</h2>
        <ul style={styles.list}>
          <li>💻 Web Development (Django, Flask)</li>
          <li>📊 Data Science (Pandas, NumPy, Matplotlib)</li>
          <li>🧠 AI/ML (TensorFlow, Scikit-learn, PyTorch)</li>
          <li>⚙️ Automation & Scripting</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          🌈 Start your Python journey today and unlock endless possibilities!
        </p>
        <button style={styles.button}>🚀 Learn More</button>
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
    background: "linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#004e89",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#006699",
  },
  section: {
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  cta: {
    textAlign: "center",
    backgroundColor: "#e0f3ff",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    marginTop: "40px",
  },
  button: {
    backgroundColor: "#006699",
    color: "#fff",
    padding: "12px 28px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

styles.button[':hover'] = {
  backgroundColor: "#004d73",
};

export default Python;
