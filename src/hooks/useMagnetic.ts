"use client";

import { useRef, useState, type MouseEvent } from "react";

export function useMagnetic<T extends HTMLElement = HTMLDivElement>(strength: number = 0.25) {
  const ref = useRef<T | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref,
    position,
    handleMouseMove,
    handleMouseLeave,
  };
}
