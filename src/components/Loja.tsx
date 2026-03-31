import { IronButton } from './IronButton';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, Clock } from 'lucide-react';

export function Loja() {
  return (
    <section id="loja" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-iron/10 text-primary-iron rounded-full text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            Loja Oficial
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text mb-4">
            Produtos Iron Mãe
          </h2>
          <p className="text-lg text-muted-iron max-w-2xl mx-auto">
            Carregue a força e determinação da Iron Mãe com nossos produtos oficiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Produto Principal - Boné */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1611002651843-fa360435ba0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNzcG9ydCUyMGNhcCUyMGhhdCUyMHRyaWF0aGxvbiUyMG1lcmNoYW5kaXNlfGVufDF8fHx8MTc1NjQwNDU0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Boné Oficial Iron Mãe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-iron text-white px-3 py-1 rounded-full text-sm font-medium">
                    Oficial
                  </span>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-text mb-3">
                  Boné Oficial Iron Mãe
                </h3>
                <p className="text-muted-iron mb-6 leading-relaxed">
                  O símbolo oficial da jornada Iron Mãe. Feito com materiais de alta qualidade, 
                  perfeito para treinos e competições.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <IronButton
                    variant="primary"
                    size="lg"
                    href="https://hotmart.com/product/boné-ironmae"
                    className="flex-1"
                  >
                    Compre agora na Hotmart
                  </IronButton>
                  <IronButton
                    variant="whatsapp"
                    size="lg"
                    href="https://wa.me/5500000000000?text=Olá!%20Tenho%20interesse%20no%20boné%20oficial%20Iron%20Mãe."
                  >
                    Dúvidas
                  </IronButton>
                </div>
              </div>
            </div>
          </div>

          {/* Produtos Futuros */}
          <div className="space-y-6">
            {/* Camiseta Performance */}
            <div className="bg-card-iron rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text">Camiseta Performance</h4>
                  <span className="text-sm text-primary-iron font-medium">Em breve</span>
                </div>
              </div>
              <p className="text-sm text-muted-iron">
                Camiseta técnica para alta performance em treinos e competições.
              </p>
            </div>

            {/* Garrafa Térmica */}
            <div className="bg-card-iron rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text">Garrafa Térmica</h4>
                  <span className="text-sm text-primary-iron font-medium">Em breve</span>
                </div>
              </div>
              <p className="text-sm text-muted-iron">
                Garrafa térmica oficial com tecnologia de isolamento avançada.
              </p>
            </div>

            {/* Kit Completo */}
            <div className="bg-card-iron rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h4 className="font-bold text-text">Kit Completo</h4>
                  <span className="text-sm text-primary-iron font-medium">Em breve</span>
                </div>
              </div>
              <p className="text-sm text-muted-iron">
                Kit completo com todos os produtos Iron Mãe com desconto especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}