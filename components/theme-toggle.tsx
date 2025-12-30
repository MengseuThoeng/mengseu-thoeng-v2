"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-14 rounded-full bg-gray-800/50 border border-gray-700" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-shadow"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
