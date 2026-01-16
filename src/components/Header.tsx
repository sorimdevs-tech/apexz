import React from "react";
import apexLogo from "../assets/apexlogo.png";

interface HeaderProps {
  showBackButton?: boolean;
  onBackToHome?: () => void;
}

export default function Header({ showBackButton = false, onBackToHome }: HeaderProps) {
  const styles: { [key: string]: React.CSSProperties } = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 40px",
      borderBottom: "1px solid #1e293b",
      backgroundColor: "rgba(15, 20, 25, 0.95)",
      backdropFilter: "blur(10px)",
      position: "relative",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    logoText: {
      fontSize: 16,
      fontWeight: 700,
      color: "#3b82f6",
      margin: 0,
    },
    navLinks: {
      display: "flex",
      gap: 24,
      alignItems: "center",
    },
    navLink: {
      color: "#e2e8f0",
      textDecoration: "none",
      fontSize: 13,
      fontWeight: 500,
      cursor: "pointer",
      transition: "color 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    profileButton: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      backgroundColor: "#3b82f6",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      fontWeight: 600,
      transition: "all 0.3s ease",
    },
    backButton: {
      backgroundColor: "#f1f5f9",
      color: "#1e293b",
      border: "1.5px solid #cbd5e1",
      borderRadius: 8,
      padding: "8px 16px",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: 13,
      transition: "all 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo Only */}
      <div style={styles.logoContainer}>
        <img src={apexLogo} alt="Logo" style={{ width: 36, height: 36, objectFit: 'contain' }} />
        <p style={styles.logoText}>javaAPEX</p>
      </div>

      {/* Navigation Links */}
      <div style={styles.navLinks}>
        <a
          style={styles.navLink}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          href="#"
        >
          <span>📚</span> Documentation
        </a>
        <a
          style={styles.navLink}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          href="https://github.com/sorimdevs-tech/java-migration-accelerator"
          target="_blank"
          rel="noreferrer"
        >
          <span>🐙</span> GitHub
        </a>
        <a
          style={styles.navLink}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#e2e8f0")}
          href="#"
        >
          <span>💖</span> Support Us
        </a>
        
        {showBackButton && onBackToHome ? (
          <button
            style={styles.backButton}
            onClick={onBackToHome}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e2e8f0";
              e.currentTarget.style.borderColor = "#64748b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.borderColor = "#cbd5e1";
            }}
          >
            ← Home
          </button>
        ) : null}
        
        {/* Profile Icon */}
        <button
          style={styles.profileButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#2563eb";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#3b82f6";
            e.currentTarget.style.transform = "scale(1)";
          }}
          title="Profile"
        >
          👤
        </button>
      </div>
    </nav>
  );
}
