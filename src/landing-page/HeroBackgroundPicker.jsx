import React, { useState, useRef } from 'react';
import { GLASS_PANEL } from './glassStyles';

export const PRESETS = [
  {
    id: 'aurora',
    label: 'Aurora',
    value:
      'radial-gradient(circle at 15% 20%, rgba(113,97,239,0.5) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(239,97,184,0.42) 0%, transparent 45%), radial-gradient(circle at 50% 85%, rgba(97,201,239,0.42) 0%, transparent 45%)',
  },
  {
    id: 'sunrise',
    label: 'Sunrise',
    value: 'linear-gradient(135deg, #FFE8D6 0%, #FFD6E8 50%, #E8D6FF 100%)',
  },
  {
    id: 'mono',
    label: 'Mono',
    value: 'linear-gradient(160deg, #F0F0F2 0%, #D4D4D9 100%)',
  },
];

const swatchStyle = (value) => ({ backgroundImage: value });

// A small control that lets a visitor personalize the hero background — by
// upload, by pasting an image URL, or from a built-in gradient preset.
// Choice persists to localStorage via useHeroBackground.
const HeroBackgroundPicker = ({ bg, setBg }) => {
  const [open, setOpen] = useState(false);
  const [urlValue, setUrlValue] = useState('');
  const fileInputRef = useRef(null);

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBg(reader.result);
    reader.readAsDataURL(file);
    setOpen(false);
  };

  const applyUrl = () => {
    const trimmed = urlValue.trim();
    if (!trimmed) return;
    setBg(trimmed);
    setUrlValue('');
    setOpen(false);
  };

  return (
    <div className="absolute bottom-4 right-4 z-20">
      {open && (
        <div
          className={`absolute bottom-12 right-0 w-64 rounded-2xl p-4 ${GLASS_PANEL}`}
          style={{ backdropFilter: 'blur(24px)' }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#86868C] dark:text-[#9891A8] mb-3">
            Hero background
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#E4E4E7] dark:border-white/15 bg-white/70 dark:bg-white/5 py-2.5 text-[12px] font-semibold text-[#18181B] dark:text-[#F5F3F0] hover:bg-white dark:hover:bg-white/10 transition-colors mb-3"
          >
            <span className="material-symbols-outlined text-[16px]">upload</span>
            Upload image
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={onFile} className="hidden" />

          <div className="flex items-center gap-1.5 mb-3">
            <input
              type="url"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && applyUrl()}
              placeholder="Paste image URL"
              className="flex-1 min-w-0 rounded-lg border border-[#E4E4E7] dark:border-white/15 bg-white/70 dark:bg-white/5 px-2.5 py-2 text-[12px] text-[#18181B] dark:text-[#F5F3F0] placeholder:text-[#9C9CA3] focus:outline-none focus:border-[#7161EF]"
            />
            <button
              onClick={applyUrl}
              disabled={!urlValue.trim()}
              aria-label="Apply URL"
              className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-[#18181B] dark:text-[#F5F3F0] bg-white/70 dark:bg-white/5 border border-[#E4E4E7] dark:border-white/15 hover:bg-white dark:hover:bg-white/10 disabled:opacity-40 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setBg(p.value);
                  setOpen(false);
                }}
                title={p.label}
                className={`h-10 rounded-lg border transition-all ${
                  bg === p.value ? 'border-[#7161EF] ring-2 ring-[#7161EF]/30' : 'border-[#E4E4E7] dark:border-white/15'
                }`}
                style={swatchStyle(p.value)}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setBg(null);
              setOpen(false);
            }}
            disabled={!bg}
            className="w-full text-[11px] font-normal text-[#86868C] dark:text-[#9891A8] hover:text-[#18181B] dark:hover:text-[#F5F3F0] disabled:opacity-40 transition-colors"
          >
            Reset to default
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change hero background"
        className={`w-10 h-10 rounded-full flex items-center justify-center text-[#47474D] dark:text-[#B8B2C4] hover:text-[#18181B] dark:hover:text-[#F5F3F0] transition-colors ${GLASS_PANEL}`}
      >
        <span className="material-symbols-outlined text-[18px]">wallpaper</span>
      </button>
    </div>
  );
};

export default HeroBackgroundPicker;
