"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const wordsArray = words.split(" ");
  return (
    <div className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          initial={{ opacity: 0, filter: filter ? "blur(10px)" : "none" }}
          animate={{ opacity: 1, filter: filter ? "blur(0px)" : "none" }}
          transition={{
            duration: duration,
            delay: idx * 0.1,
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
