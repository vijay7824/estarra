interface FloatingElementsProps {
  variant?: 'hero' | 'section' | 'minimal';
}

export function FloatingElements({ variant = 'section' }: FloatingElementsProps) {
  const elements = {
    hero: [
      { size: 'w-32 h-32', color: 'bg-white/10', position: 'top-20 left-10', animation: 'animate-pulse-slow', blur: 'blur-xl' },
      { size: 'w-48 h-48', color: 'bg-yellow-400/20', position: 'bottom-20 right-10', animation: 'animate-float', blur: 'blur-2xl' },
      { size: 'w-24 h-24', color: 'bg-purple-300/20', position: 'top-1/2 left-1/3', animation: 'animate-pulse-slow', blur: 'blur-xl', delay: '1s' },
    ],
    section: [
      { size: 'w-28 h-28', color: 'bg-purple-200/20', position: 'top-32 left-16', animation: 'animate-pulse-slow', blur: 'blur-xl' },
      { size: 'w-36 h-36', color: 'bg-pink-200/15', position: 'bottom-20 right-20', animation: 'animate-float', blur: 'blur-2xl' },
    ],
    minimal: [
      { size: 'w-16 h-16', color: 'bg-purple-100/30', position: 'top-10 right-10', animation: 'animate-float', blur: 'blur-lg' },
    ],
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements[variant].map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full ${element.position} ${element.animation} ${element.blur}`}
          style={{ animationDelay: element.delay || '0s' }}
        />
      ))}
    </div>
  );
}