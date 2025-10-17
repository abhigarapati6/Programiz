import React from "react";

function JavaScript() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>✨ Welcome to JavaScript Programming</h1>

      {/* About Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>🟨 About JavaScript</h2>
        <p>
          JavaScript is a versatile, high-level programming language that brings interactivity to web pages.
          It is a core technology of the web, alongside HTML and CSS, and is supported by all modern web browsers.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>⚡ Key Features</h2>
        <ul style={styles.list}>
          <li>✅ Client-side and server-side development</li>
          <li>✅ Rich ecosystem with libraries and frameworks</li>
          <li>✅ Event-driven, asynchronous programming</li>
          <li>✅ Runs directly in the browser</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section style={{ ...styles.section, ...styles.card }}>
        <h2 style={styles.subHeading}>🌐 Popular Use Cases</h2>
        <ul style={styles.list}>
          <li>🖥️ Frontend Development (React, Angular, Vue)</li>
          <li>🔁 Backend Development (Node.js, Express)</li>
          <li>🎮 Game Development (Phaser.js, Three.js)</li>
          <li>📱 Mobile & Desktop Apps (React Native, Electron)</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          🚀 Start building amazing interactive experiences with JavaScript!
        </p>
        <button style={styles.button}>🧠 Learn More</button>
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
    background: "linear-gradient(135deg, #fff8e1 0%, #fff3e0 100%)",
    borderRadius: "16px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "40px",
    color: "#d97706",
  },
  subHeading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#ef6c00",
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
    backgroundColor: "#fff3cd",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
    marginTop: "40px",
  },
  button: {
    backgroundColor: "#ef6c00",
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
  backgroundColor: "#d35400",
};

export default JavaScript;
