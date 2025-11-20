
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

// Interface for props
interface IconData {
  id: number;
  src: string;
  className: string;
  alt: string;
}

interface IconComponentProps {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  data: IconData;
  index: number;
}

// Single Icon Component
const Icon: React.FC<IconComponentProps> = ({
  mouseX,
  mouseY,
  data,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const handleMouseMove = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(mouseX.current - (rect.left + rect.width / 2), 2) +
          Math.pow(mouseY.current - (rect.top + rect.height / 2), 2)
        );

        if (distance < 200) {
          const angle = Math.atan2(
            mouseY.current - (rect.top + rect.height / 2),
            mouseX.current - (rect.left + rect.width / 2)
          );
          const force = (1 - distance / 200) * 40;
          x.set(-Math.cos(angle) * force);
          y.set(-Math.sin(angle) * force);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={cn('absolute z-0 pointer-events-auto', data.className)}
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 p-2.5 md:p-3.5 rounded-2xl shadow-sm bg-white/40 dark:bg-zinc-800/40 backdrop-blur-[2px] border border-zinc-200/50 dark:border-zinc-700/50 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-colors duration-300"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 2, 0, -2, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <img 
            src={data.src} 
            alt={data.alt} 
            className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </motion.div>
    </motion.div>
  );
};

const FloatingIcons = () => {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.current = event.clientX;
    mouseY.current = event.clientY;
  };

  // Strategic positioning:
  // - Avoid center-left (Title/Text)
  // - Avoid center-right (Code Card)
  // - Populate edges and corners
  const icons: IconData[] = [
    // Left Column (Far Left)
    { id: 1, src: '/github.svg', alt: 'GitHub', className: 'top-[15%] left-[2%] md:left-[5%]' },
    { id: 2, src: '/anthropic.svg', alt: 'Anthropic', className: 'top-[35%] left-[3%] md:left-[3%]' },
    { id: 3, src: '/mistral-color (1).svg', alt: 'Mistral', className: 'top-[55%] left-[2%] md:left-[6%]' },
    { id: 4, src: '/huggingface-color (1).svg', alt: 'HuggingFace', className: 'bottom-[15%] left-[5%] md:left-[8%]' },
    
    // Top Scatter (Above Title/Card)
    { id: 5, src: '/openai (2).svg', alt: 'OpenAI', className: 'top-[12%] left-[25%] md:left-[30%]' },
    { id: 6, src: '/claude-color (1).svg', alt: 'Claude', className: 'top-[8%] right-[30%] md:right-[35%]' },
    
    // Right Column (Far Right - avoiding Code Card)
    { id: 7, src: '/figma-color.svg', alt: 'Figma', className: 'top-[15%] right-[2%] md:right-[5%]' },
    { id: 8, src: '/aistudio (1).svg', alt: 'AI Studio', className: 'top-[40%] right-[1%] md:right-[2%]' }, 
    { id: 9, src: '/gemini-color (2).svg', alt: 'Gemini', className: 'top-[60%] right-[3%] md:right-[4%]' },
    { id: 10, src: '/perplexity-color (1).svg', alt: 'Perplexity', className: 'bottom-[15%] right-[5%] md:right-[8%]' },

    // Bottom Scatter (Below Title/Card)
    { id: 11, src: '/deepseek-color (1).svg', alt: 'DeepSeek', className: 'bottom-[5%] left-[25%]' },
    { id: 12, src: '/qwen-color (1).svg', alt: 'Qwen', className: 'bottom-[8%] right-[35%]' },
    { id: 13, src: '/lovable-color (1).svg', alt: 'Lovable', className: 'bottom-[2%] left-[45%]' },
  ];

  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-auto"
      onMouseMove={handleMouseMove}
    >
      {icons.map((icon, index) => (
        <Icon
          key={icon.id}
          mouseX={mouseX}
          mouseY={mouseY}
          data={icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;
