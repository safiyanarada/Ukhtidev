import React, { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 3; // Augmenté davantage pour être sûr de couvrir toute la page
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Color palette for the aurora - more feminine but professional
    const colors = [
      { r: 182, g: 139, b: 245 }, // lighter purple
      { r: 255, g: 110, b: 199 }, // pink
      { r: 51, g: 195, b: 240 },  // sky blue
      { r: 161, g: 102, b: 235 }, // mid purple
      { r: 255, g: 182, b: 232 }  // light pink
    ];
    
    // Create more gradient points for better coverage
    const points = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, // Légèrement plus rapide
      vy: (Math.random() - 0.5) * 0.3, // Légèrement plus rapide
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 0.5 + 0.5 // Facteur de taille aléatoire
    }));
    
    // Animation loop
    let animationId: number;
    
    const animate = () => {
      // Clear canvas with very slight fade effect for trails
      ctx.fillStyle = "rgba(22, 19, 32, 0.01)"; // Reduced opacity for more persistent effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient blobs
      for (const point of points) {
        // Move points
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
        
        // Draw radial gradient with larger radius
        const radius = Math.min(canvas.width, canvas.height) * 0.7 * point.size;
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, radius
        );
        
        const { r, g, b } = point.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.4)`); // Augmenté davantage l'opacité
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-[300vh] -z-10" // Modifié pour être vraiment derrière tout mais avec une grande hauteur
      style={{ opacity: 1 }} // Opacité à 100%
    />
  );
};
