import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

// --- SVG Tech Icons ---

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 dark:text-zinc-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

const IconVercel = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-900 dark:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2z"/>
    </svg>
);

const IconStripe = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#635BFF"/><path d="M6 7H18V9H6V7Z" fill="white"/><path d="M6 11H18V13H6V11Z" fill="white"/><path d="M6 15H14V17H6V15Z" fill="white"/>
    </svg>
);

const IconFigma = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" fill="#2C2C2C"/>
        <path d="M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5V7z" fill="#0ACF83"/>
        <path d="M12 12a5 5 0 0 1-5-5 5 5 0 0 1 5-5v10z" fill="#A259FF"/>
        <path d="M12 17a5 5 0 0 1-5-5h10a5 5 0 0 1-5 5z" fill="#F24E1E"/>
        <path d="M7 12a5 5 0 0 1 5 5v-5H7z" fill="#FF7262"/>
    </svg>
);

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
         <g stroke="#61DAFB" strokeWidth="1" fill="none">
             <ellipse rx="10" ry="4.5" cx="12" cy="12"/>
             <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"/>
             <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"/>
         </g>
    </svg>
);

const IconOpenAI = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800 dark:text-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0843 3.5366-1.9718a.2711.2711 0 0 0 .133-.2352v-3.8221l3.4749 1.9997v3.9113a4.4992 4.4992 0 0 1-4.4054 1.2428zM5.4685 19.355a4.487 4.487 0 0 1-1.9486-4.0392l.1421.0853 3.5376 1.9718a.2711.2711 0 0 0 .2672 0l3.3361-1.9371v3.9639l-3.5084 2.0192a4.5 4.5 0 0 1-1.8256-2.0639zm-2.6785-9.625a4.49 4.49 0 0 1 1.2877-4.33l.1419.0843 3.5366 1.9718a.2711.2711 0 0 0 .2672 0l3.3361-1.9371v3.9639l-3.4749 2.0192-1.6268-2.9257-3.4675 1.1537zm14.4685-5.203a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0843-3.5366 1.9718a.2711.2711 0 0 0-.133.2352v3.8221l-3.4749-1.9997V5.8911a4.4992 4.4992 0 0 1 4.4054-1.2428zm5.0656 5.2689a4.487 4.487 0 0 1 1.9486 4.0392l-.1421-.0853-3.5376-1.9718a.2711.2711 0 0 0-.2672 0l-3.3361 1.9371V9.7594l3.5084-2.0192a4.5 4.5 0 0 1 1.8256 2.0639zm-2.0072 8.2783l-3.5366-1.9718a.2711.2711 0 0 0-.2672 0l-3.3361 1.9371V14.208l3.4749-2.0192 1.6268 2.9257 2.0382-.9065z"/>
    </svg>
);

// Interface for props
interface IconProps {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

interface IconComponentProps {
  mouseX: React.MutableRefObject<number>;
  mouseY: React.MutableRefObject<number>;
  iconData: IconProps;
  index: number;
}

// Single Icon Component
const Icon: React.FC<IconComponentProps> = ({
  mouseX,
  mouseY,
  iconData,
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
      className={cn('absolute', iconData.className)}
    >
      <motion.div
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 p-3 rounded-2xl shadow-lg bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 3, 0, -3, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
      >
        <iconData.icon className="w-8 h-8" />
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

  // Strategic positioning to avoid text overlap (Edges of screen)
  const icons: IconProps[] = [
    { id: 1, icon: IconGitHub, className: 'top-[15%] left-[5%]' },
    { id: 2, icon: IconVercel, className: 'top-[10%] right-[10%]' },
    { id: 3, icon: IconStripe, className: 'bottom-[25%] left-[8%]' },
    { id: 4, icon: IconFigma, className: 'bottom-[30%] right-[5%]' },
    { id: 5, icon: IconReact, className: 'top-[35%] left-[2%]' },
    { id: 6, icon: IconOpenAI, className: 'top-[45%] right-[3%]' },
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
          iconData={icon}
          index={index}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;