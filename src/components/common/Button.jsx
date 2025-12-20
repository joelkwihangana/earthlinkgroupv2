// src/components/common/Button.jsx
import React from "react";
import "./Button.css";

/**
 * Smart Button Component
 * Handles external links, internal links, and click handlers
 *
 * @param {string} variant - 'primary' or 'outline'
 * @param {node} children - Button content
 * @param {function} onClick - Click handler
 * @param {string} href - Link URL
 * @param {boolean} external - Opens in new tab if true
 * @param {string} className - Additional CSS classes
 */
const Button = ({
  variant = "primary",
  children,
  onClick,
  href,
  external = false,
  className = "",
  ...props
}) => {
  const buttonClass = `btn btn-${variant} ${className}`;

  // External link (opens in new tab)
  if (href && external) {
    return (
      <a
        href={href}
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal link (same tab)
  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  // Regular button with onClick
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
