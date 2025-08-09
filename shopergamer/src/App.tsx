import { useState, useEffect, useRef, memo, lazy, Suspense, type RefObject } from 'react';
import profileData from './data';
import Icon, { type IconName } from './compo/icon';

const VideoLoader = lazy(() => import('./compo/video'));
const ParticleBackground = lazy(() => import('./compo/background'));
const ArticleDropdownLazy = lazy(() => import('./compo/dropdown'));
const ProjectCardLazy = lazy(() => import('./compo/projectcard'));

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.01 }
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const SocialLinkCard = memo(({ platform, url, icon }: { platform: string, url: string, icon: IconName }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card p-4 flex items-center transition-all duration-300 group neon-border rounded-lg hover:bg-gradient-to-r from-cyan-900/30 to-purple-900/30"
      aria-label={`Visit ${platform}`}
    >
      <div className="p-3 rounded-lg bg-black/30 group-hover:bg-cyan-900/50 transition-all">
        <Icon name={icon} />
      </div>
      <span className="ml-4 font-medium text-lg text-neon-blue group-hover:text-cyan-200 transition-colors">
        {platform}
      </span>
      <span className="ml-auto text-cyan-300 blinking group-hover:animate-pulse">▸</span>
    </a>
  );
});

const TechLinkBio = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const backgroundVisible = useIntersectionObserver(backgroundRef);
  const socialLinksVisible = useIntersectionObserver(socialLinksRef);
  const articlesVisible = useIntersectionObserver(articlesRef);
  const projectsVisible = useIntersectionObserver(projectsRef);
  const videoVisible = useIntersectionObserver(videoRef);
  const terminalVisible = useIntersectionObserver(terminalRef);

  return (
    <div ref={backgroundRef} className="min-h-screen text-gray-100 py-12 px-4 grid-pattern relative overflow-hidden">
      {backgroundVisible && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}
      <div className="scanlines"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-20"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16 header-container mt-8 animate-fade-in">
          <div className="flex justify-center mb-8 floating">
            <div className="avatar-frame group w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-500/20 shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,255,255,0.9)]">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={192}
                height={192}
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 glow-text tracking-tight">
            {profileData.name}
          </h1>
          <p className="text-xl text-cyan-300 mb-5 font-mono">
            <span className="typing-animation">{profileData.title}</span>
          </p>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            {profileData.bio} <br />
            {profileData.bio2}
          </p>
        </header>

        <section ref={socialLinksRef} className="mb-16 animate-slide-in-left">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="inline-block mr-3 text-cyan-300">//</span>
            <span className="glow-text">ช่องทางการติดต่อ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profileData.links.map((link, index) => (
              <div
                key={link.id}
                className="transition-all duration-700"
                style={{
                  opacity: socialLinksVisible ? 1 : 0,
                  transform: socialLinksVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <SocialLinkCard
                  platform={link.platform}
                  url={link.url}
                  icon={link.icon as IconName}
                />
              </div>
            ))}
          </div>
        </section>

        <section ref={articlesRef} className="mb-16 animate-slide-in-right">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="inline-block mr-3 text-cyan-300">{"</>"}</span>
            <span className="glow-text">บทความและความรู้</span>
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {articlesVisible ? (
              <Suspense fallback={<div className="text-center py-6 text-cyan-300">กำลังโหลดบทความ...</div>}>
                {profileData.articles.map((category, index) => (
                  <div
                    key={category.id}
                    className="transition-all duration-700"
                    style={{
                      opacity: 1,
                      transform: 'translateY(0)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <ArticleDropdownLazy
                      title={category.title}
                      items={category.items}
                    />
                  </div>
                ))}
              </Suspense>
            ) : (
              <div className="text-center py-6 text-cyan-300">บทความจะแสดงเมื่อเลื่อนมาถึงส่วนนี้</div>
            )}
          </div>
        </section>

        <section className="animate-fade-in">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="inline-block mr-3 text-cyan-300">{"{}"}</span>
            <span className="glow-text">Show Case</span>
          </h2>

          <div ref={videoRef}>
            {videoVisible ? (
              <Suspense fallback={<div className="text-center py-10 text-cyan-300">กำลังโหลดวิดีโอ...</div>}>
                <VideoLoader />
              </Suspense>
            ) : (
              <div className="aspect-video bg-gray-900/50 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <div className="text-cyan-300 text-lg">วิดีโอจะแสดงเมื่อเลื่อนมาถึงส่วนนี้</div>
              </div>
            )}
          </div>

          <div ref={projectsRef} className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsVisible ? (
              <Suspense fallback={
                <div className="text-center col-span-3 py-10 text-cyan-300">
                  กำลังโหลดโปรเจกต์...
                </div>
              }>
                {profileData.projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="transition-all duration-700"
                    style={{
                      opacity: 1,
                      transform: 'translateY(0)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <ProjectCardLazy
                      title={project.title}
                      description={project.description}
                      tech={project.tech}
                      image={project.image}
                      url={project.url}
                    />
                  </div>
                ))}
              </Suspense>
            ) : (
              <div className="text-center col-span-3 py-10 text-cyan-300">
                โปรเจกต์จะแสดงเมื่อเลื่อนมาถึงส่วนนี้
              </div>
            )}
          </div>
        </section>

        <section ref={terminalRef} className="mt-16 neon-terminal animate-fade-in" style={{ opacity: terminalVisible ? 1 : 0 }}>
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-neon-blue font-mono">Shoper Gamer</span>
          </div>
        </section>

        <footer className="footer text-center text-gray-500 text-sm mt-16 animate-fade-in">
          <p>© {new Date().getFullYear()} {profileData.name}. สงวนลิขสิทธิ์</p>
          <div className="mt-2 flex justify-center space-x-2">
            <span className="blinking">_</span>
            <span>CONNECTED</span>
            <span className="blinking">_</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TechLinkBio;