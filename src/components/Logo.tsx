interface LogoProps {
  variant?: 'default' | 'light';
  className?: string;
}

export function Logo({ variant = 'default', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-text';
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-iron rounded-lg flex items-center justify-center">
        <span className="text-white font-black text-lg md:text-xl">IM</span>
      </div>
      <div className={`${textColor}`}>
        <div className="font-black text-lg md:text-xl leading-none">Iron Mãe</div>
        <div className="font-medium text-xs md:text-sm leading-none opacity-80">Rosecler Costa</div>
      </div>
    </div>
  );
}