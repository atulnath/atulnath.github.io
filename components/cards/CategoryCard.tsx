"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useState, useRef } from "react";

interface CategoryCardProps {
  title: string;
  count: number;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  delay?: number;
}

export function CategoryCard({
  title,
  count,
  description,
  icon: Icon,
  href,
  gradient,
  delay = 0,
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate tilt based on mouse position
  const getTiltStyle = () => {
    if (!isHovered || !cardRef.current) return {};
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((mousePosition.y - centerY) / centerY) * -10;
    const tiltY = ((mousePosition.x - centerX) / centerX) * 10;

    return {
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`,
    };
  };

  return (
    <Link href={href} className="group block">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative h-full animate-fade-in"
        style={{
          animationDelay: `${delay}s`,
          transition: "transform 0.3s ease-out",
          ...getTiltStyle(),
        }}
      >
        {/* Glow effect on hover */}
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
        />

        {/* Card content */}
        <div className="relative h-full bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Spotlight effect */}
          {isHovered && (
            <div
              className="absolute w-32 h-32 rounded-full bg-white/20 blur-2xl pointer-events-none transition-all duration-200"
              style={{
                left: mousePosition.x - 64,
                top: mousePosition.y - 64,
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon with animation */}
            <div className="mb-6">
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} transition-all duration-500 ${
                  isHovered ? "rotate-12 scale-110" : ""
                }`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Title and count */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all duration-300">
                {title}
              </h3>
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                >
                  {count}
                </span>
                <span className="text-muted-foreground text-sm">
                  {count === 1 ? "item" : "items"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 flex-grow">
              {description}
            </p>

            {/* Arrow indicator */}
            <div className="flex items-center text-sm font-medium">
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all duration-300">
                Explore
              </span>
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>

          {/* Decorative corner accent */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 group-hover:opacity-30`}
          />
        </div>
      </div>
    </Link>
  );
}
