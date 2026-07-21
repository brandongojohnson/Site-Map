import React, { useState, useRef } from 'react';
import { GLASS_PANEL } from './glassStyles';

// Each value is used both as a CSS background-image (gradient functions
// only — a trailing plain color would make the whole property invalid) and
// as a solid swatch fill for the picker button, via swatchStyle() below.
export const PRESETS = [
  {
    id: 'aurora',
    label: 'Aurora',
    value:
      'radial-gradient(circle at 18% 15%, rgba(113,97,239,0.55) 0%, transparent 42%), radial-gradient(circle at 82% 12%, rgba(94,110,239,0.4) 0%, transparent 48%), radial-gradient(circle at 55% 92%, rgba(70,58,140,0.45) 0%, transparent 55%), linear-gradient(#131313, #131313)',
  },
  {
    id: 'ember',
    label: 'Ember',
    value:
      'radial-gradient(circle at 20% 20%, rgba(239,97,120,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 80%, rgba(239,160,97,0.3) 0%, transparent 50%), linear-gradient(#131313, #131313)',
  },
  {
    id: 'mono',
    label: 'Mono',
    value: 'linear-gradient(160deg, #1F1F23 0%, #0D0D0F 100%)',
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
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/45 mb-3">
            Hero background
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2.5 text-[12px] font-semibold text-[#F5F3F0] hover:bg-white/10 transition-colors mb-3"
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
              className="flex-1 min-w-0 rounded-lg border border-white/15 bg-white/5 px-2.5 py-2 text-[12px] text-[#F5F3F0] placeholder:text-white/35 focus:outline-none focus:border-[#7161EF]"
            />
            <button
              onClick={applyUrl}
              disabled={!urlValue.trim()}
              aria-label="Apply URL"
              className="w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-[#F5F3F0] bg-white/5 border border-white/15 hover:bg-white/10 disabled:opacity-40 transition-colors"
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
                  bg === p.value ? 'border-[#7161EF] ring-2 ring-[#7161EF]/30' : 'border-white/15'
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
            className="w-full text-[11px] font-normal text-white/45 hover:text-[#F5F3F0] disabled:opacity-40 transition-colors"
          >
            Reset to default
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Change hero background"
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-[#F5F3F0] transition-colors ${GLASS_PANEL}`}
      >
        <span className="material-symbols-outlined text-[18px]">wallpaper</span>
      </button>
    </div>
  );
};

export default HeroBackgroundPicker;
