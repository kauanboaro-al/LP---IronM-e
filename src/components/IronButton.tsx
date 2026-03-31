import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

interface IronButtonProps {

  variant?: 'primary' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function IronButton({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  loading = false
}: IronButtonProps) {
  const baseClasses = 'font-medium transition-all duration-200 ease-out flex items-center gap-2 justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-iron hover:bg-primary-iron-700 text-white shadow-lg hover:shadow-xl',
    whatsapp: 'bg-whatsapp hover:bg-whatsapp-700 text-white shadow-lg hover:shadow-xl',
    ghost: 'border border-border hover:bg-card-iron text-text'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg min-h-[36px]',
    md: 'px-5 py-3 md:px-6 md:py-4 rounded-xl min-h-[44px]',
    lg: 'px-6 py-4 md:px-8 md:py-5 rounded-xl min-h-[52px]'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const content = (
    <>
      {variant === 'whatsapp' && <WhatsAppIcon className="w-5 h-5 fill-white" />}

      {loading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
      {href && <ExternalLink className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {content}
    </Button>
  );
}