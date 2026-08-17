import React, { useState, useRef } from 'react';
import { GLASS_PANEL } from './glassStyles';

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

const FIT_OPTIONS = ['cover', 'contain', 'fill'];

const DEFAULT_DRAFT = { fit: 'cover', posX: 50, posY: 50, opacity: 100 };

const swatchStyle = (value) => ({ backgroundImage: value });

// Drag-to-reposition surface: pointer capture keeps delivering move events to
// this element even once the cursor leaves its bounds mid-drag, so a fast
// drag doesn't "drop" partway through.
const DragPreview = ({ draft, onPosChange, aspectRatio }) => {
  const ref = useRef(null);
  const dragging = useRef(false);

  const updateFromEvent = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    onPosChange(Math.max(0, Math.min(100, x)), Math.max(0, Math.min(100, y)));
  };

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        updateFromEvent(e);
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return;
        updateFromEvent(e);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      className="relative w-full rounded-lg overflow-hidden border border-white/15 bg-[#131313] cursor-move touch-none select-none"
      style={{ aspectRatio }}
    >
      <img
        src={draft.src}
        alt=""
        draggable={false}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          objectFit: draft.fit,
          objectPosition: `${draft.posX}% ${draft.posY}%`,
          opacity: draft.opacity / 100,
        }}
      />
      <div
        className="absolute w-3 h-3 rounded-full bg-white border-2 border-[#7161EF] shadow-[0_0_0_2px_rgba(0,0,0,0.4)] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${draft.posX}%`, top: `${draft.posY}%` }}
      />
    </div>
  );
};

const AdjustPanel = ({ draft, setDraft, onCancel, onApply, previewAspectRatio }) => (
  <div>
    <p className="text-[10px] font-bold uppercase tracking-normal text-white/45 mb-3">
      Adjust image
    </p>

    <DragPreview
      draft={draft}
      onPosChange={(posX, posY) => setDraft((d) => ({ ...d, posX, posY }))}
      aspectRatio={previewAspectRatio}
    />
    <p className="text-[10px] font-normal text-white/35 mt-1.5 mb-4">Drag the preview to reposition</p>

    <p className="text-[11px] font-semibold text-white/60 mb-2">Fit</p>
    <div className="grid grid-cols-3 gap-1.5 mb-4">
      {FIT_OPTIONS.map((fit) => (
        <button
          key={fit}
          onClick={() => setDraft((d) => ({ ...d, fit }))}
          className={`rounded-lg py-1.5 text-[11px] font-semibold capitalize border transition-colors ${
            draft.fit === fit
              ? 'bg-white text-[#131313] border-white'
              : 'text-white/60 border-white/15 hover:bg-white/10'
          }`}
        >
          {fit}
        </button>
      ))}
    </div>

    <div className="flex items-center justify-between mb-1.5">
      <p className="text-[11px] font-semibold text-white/60">Opacity</p>
      <p className="text-[11px] font-normal text-white/40">{draft.opacity}%</p>
    </div>
    <input
      type="range"
      min="10"
      max="100"
      value={draft.opacity}
      onChange={(e) => setDraft((d) => ({ ...d, opacity: Number(e.target.value) }))}
      className="w-full mb-5 accent-[#7161EF]"
    />

    <div className="flex items-center gap-2">
      <button
        onClick={onCancel}
        className="flex-1 rounded-lg border border-white/15 py-2 text-[12px] font-semibold text-white/60 hover:bg-white/10 transition-colors"
      >
        Cancel
      </button>
      <button
        onClick={onApply}
        className="flex-1 rounded-lg bg-white text-[#131313] py-2 text-[12px] font-semibold hover:opacity-90 transition-opacity"
      >
        Apply
      </button>
    </div>
  </div>
);

// A small control that lets a visitor personalize the hero background — by
// upload, by pasting an image URL, or from a built-in gradient preset.
// Custom images pass through an adjust step (fit / position / opacity)
// before they're committed to useHeroBackground / localStorage.
const HeroBackgroundPicker = ({ bg, setBg, previewAspectRatio = 16 / 9 }) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(null);
  const [urlValue, setUrlValue] = useState('');
  const fileInputRef = useRef(null);

  const startDraftFrom = (src) => setDraft({ src, ...DEFAULT_DRAFT });

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => startDraftFrom(reader.result);
    reader.readAsDataURL(file);
  };

  const applyUrl = () => {
    const trimmed = urlValue.trim();
    if (!trimmed) return;
    startDraftFrom(trimmed);
    setUrlValue('');
  };

  const editCurrentImage = () => {
    if (bg?.type !== 'image') return;
    setDraft({ src: bg.src, fit: bg.fit, posX: bg.posX, posY: bg.posY, opacity: bg.opacity });
  };

  const commitDraft = () => {
    setBg({ type: 'image', ...draft });
    setDraft(null);
    setOpen(false);
  };

  return (
    <div className="absolute bottom-4 right-4 z-30">
      {open && (
        <div
          className={`absolute bottom-12 right-0 w-64 rounded-2xl p-4 ${GLASS_PANEL}`}
          style={{ backdropFilter: 'blur(24px)' }}
        >
          {draft ? (
            <AdjustPanel
              draft={draft}
              setDraft={setDraft}
              onCancel={() => setDraft(null)}
              onApply={commitDraft}
              previewAspectRatio={previewAspectRatio}
            />
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-normal text-white/45 mb-3">
                Hero background
              </p>

              {bg?.type === 'image' && (
                <button
                  onClick={editCurrentImage}
                  className="w-full flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 py-2.5 text-[12px] font-semibold text-[#F5F3F0] hover:bg-white/10 transition-colors mb-3"
                >
                  <span className="material-symbols-outlined text-[16px]">tune</span>
                  Adjust current image
                </button>
              )}

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

              <div className="grid grid-cols-4 gap-2 mb-3">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setBg({ type: 'preset', value: p.value });
                      setOpen(false);
                    }}
                    title={p.label}
                    className={`h-10 rounded-lg border transition-all ${
                      bg?.type === 'preset' && bg.value === p.value
                        ? 'border-[#7161EF] ring-2 ring-[#7161EF]/30'
                        : 'border-white/15'
                    }`}
                    style={swatchStyle(p.value)}
                  />
                ))}
                {/* Live WebGL shader (see HeroCanvas) rather than a static
                    swatch — shown as an icon tile instead of a gradient
                    preview since there's no single frame that represents
                    it. */}
                <button
                  onClick={() => {
                    setBg({ type: 'animated' });
                    setOpen(false);
                  }}
                  title="Animated"
                  className={`h-10 rounded-lg border flex items-center justify-center transition-all ${
                    bg?.type === 'animated'
                      ? 'border-[#7161EF] ring-2 ring-[#7161EF]/30'
                      : 'border-white/15 hover:bg-white/5'
                  }`}
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #131313 0%, #2A2470 45%, #5E6EEF 75%, #B9A9F5 100%)',
                  }}
                >
                  <span className="material-symbols-outlined text-[16px] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                    animation
                  </span>
                </button>
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
            </>
          )}
        </div>
      )}

      <button
        onClick={() => {
          setDraft(null);
          setOpen((o) => !o);
        }}
        aria-label="Change hero background"
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-[#F5F3F0] transition-colors ${GLASS_PANEL}`}
      >
        <span className="material-symbols-outlined text-[18px]">wallpaper</span>
      </button>
    </div>
  );
};

export default HeroBackgroundPicker;
