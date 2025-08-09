import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;

    constructor(canvasWidth: number, canvasHeight: number) {
      this.x = Math.random() * canvasWidth;
      this.y = Math.random() * canvasHeight;
      this.size = Math.random() * 10.0 + 0.3;
      this.speedX = Math.random() * 1.5 - 0.4;
      this.speedY = Math.random() * 1.5 - 0.4;
      this.color = Math.random() > 0.3
        ? `rgba(0, 255, 255, ${Math.random() * 0.2 + 0.1})`
        : `rgba(180, 0, 255, ${Math.random() * 0.2 + 0.1})`;
    }

    update(canvasWidth: number, canvasHeight: number) {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
      if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let lastRenderTime = 0;
    const renderInterval = 1000 / 30; 

    const stopAnimation = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };

    const animate = (timestamp: number) => {
      if (timestamp - lastRenderTime < renderInterval) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }
      
      lastRenderTime = timestamp;
      
      ctx.fillStyle = 'rgba(5, 10, 20, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    const startAnimation = () => {
      if (!animationFrameId.current) {
        lastRenderTime = performance.now();
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };
    
    const setup = () => {
      stopAnimation();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      particles = [];
      const particleCount = Math.min(25, Math.floor(window.innerWidth * window.innerHeight / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(window.innerWidth, window.innerHeight));
      }
      startAnimation();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    }, { threshold: 0.1 });

    observerRef.current.observe(canvas);
    
    setup();
    window.addEventListener('resize', setup);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', setup);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      stopAnimation();
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="particles fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;