import { Logo } from './Logo';
import { IronButton } from './IronButton';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1671959573263-2eef90f85ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlhdGhsb24lMjBzd2ltbWluZyUyMHJ1bm5pbmclMjBjeWNsaW5nJTIwc3BvcnR8ZW58MXx8fHwxNzU2NDA0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1920"
          className="w-full h-full object-cover"
          aria-label="Vídeo de triatlo da Iron Mãe"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1671959573263-2eef90f85ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlhdGhsb24lMjBzd2ltbWluZyUyMHJ1bm5pbmclMjBjeWNsaW5nJTIwc3BvcnR8ZW58MXx8fHwxNzU2NDA0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Iron Mãe em competição de triatlo"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
        <div className="absolute inset-0 bg-black/20 bg-[rgba(0,0,0,0.73)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
        <div className="mb-8 opacity-90">
          <Logo variant="light" className="justify-center mb-4" />
        </div>
        
        <div className="space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
            30 anos de triatlo.<br />
            12 Ironmans.<br />
            Uma mãe.<br />
            <span className="text-primary-iron">Uma história de superação.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Conheça a trajetória de Rosecler Costa, a Iron Mãe.
          </p>
          
          <div className="pt-4 md:pt-8">
            <IronButton
              variant="whatsapp"
              size="lg"
              href="https://wa.me/5500000000000?text=Olá%20Iron%20Mãe!%20Vim%20do%20site."
              className="animate-fade-in-up"
            >
              Fale comigo no WhatsApp
            </IronButton>
          </div>
        </div>
      </div>
    </section>
  );
}