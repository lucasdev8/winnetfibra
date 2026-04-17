"use client"

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

type SpeedometerProps = {
  value: number;
  max?: number;
};

export default function Speedometer({ value, max = 300 }: SpeedometerProps) {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [angle, setAngle] = useState<number>(0);

  useEffect(() => {
    let start = displayValue;
    let end = value;

    const overshootValue = end * 1.2;

    let startTime: number | null = null;
    const duration1 = 400;
    const duration2 = 300;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration1) {
        const progress = elapsed / duration1;
        const current = start + (overshootValue - start) * progress;
        setDisplayValue(current);
        setAngle((current / max) * 180);
        requestAnimationFrame(animate);
      } else if (elapsed < duration1 + duration2) {
        const progress = (elapsed - duration1) / duration2;
        const current = overshootValue - (overshootValue - end) * progress;
        setDisplayValue(current);
        setAngle((current / max) * 180);
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end);
        setAngle((end / max) * 180);
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  // Oscilação contínua
  useEffect(() => {
    let frame: number;

    const oscillate = () => {
      const baseAngle = (displayValue / max) * 180;
      const time = Date.now() / 25;
      const wobble = Math.sin(time) * 2;

      setAngle(baseAngle + wobble);

      frame = requestAnimationFrame(oscillate);
    };

    oscillate();

    return () => cancelAnimationFrame(frame);
  }, [displayValue]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box position="relative" width={200} height={90}>
        {/* SVG com viewBox corrigido */}
        <svg viewBox="0 -15 200 130" width="100%" height="100%">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0097B2" />
              <stop offset="50%" stopColor="#7ED759" />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          <path
            d="M10 90 A80 80 0 0 1 190 90"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>

        {/* Ponteiro */}
        <Box
          position="absolute"
          left="50%"
          bottom={0}
          sx={{
            transform: `translateX(-50%) rotate(${angle - 90}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          <Box
            width={4}
            height={80}
            bgcolor="#000"
            borderRadius={2}
          />
        </Box>
      </Box>

      <Typography variant="h4" fontWeight="bold" mt={1}>
        {displayValue.toFixed(0)} Mega
      </Typography>
    </Box>
  );
}

// Uso:
// <Speedometer value={180} max={300} />