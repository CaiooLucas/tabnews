"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  as?: "button" | "a" | "div";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function LiquidGlassButton({
  children,
  as = "button",
  href,
  className = "",
  onClick,
  ...props
}: LiquidGlassButtonProps) {
  const ref = useRef<any>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--mouse-x", `${x}px`);
    ref.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const commonProps = {
    ref,
    onMouseMove: handleMouseMove,
    className: `liquid-glass-follow cursor-pointer relative overflow-hidden ${className}`,
    onClick,
    ...props,
  };

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} {...commonProps}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} {...commonProps}>
        {children}
      </Link>
    );
  }

  if (as === "div") {
    return <div {...commonProps}>{children}</div>;
  }

  return <button {...commonProps}>{children}</button>;
}
