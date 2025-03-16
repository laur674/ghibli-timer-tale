
import React from "react";
import { ThemeProvider } from "../contexts/ThemeContext";
import Timer from "../components/Timer";
import ThemeToggle from "../components/ThemeToggle";
import GhibliBackground from "../components/GhibliBackground";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative">
        <GhibliBackground />
        <ThemeToggle />
        
        <div className="text-center z-10 animate-fade-in relative">
          <div className="howl-title-container mb-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight howl-title">
              Howl's Timer Castle
            </h1>
            <p className="text-lg text-foreground/80 mt-2 max-w-md mx-auto howl-subtitle">
              A magical timekeeper inspired by Howl's Moving Castle
            </p>
          </div>
          
          <Timer />
          
          <div className="mt-16 text-sm text-foreground/60">
            <p className="howl-quote">"It's not that you've got no heart. It's just that it's all scrambled up for now."</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
