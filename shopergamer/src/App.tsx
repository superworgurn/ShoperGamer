import { useState, useEffect, useRef, useCallback, memo,lazy, Suspense  } from 'react';
import { FaTiktok, FaBluesky } from "react-icons/fa6";
import { FaPinterest,FaPencilAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const ArticleDropdownLazy = lazy(() => import('./compo/dropdown'));
const ProjectCardLazy = lazy(() => import('./compo/projectcard'));

const profileData = {
  name: "Shoper Gamer",
  title: "Blogger | Youtuber",
  bio: "- Daily learning shapes a brighter tomorrow -",
  bio2:"- การเรียนรู้ทุกวันสร้างอนาคตที่สดใสยิ่งขึ้น -",
  avatar: "logo.webp",
links: [
  { id: 1, platform: "Shoper Gamer", url: "https://github.com/ShoperGamer", icon: "github" },
  { id: 2, platform: "Shoper Gamer", url: "https://www.tiktok.com/@whitestar1230", icon: "tiktok" },
  { id: 3, platform: "Shoper Gamer", url: "https://bsky.app/profile/shopergamer.bsky.social", icon: "bluesky" },
  { id: 4, platform: "Shoper Gamer", url: "https://www.blockdit.com/shoper.gamer", icon: "blockdit" },
  { id: 5, platform: "Shoper Gamer", url: "https://www.youtube.com/@ShoperGamer", icon: "youtube" },
  { id: 6, platform: "Shoper Gamer (สำรอง)", url: "https://www.youtube.com/channel/UCv2-ttx2XPGMGCzb3sV2lzQ", icon: "youtube" },
  { id: 7, platform: "Shoper Gamer", url: "https://pin.it/1WDGCrD6U", icon: "pinterest" },
  { id: 8, platform: "Shoper Team", url: "https://linkbio.co/shoperteam", icon: "website" },
],
  articles: [
    {
      id: 1,
      title: "Website",
      items: [
        {
          id: 1,
          title: "Website By Shoper Gamer",
          content: "https://www.blockdit.com/series/66c03589a827d0ecf15c9898" ,
        },
        {
          id: 2,
          title: "SEO By Shoper Gamer",
          content: "https://www.blockdit.com/series/66c033c7a827d0ecf15ac523"
        },
        {
          id: 3,
          title: "Blog By Shoper Gamer",
          content: "https://www.blockdit.com/series/6895cb40895568f32c21b1f2"
        },
      ]
    },
    {
      id: 2,
      title: "Git",
      items: [
        {
          id: 1,
          title: "Git By Shoper Gamer",
          content: "https://www.blockdit.com/series/683c34a368f194a318883d78"
        },
        {
          id: 2,
          title: "Github By ShoperGamer",
          content: "https://www.blockdit.com/series/683936ceea80c9db5f6b7ca8"
        },
        {
          id: 3,
          title: "Github Desktop By Shoper Gamer",
          content: "https://www.blockdit.com/series/68457f52060c7ef1aa2e3dab"
        },
      ]
    },
    {
      id: 3,
      title: "Network",
      items: [
        {
          id: 1,
          title: "Network By Shoper Gamer",
          content: "https://www.blockdit.com/series/669d21e5d1d5d2eeb7f83da3"
        },
        {
          id: 2,
          title: "Protocol By Shoper Gamer",
          content: "https://www.blockdit.com/series/673f3e7dc6fce69bc2d99327"
        },
        {
          id: 3,
          title: "Cloud Computing By Shoper Gamer",
          content: "https://www.blockdit.com/series/66e7e7db25ec39eab3dd3e8a"
        },
      ]
    },
    {
      id: 4,
      title: "Cyber Security",
      items: [
        {
          id: 1,
          title: "Cyber Attack By Shoper Gamer",
          content: "https://www.blockdit.com/series/66d147c65325a105eacf9e81"
        },
        {
          id: 2,
          title: "Cyber Security By Shoper Gamer",
          content: "https://www.blockdit.com/series/66e5415db63560d1a7684fd8"
        },
        {
          id: 3,
          title: "Virus By Shoper Gamer",
          content: "https://www.blockdit.com/series/66ae1e711ba3d8894d86bd19"
        },
      ]
    },

    {
      id: 5,
      title: "Technology",
      items: [
        {
          id: 1,
          title: "อุปกรณ์ Computer By Shoper Gamer",
          content: "https://www.blockdit.com/series/66cc5665831d1d76b2dd35bc"
        },
        {
          id: 2,
          title: "Computer By Shoper Gamer",
          content: "https://www.blockdit.com/series/65aa6bc1e12738fb377c67b5"
        },
        {
          id: 3,
          title: "อุปกรณ์ IT By Shoper Gamer",
          content: "https://www.blockdit.com/series/65a36e51b4723cb455cf7007"
        },
        {
          id: 4,
          title: "Software By Shoper Gamer",
          content: "https://www.blockdit.com/series/67bf15ad267f91ecd6fa11a6"
        },
        {
          id: 5,
          title: "Blockchain By Shoper Gamer",
          content: "https://www.blockdit.com/series/6756eef47d43eeef5596f7a7"
        },
      ]
    },

    {
      id: 6,
      title: "Ai",
      items: [
        {
          id: 1,
          title: "Ai By Shoper Gamer",
          content: "https://www.blockdit.com/series/66a9188d81d15b54232aaadd"
        },
      ]
    },

    {
      id: 7,
      title: "Data",
      items: [
        {
          id: 1,
          title: "Data By Shoper Gamer",
          content: "https://www.blockdit.com/series/66acefae1ba3d8894da6de9c"
        },
      ]
    },

    {
      id: 8,
      title: "Why",
      items: [
        {
          id: 1,
          title: "IT Why By Shoper Gamer",
          content: "https://www.blockdit.com/series/6651fe91f6a93fd21d62c10b"
        },
        {
          id: 2,
          title: "Gadget Why By Shoper Gamer",
          content: "https://www.blockdit.com/series/683953aa7e40df6a440d3c9e"
        },
        {
          id: 3,
          title: "Why Job By Shoper Gamer",
          content: "https://www.blockdit.com/series/67d58c5163182cdb3798adbb"
        },
      ]
    },

     {
      id: 9,
      title: "Other",
      items: [
        {
          id: 1,
          title: "เอาตัวรอดในยุคออนไลน์",
          content: "https://www.blockdit.com/series/666945af91b811302efb0b96"
        },
        {
          id: 2,
          title: "กฎหมาย IT",
          content: "https://www.blockdit.com/series/6762724a5250d83a2d3ee9df"
        },
      ]
    },

  ],

  projects: [
    {
      id: 1,
      title: "Simple Image Converter",
      description: "ยินดีต้อนรับสู่ Simple Image Converter! 👋 โปรเจกต์นี้คือเว็บแอปพลิเคชันที่สร้างขึ้นเพื่อแก้ปัญหาความยุ่งยาก, ข้อจำกัด, และการสิ้นเปลืองทรัพยากรและเวลาในการแปลงไฟล์รูปภาพและ PDF 🚀 ด้วย Simple Image Converter คุณสามารถแปลงรูปภาพเป็นนามสกุลต่างๆ หรือรวมรูปภาพและ PDF หลายไฟล์ให้เป็น PDF เดียวได้อย่างง่ายดายและรวดเร็ว",
      tech: "HTML, CSS, BootStarp5, JavaScript",
      image: "project1.webp",
      url: "https://github.com/ShoperGamer/Simple-Image-Converter"
    },
    {
      id: 2,
      title: "ministore",
      description: "คำอธิบายโปรเจกต์มินิโปรเจกต์นี้เป็นโปรเจกต์ที่ 2 ที่พัฒนาขึ้นโดยใช้ภาษา PHP และ XAMPP สำหรับการจัดการข้อมูลสินค้า โดยมีฟังก์ชันการทำงานดังนี้:เพิ่มข้อมูลสินค้าและรูปภาพสินค้าค้นหาสินค้าแก้ไขข้อมูลสินค้าลบสินค้า (มีการแจ้งเตือนยืนยันการลบ)",
      tech: "PHP, BootStarp5, JavaScript",
      image: "project2.webp",
      url: "https://github.com/ShoperGamer/ministore"
    },
    {
      id: 3,
      title: "SlicePix",
      description: "เว็บแอปพลิเคชันโอเพนซอร์สที่ช่วยให้คุณ ✂️ แบ่งภาพถ่ายออกเป็นส่วนย่อย ๆ ได้อย่างง่ายดายและรวดเร็ว ไม่ว่าจะเป็นการสร้างภาพ Grid สำหรับ Instagram หรือเตรียมภาพสำหรับเว็บไซต์",
      tech: "HTML, TailwindCSS, JavaScript",
      image: "project3.webp",
      url: "https://github.com/ShoperGamer/SlicePix"
    },
  ]
};

const Icon = memo(({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    youtube: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
      </svg>
    ),
    tiktok: <FaTiktok className="w-6 h-6" />,
    pinterest: <FaPinterest className="w-6 h-6" />,
    blockdit: <FaPencilAlt className="w-6 h-6" />,
    bluesky: <FaBluesky className="w-6 h-6" />,
    website: <CgWebsite className="w-6 h-6" />
  };

  return (
    <div className="text-neon-blue">
      {icons[name] || <div className="w-6 h-6 bg-gray-200 rounded-full" />}
    </div>
  );
});

