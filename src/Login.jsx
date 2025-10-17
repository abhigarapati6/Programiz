import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react"; // person avatar icon

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await fetch("https://6884661a745306380a382c50.mockapi.io/Users");
      const data = await response.json();

      const user = data.find(
        (item) => item.MyEmail === email && item.MyPassword === password
      );

      if (user) {
        alert("✅ Login successful!");
        navigate("/home");
      } else {
        alert("❌ Invalid email or password.");
      }
    } catch (error) {
      alert("⚠️ Something went wrong.");
      console.error("Login error:", error);
    }
  }

  return (
    <div style={styles.wrapper}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        {/* Avatar with glowing animation */}
        <motion.div
          style={styles.avatarBox}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 20px rgba(59,130,246,0.3)",
              "0 0 40px rgba(59,130,246,0.6)",
              "0 0 20px rgba(59,130,246,0.3)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <UserCircle2 size={120} color="#2563EB" />
        </motion.div>

        {/* Login Form */}
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back 👋
        </motion.h2>

        <motion.div
          style={styles.formGroup}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </motion.div>

        <motion.div
          style={styles.formGroup}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </motion.div>

        <motion.button
          style={styles.button}
          onClick={handleLogin}
          whileHover={{ scale: 1.05, background: "linear-gradient(90deg,#2563EB,#1D4ED8)" }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "20px",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px 30px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    textAlign: "center",
  },
  avatarBox: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    margin: "0 auto 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
  },
  heading: {
    fontSize: "26px",
    fontWeight: "600",
    marginBottom: "25px",
    color: "white",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    marginBottom: "6px",
    display: "block",
    fontSize: "14px",
    color: "#f1f1f1",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    background: "rgba(255,255,255,0.9)",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #3B82F6, #2563EB)",
    color: "#fff",
    fontSize: "17px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default Login;
