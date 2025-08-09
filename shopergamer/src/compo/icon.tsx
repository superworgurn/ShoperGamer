import { lazy, Suspense, memo } from 'react';
import { FaGithub, FaYoutube, FaPinterest, FaPencilAlt } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';

const preloadIcons = () => {
  const icons = [
    FaGithub, FaYoutube, FaTiktok, FaPinterest, 
    FaPencilAlt, CgWebsite
  ];
  
  icons.forEach(icon => {
    const img = new Image();
    img.src = 'data:image/svg+xml;base64,' + btoa(icon);
  });
};

preloadIcons();

const iconComponents = {
  github: FaGithub,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  pinterest: FaPinterest,
  blockdit: FaPencilAlt,
  bluesky: lazy(() => import('react-icons/fa6').then(mod => ({ default: mod.FaBluesky }))),
  website: CgWebsite,
} as const;

export type IconName = keyof typeof iconComponents;

const Icon = memo(({ name }: { name: IconName }) => {
  const Component = iconComponents[name];

  return (
    <Suspense fallback={
      <div className="bg-gray-700 rounded-full w-6 h-6 animate-pulse" />
    }>
      <Component className="w-6 h-6 transition-all duration-300 hover:text-cyan-300" />
    </Suspense>
  );
});

export default Icon;