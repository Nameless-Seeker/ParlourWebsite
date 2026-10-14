import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string; showLabel?: boolean }> = ({
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-full border border-taupe-300/80 dark:border-white/20 hover:border-gold-500 dark:hover:border-gold-400 bg-ivory-100/80 dark:bg-white/5 hover:bg-gold-500/10 dark:hover:bg-white/10 text-espresso-900 dark:text-ivory-100 hover:text-gold-700 dark:hover:text-gold-300 transition-all duration-300 focus:outline-none cursor-pointer shadow-sm ${className}`}
      title={isDark ? 'Switch to Light Atelier Theme' : 'Switch to Nocturne Dark Theme'}
      aria-label={isDark ? 'Switch to Light Atelier Theme' : 'Switch to Nocturne Dark Theme'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-gold-300"
            >
              <Sun className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-espresso-800"
            >
              <Moon className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-[0.65rem] tracking-widest uppercase font-medium">
          {isDark ? 'Nocturne Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
