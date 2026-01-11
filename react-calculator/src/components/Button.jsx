// src/components/Button.jsx
export default function Button({ label, onClick, variant, className = "" }) {
  return (
    <button
      className={`btn ${variant ? `btn-${variant}` : ""} ${className}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
