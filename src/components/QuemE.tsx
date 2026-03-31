import { IronButton } from './IronButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function QuemE() {
  return (
    <section id="quem-e" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image - Mobile first, then left column on desktop */}
          <div className="md:col-span-5">
            <div className="relative">
              <ImageWithFallback
                src="https://s2-ge.glbimg.com/ZHir-ZniQ0gqbs00diY_iXZ8zUw=/0x20:639x597/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2017/C/g/YnFZlPSPS8A3kRCt9Y8Q/ironmae.jpg"

                alt="Rosecler Costa - Iron Mãe segurando troféu do Ironman"
                className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-iron rounded-2xl flex items-center justify-center text-white shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-black">30</div>
                  <div className="text-xs font-medium">ANOS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right column on desktop */}
          <div className="md:col-span-7">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-iron/10 text-primary-iron rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Quem é a Iron Mãe
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-text">
                  Rosecler Costa
                </h2>
              </div>

              <div className="space-y-4 text-text/80">
                <p className="text-lg leading-relaxed">
                  Rosecler Costa é a Iron Mãe: atleta com 30 anos de triatlo, 12 participações 
                  em Ironman e referência em resiliência. Sua missão é inspirar mães, atletas 
                  e mulheres a superarem limites, dentro e fora das provas.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Combinando a força da maternidade com a disciplina do esporte de alto rendimento, 
                  ela prova que não existem limites quando se tem determinação e propósito.
                </p>
              </div>

              {/* Callout / Quote */}
              <div className="bg-card-iron rounded-2xl p-6 md:p-8 border-l-4 border-primary-iron">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-iron rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-primary-iron mb-2">
                      Meu Propósito
                    </p>
                    <blockquote className="text-xl font-semibold text-text leading-tight">
                      "Inspirar mães, atletas e mulheres a superarem limites."
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <IronButton
                  variant="ghost"
                  href="#conquistas"
                  className="group"
                >
                  Ver Conquistas
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </IronButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}