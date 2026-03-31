'use client';

import { useEffect, useRef, useState } from 'react';
import { Newspaper, Tv, Youtube, ExternalLink, Play } from 'lucide-react';
import { Logo } from './Logo';


// ─── Types ────────────────────────────────────────────────────────────────────

type MediaType = 'article' | 'youtube' | 'globoplay' | 'podcast';

interface MediaItem {
  title: string;
  description?: string;
  url: string;
  type: MediaType;
  /** Thumbnail image URL (can be OG image, YT thumb, etc.) */
  thumb: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const materias: MediaItem[] = [
  {
    title: 'Rosecler Costa conquista inédito Ironman de Mar del Plata',
    description: 'Ge.Globo — Triátlo Santos e Região',
    url: 'https://ge.globo.com/sp/santos-e-regiao/triatlo/noticia/rosecler-costa-conquista-inedito-ironman-de-mar-del-plata.ghtml',
    type: 'article',
    thumb: 'https://s2.glbimg.com/MIfXKX0l8qWQJf7Sl_bJnJ8_8Cs=/0x0:0x0/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/m/pKxMjEThGSlhtmHZ9Ffw/whatsapp-image-2023-03-20-at-16.55.40.jpeg',
  },
  {
    title: 'Iron Mãe — Juicy Santos',
    description: 'Juicy Santos — Esporte & Saúde',
    url: 'https://www.juicysantos.com.br/novo-na-regiao/vida-013/esporte-e-saude/esportes-santos/ironmae/',
    type: 'article',
    thumb: 'https://www.juicysantos.com.br/wp-content/uploads/2017/03/ironmae-juicy.jpg',
  },
  {
    title: 'Santista Rosecler Costa brilha no Ironman',
    description: 'Prefeitura de Santos',
    url: 'https://www.santos.sp.gov.br/?q=noticia/santista-rosecler-costa-brilha-no-ironman',
    type: 'article',
    thumb: 'https://www.santos.sp.gov.br/sites/default/files/styles/noticia_destaque/public/field/image/rosecler_0.jpg',
  },
  {
    title: 'Pain Cave — Rosecler Costa',
    description: 'Trisport Mag',
    url: 'https://www.trisportmag.com.br/pain-cave-rosecler-costa/',
    type: 'article',
    thumb: 'https://www.trisportmag.com.br/wp-content/uploads/2020/01/pain-cave-rosecler-costa.jpg',
  },
  {
    title: 'Inspiração: Iron Mãe é exemplo de força e perseverança',
    description: 'Webrun',
    url: 'https://webrun.com.br/inspiracao-ironmae-e-exemplo-de-forca-e-perseveranca/',
    type: 'article',
    thumb: 'https://webrun.com.br/wp-content/uploads/2018/10/ironmae-webrun.jpg',
  },
  {
    title: 'Filhos, trabalho e maratona: conheça Rose, a Iron Mãe',
    description: 'Diário do Litoral',
    url: 'https://www.diariodolitoral.com.br/esportes/filhos-trabalho-e-maratona-conheca-rose-a-iron-mae/99135/',
    type: 'article',
    thumb: 'https://www.diariodolitoral.com.br/imagine/2017/04/2017-04-17_roseclercosta.jpg',
  },
  {
    title: 'Rosecler Costa é destaque no Ironman 70.3 e mira o grande desafio de 2017',
    description: 'Ge.Globo — Santos e Região',
    url: 'https://ge.globo.com/sp/santos-e-regiao/noticia/2017/04/rosecler-costa-e-destaque-no-ironman-703-e-mira-o-grande-desafio-de-2017.html',
    type: 'article',
    thumb: 'https://s2.glbimg.com/VJSwKdp8KbQpV4KDHQ3e9xMFZhE=/0x0:0x0/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/4/J/e7S3RcSEiE7tSHAhkf0A/rosecler.jpg',
  },
  {
    title: 'Os próximos desafios de Rosecler Costa, a Iron Mãe',
    description: 'Juicy Santos',
    url: 'https://www.juicysantos.com.br/novo-na-regiao/vida-013/esporte-e-saude/esportes-santos/os-proximos-desafios-de-rosecler-costa-a-ironmae/',
    type: 'article',
    thumb: 'https://www.juicysantos.com.br/wp-content/uploads/2017/04/rosecler-juicy-santos.jpg',
  },
  {
    title: 'Santista triatleta conhecida como a Iron Mãe participa do Ultraman Florida',
    description: 'Santa Portal',
    url: 'https://santaportal.com.br/esporte/santista-triatleta-conhecida-como-a-ironmae-participa-do-ultraman-florida',
    type: 'article',
    thumb: 'https://santaportal.com.br/wp-content/uploads/2019/01/ironmae-ultraman.jpg',
  },
  {
    title: 'Entrevista: Rosecler Costa, a campeã do Ironman Fortaleza',
    description: 'Trisport Mag',
    url: 'https://www.trisportmag.com.br/entrevista-rosecler-costa-a-campea-do-ironman-fortaleza/',
    type: 'article',
    thumb: 'https://www.trisportmag.com.br/wp-content/uploads/2016/06/rosecler-fortaleza.jpg',
  },
  {
    title: 'Iron Mãe: mulheres se animam para prática do triatlo após festival em Santos',
    description: 'Prefeitura de Santos',
    url: 'https://www.santos.sp.gov.br/?q=noticia/ironmae-mulheres-se-animam-para-pratica-do-triatlo-apos-festival-em-santos',
    type: 'article',
    thumb: 'https://www.santos.sp.gov.br/sites/default/files/styles/noticia_destaque/public/field/image/festivals.jpg',
  },
  {
    title: 'Iron Mãe é uma das brasileiras classificadas para Kona',
    description: 'Webrun',
    url: 'https://webrun.com.br/ironmae-e-uma-das-brasileiras-classificadas-para-kona/',
    type: 'article',
    thumb: 'https://webrun.com.br/wp-content/uploads/2022/03/ironmae-kona.jpg',
  },
  {
    title: 'Rosecler Costa, a Iron Mãe, se garante na maior prova de ciclismo do mundo',
    description: 'Ge.Globo — Corpo em Ação',
    url: 'https://ge.globo.com/sp/santos-e-regiao/corpo-em-acao/noticia/rosecler-costa-a-ironmae-se-garante-na-maior-prova-de-ciclismo-do-mundo.ghtml',
    type: 'article',
    thumb: 'https://s2.glbimg.com/DX3rJ1_55GMEiDBjHhyXmhfCgaM=/984x0/smart/filters:no_upscale()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/c/C/IVXGdVRgQI6xYE8bqBJA/rosecler-ciclismo.jpg',
  },
  {
    title: 'Atleta da FUPES Rosecler Costa vence Ironman de Fortaleza',
    description: 'Prefeitura de Santos',
    url: 'https://www.santos.sp.gov.br/?q=noticia/atleta-da-fupes-rosecler-costa-vence-ironman-de-fortaleza',
    type: 'article',
    thumb: 'https://www.santos.sp.gov.br/sites/default/files/styles/noticia_destaque/public/field/image/fupes-fortaleza.jpg',
  },
  {
    title: 'Ultraciclista Rosecler Costa conquista a prata em desafio de 1500 km nos EUA',
    description: 'Ge.Globo — Santos e Região',
    url: 'https://ge.globo.com/sp/santos-e-regiao/noticia/ultraciclista-rosecler-costa-conquista-a-prata-em-desafio-de-1500-km-nos-estados-unidos.ghtml',
    type: 'article',
    thumb: 'https://s2.glbimg.com/rHnbPdkBz6tg4QCkVBLF1FZmxU8=/984x0/smart/filters:no_upscale()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/U/L/gNS8aERpRA6UxZkVb7UQ/ultraciclista.jpg',
  },
  {
    title: 'DP World Santos patrocina única brasileira no maior desafio de ciclismo',
    description: 'DP World',
    url: 'https://www.dpworld.com/pt-br/brazil/news/latest-news/dp-world-santos-sponsors-the-only-brazilian-to-participate-in-one-of-the-biggest-cycling',
    type: 'article',
    thumb: 'https://www.dpworld.com/content/dam/dp-world/brazil/news/rosecler-costa.jpg',
  },
  {
    title: 'Iron Mãe Manifesto — Mokoto',
    description: 'Mokoto Creative',
    url: 'https://mokoto.com.br/projetos-concluidos/iron-mae-manifesto/',
    type: 'article',
    thumb: 'https://mokoto.com.br/wp-content/uploads/2020/iron-mae-manifesto.jpg',
  },
  {
    title: 'Santista Iron Mãe bate recorde pessoal em prova no Havaí',
    description: 'A Tribuna',
    url: 'https://www.atribuna.com.br/esportes/esporte-regional/santista-ironm-e-bate-recorde-pessoal-em-prova-no-havai-1.269709',
    type: 'article',
    thumb: 'https://www.atribuna.com.br/image/contentid/policy:1.269709:1632148400/ironmae-havai.jpg',
  },
  {
    title: 'Iron Mãe prova que nunca é tarde para seguir seus sonhos no esporte',
    description: 'AT Revista — A Tribuna',
    url: 'https://www.atribuna.com.br/galeria/at-revista/ironm-e-prova-que-nunca-e-tarde-para-seguir-seus-sonhos-no-esporte-1.332616',
    type: 'article',
    thumb: 'https://www.atribuna.com.br/image/contentid/policy:1.332616:1632148400/ironmae-sonhos.jpg',
  },
];

const globoplay: MediaItem[] = [
  {
    title: 'Iron Mãe no Globo Play [mais recente]',
    description: 'Globo Play — Programa especial',
    url: 'https://globoplay.globo.com/v/14004099/',
    type: 'globoplay',
    thumb: 'https://s04.video.glbimg.com/x720/14004099.jpg',
  },
  {
    title: 'Iron Mãe — Globo Play',
    description: 'Globo Play',
    url: 'https://globoplay.globo.com/v/8974177/',
    type: 'globoplay',
    thumb: 'https://s04.video.glbimg.com/x720/8974177.jpg',
  },
  {
    title: 'Iron Mãe — Globo Play',
    description: 'Globo Play',
    url: 'https://globoplay.globo.com/v/7729536/',
    type: 'globoplay',
    thumb: 'https://s04.video.glbimg.com/x720/7729536.jpg',
  },
  {
    title: 'Iron Mãe — Globo Play',
    description: 'Globo Play',
    url: 'https://globoplay.globo.com/v/4089144/',
    type: 'globoplay',
    thumb: 'https://s04.video.glbimg.com/x720/4089144.jpg',
  },
];

const youtubeAndPodcast: MediaItem[] = [
  {
    title: 'A Ironmãe detona em Kona — entrevista com Rosecler Costa',
    description: 'Canal YouTube',
    url: 'https://www.youtube.com/watch?v=na_yOwSshSY',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/na_yOwSshSY/hqdefault.jpg',
  },
  {
    title: 'Encontrando tempo pra ser feliz com Rosecler Costa (IronMãe)',
    description: 'Liderança Inovadora Insights',
    url: 'https://www.youtube.com/watch?app=desktop&v=NQlY8JnLNAM',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/NQlY8JnLNAM/hqdefault.jpg',
  },
  {
    title: 'Rosecler Costa, a IronMãe, fala sobre conciliar esporte de alto rendimento e vida pessoal',
    description: 'YouTube',
    url: 'https://www.youtube.com/watch?v=TY0TsIQOo7A',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/TY0TsIQOo7A/hqdefault.jpg',
  },
  {
    title: 'Rosecler Costa vence no feminino o Ironman Fortaleza 2015',
    description: 'YouTube',
    url: 'https://www.youtube.com/watch?v=Fmo2tITTNsI',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/Fmo2tITTNsI/hqdefault.jpg',
  },
  {
    title: 'IronMãe — UltraMan Brasil 2017 Ceepo (Viper Triathlon e Mamba Road) — Labici',
    description: 'YouTube · Labici',
    url: 'https://www.youtube.com/watch?v=mhoJ5pMO_jU',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/mhoJ5pMO_jU/hqdefault.jpg',
  },
  {
    title: 'EP# 09 — The Podcast — Convidados: Bruno Chinarelli e Rosecler Costa',
    description: 'Santa Cecília FM · Santa Portal',
    url: 'https://www.youtube.com/watch?v=U2lPAMOlmd8',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/U2lPAMOlmd8/hqdefault.jpg',
  },
  {
    title: 'PGM37 — Gente Que Corre — com Rosecler Costa',
    description: 'YouTube · Gente Que Corre',
    url: 'https://www.youtube.com/watch?v=Tmj6YJjSD8U',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/Tmj6YJjSD8U/hqdefault.jpg',
  },
  {
    title: 'O segredo por trás da IronMãe: de mãe de dois a bi-campeã do Ironman',
    description: 'Juliana Goes Podcast',
    url: 'https://www.youtube.com/watch?v=kWNpM-czVBE',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/kWNpM-czVBE/hqdefault.jpg',
  },
  {
    title: 'Arena Esportiva #61 — Convidada: Rosecler Costa (IronMãe)',
    description: 'YouTube · Arena Esportiva',
    url: 'https://www.youtube.com/watch?v=qwBYW5HqUtQ',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/qwBYW5HqUtQ/hqdefault.jpg',
  },
  {
    title: 'Mulheres e os infelizes estereótipos frequentes — Rosecler Costa no Juicy Santos',
    description: 'YouTube · Juicy Santos',
    url: 'https://www.youtube.com/watch?v=V-aibxXcbeI',
    type: 'youtube',
    thumb: 'https://img.youtube.com/vi/V-aibxXcbeI/hqdefault.jpg',
  },
  {
    title: 'Podcast Endorfina Ep. 82 — Rosecler Costa, a Iron Mãe',
    description: 'Ativo.com · Endorfina Podcast',
    url: 'https://www.ativo.com/expert/rosecler-costa-a-ironmae-episodio-82-do-endorfina-podcast/',
    type: 'podcast',
    thumb: 'https://img.youtube.com/vi/na_yOwSshSY/hqdefault.jpg',
  },
  {
    title: 'Endorfina Podcast Ep. 82 — Rosecler Costa',
    description: 'Endorfina BR',
    url: 'https://endorfinabr.com/podcast/82-rosecler-costa/',
    type: 'podcast',
    thumb: 'https://img.youtube.com/vi/na_yOwSshSY/hqdefault.jpg',
  },
];

// ─── Badge component ──────────────────────────────────────────────────────────

function TypeBadge({ type }: { type: MediaType }) {
  if (type === 'youtube') {
    return (
      <span className="media-badge media-badge--youtube">
        <Youtube className="w-3 h-3" />
        YouTube
      </span>
    );
  }
  if (type === 'globoplay') {
    return (
      <span className="media-badge media-badge--globo">
        <Play className="w-3 h-3" />
        TV Globo Play
      </span>
    );
  }
  if (type === 'podcast') {
    return (
      <span className="media-badge media-badge--podcast">
        🎙️ Podcast
      </span>
    );
  }
  return (
    <span className="media-badge media-badge--article">
      <Newspaper className="w-3 h-3" />
      Matéria
    </span>
  );
}

// ─── Single media card ────────────────────────────────────────────────────────

function MediaCard({ item, index }: { item: MediaItem; index: number }) {
  const isVideo = item.type === 'youtube' || item.type === 'globoplay';
  const [phase, setPhase] = useState<'primary' | 'screenshot' | 'fallback'>('primary');

  // Build the screenshot-service URL (used when the primary thumb fails).
  // thum.io expects the target URL appended raw (not percent-encoded) to the path.
  const screenshotSrc = `https://image.thum.io/get/width/600/crop/400/${item.url}`;

  const currentSrc =
    phase === 'primary'
      ? item.thumb
      : phase === 'screenshot'
      ? screenshotSrc
      : null;

  const handleError = () => {
    if (phase === 'primary') setPhase('screenshot');
    else setPhase('fallback');
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="media-card group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Thumbnail - Hidden for articles */}
      {item.type !== 'article' && (
        <div className="media-card__thumb">
          {currentSrc ? (
            <img
              src={currentSrc}
              alt={item.title}
              loading="lazy"
              onError={handleError}
              className="media-card__img"
            />
          ) : (
            <div className="media-card__thumb-fallback bg-dark flex flex-col items-center justify-center p-6 gap-3">
              <Logo variant="light" className="scale-75" />
            </div>
          )}

          {/* Play overlay for videos */}
          {isVideo && (
            <div className="media-card__play-overlay">
              <div className="media-card__play-btn">
                <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
              </div>
            </div>
          )}

          <TypeBadge type={item.type} />
        </div>
      )}

      {/* Body */}
      <div className="media-card__body">
        <p className="media-card__source">{item.description}</p>
        <h4 className="media-card__title">{item.title}</h4>
        <span className="media-card__link">
          Ver publicação <ExternalLink className="w-3 h-3 inline-block ml-1" />
        </span>
      </div>
    </a>
  );
}


// ─── Category row ─────────────────────────────────────────────────────────────

interface CategoryProps {
  icon: React.ReactNode;
  label: string;
  items: MediaItem[];
  accent: string;
}

function CategorySection({ icon, label, items, accent }: CategoryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`category-section transform transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Category header */}
      <div className="category-header" style={{ '--accent': accent } as React.CSSProperties}>
        <span className="category-header__icon">{icon}</span>
        <h3 className="category-header__label">{label}</h3>
        <span className="category-header__count">{items.length} {items.length === 1 ? 'publicação' : 'publicações'}</span>
        <div className="category-header__line" />
      </div>

      {/* Cards grid */}
      <div className="media-grid">
        {items.map((item, i) => (
          <MediaCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function Timeline() {
  return (
    <section id="conquistas" className="py-16 md:py-24 bg-gradient-to-b from-white to-card-iron/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-iron/10 text-primary-iron rounded-full text-sm font-medium mb-4">
            📰 Mídia & Publicações
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-text mb-4">
            Presença na Mídia
          </h2>
          <p className="text-lg text-muted-iron max-w-2xl mx-auto">
            Matérias, entrevistas e aparições que contam a história da Iron Mãe ao longo dos anos.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          <CategorySection
            icon={<Tv className="w-5 h-5" />}
            label="TV Globo Play"
            items={globoplay}
            accent="#e40000"
          />
          <CategorySection
            icon={<Youtube className="w-5 h-5" />}
            label="Podcast & Vídeos YouTube"
            items={youtubeAndPodcast}
            accent="#ff0000"
          />
          <CategorySection
            icon={<Newspaper className="w-5 h-5" />}
            label="Matérias — Portais de Notícias"
            items={materias}
            accent="#f04a1d"
          />

        </div>
      </div>
    </section>
  );
}