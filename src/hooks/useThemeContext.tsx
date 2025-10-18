import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeContextType } from "@/contexts/ThemeContext";

function useThemeContext() {
  const context = useContext<ThemeContextType | undefined>(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

export default useThemeContext;