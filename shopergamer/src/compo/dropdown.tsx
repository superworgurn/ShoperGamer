import { useState, useCallback, memo } from 'react';

const ArticleDropdown = memo(({ title, items }: { title: string, items: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="article-panel group neon-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
      <button
        onClick={toggleOpen}
        className="article-header w-full text-left flex justify-between items-center p-5 bg-gradient-to-r from-gray-900/80 to-gray-800/80 group-hover:from-cyan-900/50 group-hover:to-purple-900/50 transition-all duration-500"
        aria-expanded={isOpen}
        aria-controls={`article-content-${title}`}
      >
        <span className="font-bold text-xl text-white group-hover:text-cyan-300 glow-text transition-colors">
          {title}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6 text-neon-blue group-hover:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <div
        id={`article-content-${title}`}
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-900/80">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.content}
              target="_blank"
              rel="noopener noreferrer"
              className={`article-item p-4 rounded-lg border border-gray-700 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer block ${
                hoveredItem === item.id
                  ? 'bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.3)]'
                  : 'bg-gray-800/50'
              }`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              aria-label={`Read ${item.title}`}
            >
              <div className="flex items-start">
                <div className="bg-cyan-900/40 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-cyan-200 group-hover:text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-200 truncate">
                    {item.content.replace(/^https?:\/\//, '')}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ArticleDropdown;