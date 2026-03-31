import { Badge } from './ui/badge';
import { Medal, Award, Trophy } from 'lucide-react';

interface TimelineItemProps {
  ano: string;
  prova: string;
  conquista: string;
  tag?: string;
  posicao?: 'left' | 'right';
  index: number;
}

const iconMap = {
  'Mundial': Trophy,
  'Ultraman': Award,
  'Pódio': Medal,
  default: Medal
};

export function TimelineItem({ ano, prova, conquista, tag, posicao = 'left', index }: TimelineItemProps) {
  const Icon = tag ? iconMap[tag as keyof typeof iconMap] || iconMap.default : iconMap.default;
  const isSpecial = tag === 'Mundial' || tag === 'Ultraman';
  
  return (
    <div className={`timeline-item ${posicao === 'right' ? 'md:flex-row-reverse' : ''} ${isSpecial ? 'special' : ''}`}>
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center w-full">
        {/* Content Card */}
        <div className={`w-5/12 ${posicao === 'right' ? 'text-left' : 'text-right'}`}>
          <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
            isSpecial ? 'ring-2 ring-primary-iron/20 scale-105' : 'hover:scale-102'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`${posicao === 'right' ? 'order-1' : 'order-2'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                  isSpecial ? 'bg-primary-iron text-white' : 'bg-card-iron text-primary-iron'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              
              <div className={`flex-1 ${posicao === 'right' ? 'order-2' : 'order-1'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-text">{prova}</h3>
                  {tag && (
                    <Badge 
                      variant={isSpecial ? "default" : "secondary"} 
                      className={isSpecial ? "bg-primary-iron text-white" : ""}
                    >
                      {tag}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-iron text-sm leading-relaxed">{conquista}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Line and Year Badge */}
        <div className="w-2/12 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center z-10 shadow-lg ${
            isSpecial ? 'bg-primary-iron text-white scale-110' : 'bg-white text-primary-iron border-2 border-primary-iron'
          }`}>
            <span className="text-lg font-black">{ano.slice(-2)}</span>
          </div>
          {index > 0 && (
            <div className="w-1 h-16 bg-gradient-to-b from-primary-iron/50 to-primary-iron/20 -mt-2" />
          )}
        </div>

        <div className="w-5/12" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-white rounded-2xl p-4 shadow-lg border border-gray-100 mb-6">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
            isSpecial ? 'bg-primary-iron text-white' : 'bg-card-iron text-primary-iron'
          }`}>
            <Icon className="w-5 h-5" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary-iron font-black text-lg">{ano}</span>
              {tag && (
                <Badge 
                  variant={isSpecial ? "default" : "secondary"}
                  className={isSpecial ? "bg-primary-iron text-white" : ""}
                >
                  {tag}
                </Badge>
              )}
            </div>
            <h3 className="font-bold text-text mb-1">{prova}</h3>
            <p className="text-muted-iron text-sm leading-relaxed">{conquista}</p>
          </div>
        </div>
      </div>
    </div>
  );
}