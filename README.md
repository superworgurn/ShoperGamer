# Shoper Gamer 🌟

[![Repo Size](https://img.shields.io/github/repo-size/superworgurn/ShoperGamer?style=for-the-badge&label=Repo%20Size&color=green)](https://github.com/yourusername/shoper-gamer-portfolio)
[![Last Commit](https://img.shields.io/github/last-commit/superworgurn/ShoperGamer?style=for-the-badge&label=Last%20Commit)](https://github.com/yourusername/shoper-gamer-portfolio)
[![GitHub Stars](https://img.shields.io/github/stars/superworgurn/ShoperGamer?style=for-the-badge&label=Stars&color=yellow)](https://github.com/yourusername/shoper-gamer-portfolio/stargazers)



![Project Preview](https://yt3.ggpht.com/551_l7p54QgVJptmU-77P1IUFPeXUQTLa82VgyLG0soejf5zkkkQXBWLJbM1xAnC3e1ewu2OtJaxzA=s1600-rw-nd-v1)


เว็บไซต์ Linkbio ไฮเทคสำหรับ Shoper Gamer ที่ออกแบบด้วยเอฟเฟกต์ไซเบอร์พังก์ที่ทันสมัย

## 📌 ภาพรวม
เว็บไซต์ Linkbio แบบอินเทอร์แอคทีวที่แสดงผลงาน ความสามารถ และข้อมูลติดต่อของ Shoper Gamer ด้วยเอฟเฟกต์กราฟิกไซเบอร์พังก์ที่สวยงามและทันสมัย

## ✨ คุณสมบัติหลัก
- **เอฟเฟกต์โหลดแบบไซเบอร์พังก์** - แอนิเมชันโหลดหน้าจอสไตล์เทอร์มินัล
- **พื้นหลังอนุภาคไดนามิก** - พื้นหลังที่สร้างด้วยอนุภาคเคลื่อนไหว
- **การแสดงผลแบบเลื่อนเข้ามา** - เอฟเฟกต์การแสดงผลเมื่อเลื่อนถึงส่วนต่างๆ
- **การโหลดแบบล่าช้า** - เพิ่มประสิทธิภาพด้วยการโหลดคอมโพเนนต์เมื่อจำเป็น
- **ดีไซน์ตอบสนอง** - ใช้งานได้บนทุกอุปกรณ์
- **เอฟเฟกต์แสงนีออน** - เอฟเฟกต์แสงสไตล์ไซเบอร์พังก์

## 🛠️ เทคโนโลยีที่ใช้

### Frontend
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

### เครื่องมือ
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## 🚀 การติดตั้งและใช้งาน

1. **โคลนโปรเจกต์**:
```bash
git clone [https://github.com/yourusername/shoper-gamer-portfolio.git](https://github.com/yourusername/shoper-gamer-portfolio.git)
cd shoper-gamer-portfolio

```

2.  **ติดตั้ง dependencies**:
    

Bash

```
npm install

```

3.  **รันโปรเจกต์**:
    

Bash

```
npm run dev

```

4.  **เปิดในเบราว์เซอร์**:
    

```
http://localhost:5173

```

## 🎯 คุณลักษณะพิเศษ

### เอฟเฟกต์โหลดหน้า

HTML

```
<div id="loading-screen">
  <div class="spinner"></div>
  <p>กำลังโหลด Shoper Gamer...</p>
  <div class="blinking">_ CONNECTING _</div>
</div>

```

### การโหลดแบบล่าช้า

TypeScript

```
const VideoLoader = lazy(() => import('./compo/video'));
const ParticleBackground = lazy(() => import('./compo/background'));

<Suspense fallback={<div>กำลังโหลด...</div>}>
  {backgroundVisible && <ParticleBackground />}
</Suspense>

```

### เอฟเฟกต์การแสดงผลเมื่อเลื่อน

TypeScript

```
const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref]);
  
  return isVisible;
};

```

### การออกแบบการ์ด

TypeScript

```
const SocialLinkCard = ({ platform, url, icon }) => (
  <a href={url} className="social-card neon-border">
    <div className="bg-black/30">
      <Icon name={icon} />
    </div>
    <span className="text-neon-blue">{platform}</span>
    <span className="blinking">▸</span>
  </a>
);

```

## 📂 โครงสร้างไฟล์

```
├── public/
│   └── logo.webp
├── src/
│   ├── compo/
│   │   ├── background.tsx    // พื้นหลังอนุภาค
│   │   ├── dropdown.tsx      // เมนูแบบดรอปดาวน์
│   │   ├── icon.tsx          // ระบบไอคอน
│   │   ├── projectcard.tsx    // การ์ดโปรเจกต์
│   │   ├── scroll.tsx         // ระบบตรวจจับการเลื่อน
│   │   └── video.tsx          // โหลดวิดีโอ
│   ├── data.ts               // ข้อมูลโปรไฟล์
│   ├── main.tsx              // จุดเข้าแอปหลัก
│   └── App.tsx               // คอมโพเนนต์หลัก
└── index.html                // ไฟล์ HTML หลัก

```

## 🌐 การตอบสนอง

เว็บไซต์ถูกออกแบบมาให้ทำงานได้อย่างสมบูรณ์บนทุกอุปกรณ์:

-   **มือถือ**: ปรับเลย์เอาต์ให้เหมาะสม
    
-   **แท็บเล็ต**: แสดงผลแบบกริด 2 คอลัมน์
    
-   **เดสก์ท็อป**: แสดงผลแบบเต็มรูปแบบด้วยเอฟเฟกต์พิเศษ
    

## 📄 ใบอนุญาต

โปรเจกต์นี้อยู่ภายใต้ใบอนุญาต [MIT](https://www.google.com/search?q=LICENSE)

----------

# Shoper Gamer 🌟 (English Version)

A high-tech cyberpunk styled Linkbio website for Shoper Gamer with modern visual effects.

## 📌 Overview

An interactive Linkbio website showcasing Shoper Gamer's work, skills, and contact information with stunning cyberpunk visual effects.

## ✨ Key Features

-   **Cyberpunk Loading Effects** - Terminal-style loading animations
    
-   **Dynamic Particle Background** - Animated particle background
    
-   **Scroll-triggered Animations** - Elements animate on scroll
    
-   **Lazy Loading** - Optimized performance with component lazy loading
    
-   **Responsive Design** - Works on all devices
    
-   **Neon Glow Effects** - Cyberpunk-style lighting effects
    

## 🛠️ Tech Stack

### Frontend

### Tools

## 🚀 Installation & Usage

1.  **Clone the project**:
    

Bash

```
git clone [https://github.com/yourusername/shoper-gamer-portfolio.git](https://github.com/yourusername/shoper-gamer-portfolio.git)
cd shoper-gamer-portfolio

```

2.  **Install dependencies**:
    

Bash

```
npm install

```

3.  **Run the project**:
    

Bash

```
npm run dev

```

4.  **Open in browser**:
    

```
http://localhost:5173

```

## 🎯 Special Features

### Loading Screen Effect

HTML

```
<div id="loading-screen">
  <div class="spinner"></div>
  <p>Loading Shoper Gamer...</p>
  <div class="blinking">_ CONNECTING _</div>
</div>

```

### Lazy Loading Implementation

TypeScript

```
const VideoLoader = lazy(() => import('./compo/video'));
const ParticleBackground = lazy(() => import('./compo/background'));

<Suspense fallback={<div>Loading...</div>}>
  {backgroundVisible && <ParticleBackground />}
</Suspense>

```

### Scroll-triggered Animations

TypeScript

```
const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref]);
  
  return isVisible;
};

```

### Card Component Design

TypeScript

```
const SocialLinkCard = ({ platform, url, icon }) => (
  <a href={url} className="social-card neon-border">
    <div className="bg-black/30">
      <Icon name={icon} />
    </div>
    <span className="text-neon-blue">{platform}</span>
    <span className="blinking">▸</span>
  </a>
);

```

## 📂 File Structure

```
├── public/
│   └── logo.webp
├── src/
│   ├── compo/
│   │   ├── background.tsx    // Particle background
│   │   ├── dropdown.tsx      // Dropdown menu
│   │   ├── icon.tsx          // Icon system
│   │   ├── projectcard.tsx   // Project cards
│   │   ├── scroll.tsx        // Scroll detection
│   │   └── video.tsx         // Video loader
│   ├── data.ts               // Profile data
│   ├── main.tsx              // App entry point
│   └── App.tsx               // Main component
└── index.html                // Main HTML file

```

## 🌐 Responsiveness

The website is fully responsive across all devices:

-   **Mobile**: Optimized single-column layout
    
-   **Tablet**: 2-column grid layout
    
-   **Desktop**: Full experience with special effects
    

## 📄 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE)