const SocialLinkCard = memo(({ platform, url, icon }: { platform: string, url: string, icon: string }) => {
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

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);

    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor(canvasWidth: number, canvasHeight: number) {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = Math.random() > 0.5
                ? `rgba(0, 255, 255, ${Math.random() * 0.4 + 0.1})`
                : `rgba(180, 0, 255, ${Math.random() * 0.4 + 0.1})`;
        }

        update(canvasWidth: number, canvasHeight: number) {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvasWidth) this.speedX *= -1;
            if (this.y < 0 || this.y > canvasHeight) this.speedY *= -1;
        }

        draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: Particle[] = [];

        const setup = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 9000));
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(5, 10, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update(canvas.width, canvas.height);
                p.draw(ctx);
            });
            animationFrameId.current = requestAnimationFrame(animate);
        };

        const startAnimation = () => {
            if (!animationFrameId.current) {
                animate();
            }
        };

        const stopAnimation = () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
                animationFrameId.current = null;
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAnimation();
            } else {
                startAnimation();
            }
        };

        const handleResize = () => {
            stopAnimation();
            setup();
            startAnimation();
        };
        
        setup();
        startAnimation();

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            stopAnimation();
        };
    }, []);

    return <canvas ref={canvasRef} className="particles fixed top-0 left-0 w-full h-full -z-10" />;
};


