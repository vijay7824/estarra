import { useScrollProgress } from '@/hooks/use-scroll-progress';

export function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <div 
        className="h-full estarra-gradient transition-all duration-300 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}