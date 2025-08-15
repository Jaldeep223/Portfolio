import React, { useRef, useEffect } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);

  // Helper function to draw different shapes
  const drawShape = (ctx, shape, x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();

    switch (shape) {
      case 'circle':
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'square':
        ctx.fillRect(x - size, y - size, size * 2, size * 2);
        break;

      case 'triangle':
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y + size);
        ctx.lineTo(x - size, y + size);
        ctx.closePath();
        ctx.fill();
        break;

      case 'diamond':
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        ctx.fill();
        break;

      default:
        // fallback circle
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const shapes = ['circle', 'square', 'triangle', 'diamond'];

    // Initialize particles with random shape and size 10-20
    particles.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      size: Math.random() * 10 + 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles.current) {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        drawShape(ctx, p.shape, p.x, p.y, p.size, 'rgba(255, 255, 255, 0.2)');
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100vw', height: '100vh' }}
      className="fixed top-0 left-0 z-0 pointer-events-none"
    />
  );
};

export default BackgroundAnimation;