const TechLinkBio = () => {
  const [scrollY, setScrollY] = useState(0);
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      tickingRef.current = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        tickingRef.current = false;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen text-gray-100 py-12 px-4 grid-pattern relative overflow-hidden">
      {/* Background elements */}
      <ParticleBackground />
      <div className="scanlines"></div>

      {/* Floating elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-20"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ส่วนหัว */}
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

        {/* ส่วนลิงก์โซเชียล */}
        <section className="mb-16 animate-slide-in-left">
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
                  opacity: scrollY > 200 ? 1 : 0,
                  transform: scrollY > 200 ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <SocialLinkCard
                  platform={link.platform}
                  url={link.url}
                  icon={link.icon}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ส่วนบทความ */}
        <section className="mb-16 animate-slide-in-right">
      <h2 className="text-2xl font-bold mb-8 text-center">
        <span className="inline-block mr-3 text-cyan-300">{"</>"}</span>
        <span className="glow-text">บทความและความรู้</span>
      </h2>

      <div className="grid grid-cols-1 gap-6">
        <Suspense fallback={<div>กำลังโหลดบทความ...</div>}>
          {profileData.articles.map((category, index) => (
            <div
              key={category.id}
              className="transition-all duration-700"
              style={{
                opacity: scrollY > 400 ? 1 : 0,
                transform: scrollY > 400 ? 'translateY(0)' : 'translateY(30px)',
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
      </div>
    </section>

        {/* ส่วนผลงาน */}
        <section className="animate-fade-in">
         <h2 className="text-2xl font-bold mb-8 text-center">
         <span className="inline-block mr-3 text-cyan-300">{"{}"}</span>
        <span className="glow-text">Show Case</span>
        </h2>

          <div className="flex w-full items-center justify-center border-0">
            <div className="rounded-xl bg-gray-100 p-4 shadow-lg">
              <iframe
                className="rounded-lg max-w-full"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/videoseries?si=rNyyWWn_eD5mGx5v&list=PL6475yVcKBeKWCb70dAPu2Uxd7_VY7nw9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/*Show Case*/}
          <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {profileData.projects.map((project, index) => (
      <div
        key={project.id}
        className="transition-all duration-700"
        style={{
          opacity: scrollY > 600 ? 1 : 0,
          transform: scrollY > 600 ? 'translateY(0)' : 'translateY(30px)',
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
  </div>
</section>

        {/* ส่วน Terminal */}
        <section className="mt-16 neon-terminal animate-fade-in" style={{ opacity: scrollY > 800 ? 1 : 0 }}>
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-neon-blue font-mono">Shoper Gamer</span>
          </div>
          <div className="terminal-content bg-gray-900/80 p-4 rounded-lg border border-cyan-700">
            <p className="text-cyan-300">$ npm run create-awesome-projects</p>
            <p className="text-green-400"> Success! Created 3 innovative projects</p>
            <p className="text-cyan-300 mt-2">$ git push origin master</p>
            <p className="text-green-400"> All code deployed successfully!</p>
          </div>
        </section>

        {/* Footer */}
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