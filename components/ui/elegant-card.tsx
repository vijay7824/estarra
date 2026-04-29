import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ElegantCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
  variant?: 'default' | 'glass' | 'minimal' | 'elevated';
}

const glowColors = {
  purple: 'hover:shadow-purple-500/25',
  blue: 'hover:shadow-blue-500/25',
  green: 'hover:shadow-green-500/25',
  orange: 'hover:shadow-orange-500/25',
  pink: 'hover:shadow-pink-500/25',
};

const variants = {
  default: 'bg-white/90 backdrop-blur-sm border-0 shadow-xl',
  glass: 'glass-effect border border-white/20',
  minimal: 'bg-white border border-gray-200/50',
  elevated: 'bg-white shadow-2xl border-0',
};

export function ElegantCard({ 
  children, 
  className, 
  glowColor = 'purple',
  variant = 'default'
}: ElegantCardProps) {
  return (
    <Card 
      className={cn(
        'group transition-all duration-500 hover:-translate-y-2',
        variants[variant],
        glowColors[glowColor],
        'glow-effect',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      {children}
    </Card>
  );
}