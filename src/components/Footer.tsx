import { Logo } from './Logo';
import { MessageCircle, Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

export function Footer() {


  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/ironmae',
      icon: Instagram
    },
    {
      name: 'Facebook', 
      href: 'https://facebook.com/ironmae',
      icon: Facebook
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@ironmae',
      icon: Youtube
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/5500000000000?text=Olá%20Iron%20Mãe!%20Vim%20do%20site.',
      icon: WhatsAppIcon

    }
  ];

  const navLinks = [
    { href: '#quem-e', label: 'Quem é' },
    { href: '#conquistas', label: 'Conquistas' },
    { href: '#loja', label: 'Loja' }
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">

          {/* Logo e Descrição */}
          <div className="space-y-6">
            <Logo variant="light" />
            
            <p className="text-white/80 leading-relaxed max-w-md">
              30 anos de triatlo, 12 Ironmans concluídos e uma jornada de superação 
              que inspira mães, atletas e mulheres a vencerem seus limites.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-primary-iron text-white rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contato</h4>
            <div className="space-y-4">
              <a
                href={socialLinks.find(l => l.name === 'WhatsApp')?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center group-hover:bg-whatsapp-700 transition-colors duration-300 shadow-lg shadow-whatsapp/20">
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                </div>

                <span>WhatsApp</span>
              </a>


              <a
                href="mailto:contato@ironmae.com.br"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary-iron transition-colors duration-200">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span>contato@ironmae.com.br</span>
              </a>
            </div>
          </div>
        </div>


        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Iron Mãe - Rosecler Costa. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com 💚 para inspirar e superar limites.
          </p>
        </div>
      </div>
    </footer>
  );
}