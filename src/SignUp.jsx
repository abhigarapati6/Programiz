import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  async function handleSignup() {
    const formData = { MyName: name, MyEmail: email, MyPassword: password, MyDOB: dob };

    try {
      const result = await fetch(
        "https://6884661a745306380a382c50.mockapi.io/Users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (result.ok) {
        alert("✅ Account Created Successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setDob("");
        navigate("/login");
      } else {
        alert("❌ Failed to create account.");
      }
    } catch (error) {
      alert("⚠️ Something went wrong.");
      console.error(error);
    }
  }

  return (
    <div style={styles.page}>
      {/* Animated Background Gradient */}
      <motion.div
        style={styles.gradientBg}
        animate={{
          background: [
            "linear-gradient(135deg, #6EE7B7, #3B82F6)",
            "linear-gradient(135deg, #FDE68A, #FCA5A5)",
            "linear-gradient(135deg, #C084FC, #60A5FA)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating Decorative Circles */}
      <motion.div
        style={styles.circle1}
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        style={styles.circle2}
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Signup Card */}
      <motion.div
        style={styles.container}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <motion.h2
          style={styles.heading}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Create Your Account
        </motion.h2>

        {/* Inputs */}
        {[
          { id: "name", label: "Name", value: name, setter: setName, type: "text", placeholder: "Enter your name" },
          { id: "email", label: "Email", value: email, setter: setEmail, type: "email", placeholder: "Enter your email" },
          { id: "password", label: "Password", value: password, setter: setPassword, type: "password", placeholder: "Enter your password" },
          { id: "dob", label: "Date of Birth", value: dob, setter: setDob, type: "date" },
        ].map((field, i) => (
          <motion.div
            style={styles.formGroup}
            key={field.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          >
            <label htmlFor={field.id}>{field.label}</label>
            <motion.input
              whileFocus={{ borderColor: "#3B82F6", scale: 1.02 }}
              transition={{ duration: 0.2 }}
              id={field.id}
              style={styles.input}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              type={field.type}
              placeholder={field.placeholder}
            />
          </motion.div>
        ))}

        {/* Button */}
        <motion.button
          style={styles.button}
          onClick={handleSignup}
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 20px rgba(59,130,246,0.7)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          Sign Up
        </motion.button>

        <h5 style={styles.loginText}>
          Already have an account?{" "}
          <motion.span
            style={styles.loginLink}
            whileHover={{ scale: 1.1, color: "#1E40AF" }}
            onClick={() => navigate("/login")}
          >
            Login here
          </motion.span>
        </h5>
      </motion.div>
    </div>
  );
}

/* 🎨 Styling */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  gradientBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -2,
  },
  circle1: {
    position: "absolute",
    top: "15%",
    left: "10%",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "rgba(59,130,246,0.3)",
    zIndex: -1,
  },
  circle2: {
    position: "absolute",
    bottom: "15%",
    right: "12%",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: "rgba(16,185,129,0.3)",
    zIndex: -1,
  },
  container: {
    width: "100%",
    maxWidth: "420px",
    padding: "35px",
    borderRadius: "18px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(10px)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#111827",
    fontSize: "26px",
    fontWeight: "600",
  },
  formGroup: {
    marginBottom: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  button: {
    padding: "14px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(90deg, #3B82F6, #2563EB)",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "15px",
  },
  loginText: {
    textAlign: "center",
    marginTop: "18px",
    fontSize: "15px",
    color: "#374151",
  },
  loginLink: {
    color: "#3B82F6",
    cursor: "pointer",
    textDecoration: "underline",
    marginLeft: "5px",
    fontWeight: "500",
  },
};

export default SignUp;
