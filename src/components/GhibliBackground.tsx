
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const GhibliBackground: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          theme === "light"
            ? "bg-gradient-to-b from-ghibli-blueLight/80 via-ghibli-blue/70 to-ghibli-blue/60"
            : "bg-gradient-to-b from-ghibli-dark/90 via-ghibli-darkLight/80 to-ghibli-dark/70"
        }`}
      />

      {/* Background GIF - changes based on theme */}
      <div className="absolute inset-0 w-full h-full">
        {/* Light theme background */}
        <div 
          className={`w-full h-full transition-opacity duration-700 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://i.imgur.com/RMBGrpt.gif')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
        
        {/* Dark theme background */}
        <div 
          className={`w-full h-full transition-opacity duration-700 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://i.imgur.com/gEYXfV9.gif')", 
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiPjwvcmVjdD4KPC9zdmc+')] opacity-50"></div>
    </div>
  );
};

export default GhibliBackground;
