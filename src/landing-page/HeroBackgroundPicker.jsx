import React, { useState, useRef } from 'react';
import { GLASS_PANEL } from './glassStyles';
import './HeroBackgroundPicker.css';

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
      className="hbp-drag-preview"
      style={{ aspectRatio }}
    >
      <img
        src={draft.src}
        alt=""
        draggable={false}
        className="hbp-drag-preview-img"
        style={{
          objectFit: draft.fit,
          objectPosition: `${draft.posX}% ${draft.posY}%`,
          opacity: draft.opacity / 100,
        }}
      />
      <div className="hbp-drag-handle" style={{ left: `${draft.posX}%`, top: `${draft.posY}%` }} />
    </div>
  );
};

const AdjustPanel = ({ draft, setDraft, onCancel, onApply, previewAspectRatio }) => (
  <div>
    <p className="hbp-label">Adjust image</p>

    <DragPreview
      draft={draft}
      onPosChange={(posX, posY) => setDraft((d) => ({ ...d, posX, posY }))}
      aspectRatio={previewAspectRatio}
    />
    <p className="hbp-hint">Drag the preview to reposition</p>

    <p className="hbp-sublabel">Fit</p>
    <div className="hbp-fit-grid">
      {FIT_OPTIONS.map((fit) => (
        <button
          key={fit}
          onClick={() => setDraft((d) => ({ ...d, fit }))}
          className={`hbp-fit-btn ${draft.fit === fit ? 'is-active' : ''}`}
        >
          {fit}
        </button>
      ))}
    </div>

    <div className="hbp-opacity-row">
      <p className="hbp-opacity-label">Opacity</p>
      <p className="hbp-opacity-value">{draft.opacity}%</p>
    </div>
    <input
      type="range"
      min="10"
      max="100"
      value={draft.opacity}
      onChange={(e) => setDraft((d) => ({ ...d, opacity: Number(e.target.value) }))}
      className="hbp-range"
    />

    <div className="hbp-actions-row">
      <button onClick={onCancel} className="hbp-cancel-btn">
        Cancel
      </button>
      <button onClick={onApply} className="hbp-apply-btn">
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
    <div className="hbp-root">
      {open && (
        <div className={`hbp-panel ${GLASS_PANEL}`}>
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
              <p className="hbp-label">Hero background</p>

              {bg?.type === 'image' && (
                <button onClick={editCurrentImage} className="hbp-option-btn">
                  <span className="material-symbols-outlined hbp-icon-16">tune</span>
                  Adjust current image
                </button>
              )}

              <button onClick={() => fileInputRef.current?.click()} className="hbp-option-btn">
                <span className="material-symbols-outlined hbp-icon-16">upload</span>
                Upload image
              </button>
              <input ref={fileInputRef} type="file" accept="image/*" onChange={onFile} className="hbp-hidden-input" />

              <div className="hbp-url-row">
                <input
                  type="url"
                  value={urlValue}
                  onChange={(e) => setUrlValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && applyUrl()}
                  placeholder="Paste image URL"
                  className="hbp-url-input"
                />
                <button
                  onClick={applyUrl}
                  disabled={!urlValue.trim()}
                  aria-label="Apply URL"
                  className="hbp-url-submit"
                >
                  <span className="material-symbols-outlined hbp-icon-16">arrow_forward</span>
                </button>
              </div>

              <div className="hbp-preset-grid">
                {PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setBg({ type: 'preset', value: p.value });
                      setOpen(false);
                    }}
                    title={p.label}
                    className={`hbp-preset-swatch ${
                      bg?.type === 'preset' && bg.value === p.value ? 'is-active' : ''
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
                  className={`hbp-animated-swatch ${bg?.type === 'animated' ? 'is-active' : ''}`}
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #131313 0%, #2A2470 45%, #5E6EEF 75%, #B9A9F5 100%)',
                  }}
                >
                  <span className="material-symbols-outlined hbp-animated-icon">animation</span>
                </button>
                {/* Live WebGL starfield (see Galaxy.jsx) — same icon-tile
                    treatment as Animated, since there's no static frame that
                    represents it either. */}
                <button
                  onClick={() => {
                    setBg({ type: 'galaxy' });
                    setOpen(false);
                  }}
                  title="Galaxy"
                  className={`hbp-animated-swatch ${bg?.type === 'galaxy' ? 'is-active' : ''}`}
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #050510 0%, #131836 45%, #2E4E8F 80%, #6EC7C2 100%)',
                  }}
                >
                  <span className="material-symbols-outlined hbp-animated-icon">auto_awesome</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setBg(null);
                  setOpen(false);
                }}
                disabled={!bg}
                className="hbp-reset-btn"
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
        className={`hbp-toggle-btn ${GLASS_PANEL}`}
      >
        <span className="material-symbols-outlined hbp-toggle-icon">wallpaper</span>
      </button>
    </div>
  );
};

export default HeroBackgroundPicker;
