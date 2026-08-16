import React, { useState, useRef } from 'react';
import { catUid, SORT_TYPES } from './sortUtils';
import SortlyLogo from '../shared/components/SortlyLogo';

const UNSORTED = '__unsorted__';

const SortBoard = ({ study, onFinish, onExit }) => {
  const { type, studyName, cards } = study;
  const [categories, setCategories] = useState(study.initialCategories);
  const [assignments, setAssignments] = useState({});
  const [dragOverId, setDragOverId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [editingCatId, setEditingCatId] = useState(null);
  const groupCounter = useRef(0);

  const canCreateGroups = type !== 'closed';
  const canRename = (cat) => type === 'open' || !cat.locked;

  const unsortedCards = cards.filter((c) => !assignments[c.id]);
  const sortedCount = cards.length - unsortedCards.length;
  const allSorted = unsortedCards.length === 0;

  const assign = (cardId, catId) => {
    setAssignments((prev) => {
      const next = { ...prev };
      if (catId === UNSORTED) delete next[cardId];
      else next[cardId] = catId;
      return next;
    });
    setSelectedCardId(null);
  };

  const addCategory = (initialCardId = null) => {
    groupCounter.current += 1;
    const cat = { id: catUid(), name: `Group ${groupCounter.current}`, locked: false };
    setCategories((prev) => [...prev, cat]);
    setEditingCatId(cat.id);
    if (initialCardId) assign(initialCardId, cat.id);
    return cat;
  };

  const renameCategory = (catId, name) => {
    setCategories((prev) => prev.map((c) => (c.id === catId ? { ...c, name } : c)));
  };

  const removeCategory = (catId) => {
    setCategories((prev) => prev.filter((c) => c.id !== catId));
    setAssignments((prev) => {
      const next = {};
      Object.entries(prev).forEach(([cardId, cId]) => {
        if (cId !== catId) next[cardId] = cId;
      });
      return next;
    });
  };

  // ---------- drag & drop ----------
  const onDragStart = (e, cardId) => {
    e.dataTransfer.setData('text/plain', cardId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDropZone = (e, zoneId) => {
    e.preventDefault();
    setDragOverId(null);
    const cardId = e.dataTransfer.getData('text/plain');
    if (!cardId) return;
    if (zoneId === '__new__') addCategory(cardId);
    else assign(cardId, zoneId);
  };

  const dropProps = (zoneId) => ({
    onDragOver: (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      setDragOverId(zoneId);
    },
    onDragLeave: (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) setDragOverId(null);
    },
    onDrop: (e) => onDropZone(e, zoneId),
  });

  // Click-to-place fallback (works without a mouse drag, e.g. touch).
  const onZoneClick = (zoneId) => {
    if (!selectedCardId) return;
    if (zoneId === '__new__') addCategory(selectedCardId);
    else assign(selectedCardId, zoneId);
  };
  // Clicking a card that isn't the current selection, while another card is
  // selected, places the selection into that card's zone rather than
  // re-selecting the clicked card — otherwise placing into a non-empty group
  // is impossible by click/touch, since the click lands on an existing card.
  const onCardClick = (cardId, zoneId) => {
    if (selectedCardId && selectedCardId !== cardId) {
      onZoneClick(zoneId);
      return;
    }
    setSelectedCardId((cur) => (cur === cardId ? null : cardId));
  };

  const Card = ({ card, zoneId }) => (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, card.id)}
      onClick={(e) => {
        e.stopPropagation();
        onCardClick(card.id, zoneId);
      }}
      className={`px-4 py-2.5 rounded-lg bg-white text-sm font-medium shadow-sm border cursor-grab active:cursor-grabbing select-none transition-all hover:shadow-md ${
        selectedCardId === card.id ? 'border-[#7161EF] ring-2 ring-[#7161EF]/20' : 'border-[#c6c6c6]/50'
      }`}
    >
      <span className="material-symbols-outlined text-sm align-middle mr-2 text-[#8a8a8a]">
        drag_indicator
      </span>
      {card.label}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f3f4] font-body text-black flex flex-col">
      <header className="flex items-center justify-between px-8 py-4 border-b border-[#c6c6c6]/40 bg-white sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <SortlyLogo iconClassName="text-base text-black" textClassName="text-black" />
          <span className="w-px h-8 bg-[#e6e6e9]" />
          <div>
            <h1 className="text-lg font-black leading-tight">{studyName}</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#474747]">
              {SORT_TYPES[type].label}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-40 h-2 rounded-full bg-[#e8e8e8] overflow-hidden">
              <div
                className="h-full bg-[#7161EF] transition-all"
                style={{ width: `${(sortedCount / cards.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold tabular-nums">
              {sortedCount}/{cards.length}
            </span>
          </div>
          <button
            onClick={onExit}
            className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest text-[#474747] hover:bg-[#e8e8e8] transition-all"
          >
            Quit
          </button>
          <button
            onClick={() => onFinish(categories, assignments)}
            disabled={sortedCount === 0}
            className="px-6 py-2.5 bg-[#7161EF] text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 disabled:opacity-40 transition-all"
          >
            {allSorted ? 'Finish' : `Finish (${unsortedCards.length} left)`}
          </button>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden">
        {/* Unsorted tray */}
        <aside
          {...dropProps(UNSORTED)}
          onClick={() => onZoneClick(UNSORTED)}
          className={`w-72 flex-shrink-0 border-r border-[#c6c6c6]/40 p-5 overflow-y-auto transition-colors ${
            dragOverId === UNSORTED ? 'bg-[#e8e8e8]' : ''
          }`}
        >
          <h2 className="text-[10px] uppercase tracking-widest font-bold text-[#474747] mb-4">
            Unsorted Cards ({unsortedCards.length})
          </h2>
          {unsortedCards.length === 0 ? (
            <p className="text-xs text-[#8a8a8a]">
              All cards sorted. Drag a card back here to unsort it.
            </p>
          ) : (
            <div className="space-y-2">
              {unsortedCards.map((card) => (
                <Card key={card.id} card={card} zoneId={UNSORTED} />
              ))}
            </div>
          )}
          {selectedCardId && (
            <p className="mt-4 text-[11px] text-[#8a8a8a]">
              Card selected — click a group to place it.
            </p>
          )}
        </aside>

        {/* Category columns */}
        <main className="flex-grow p-6 overflow-auto">
          {categories.length === 0 && (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-5xl text-[#c6c6c6]">category</span>
              <p className="mt-3 text-sm text-[#474747]">
                No groups yet. Create one, or drag a card onto “New Group”.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
            {categories.map((cat) => {
              const catCards = cards.filter((c) => assignments[c.id] === cat.id);
              return (
                <section
                  key={cat.id}
                  {...dropProps(cat.id)}
                  onClick={() => onZoneClick(cat.id)}
                  className={`rounded-xl border-2 bg-white/70 p-4 min-h-[10rem] transition-all ${
                    dragOverId === cat.id
                      ? 'border-[#7161EF] bg-white shadow-md'
                      : selectedCardId
                      ? 'border-dashed border-[#8a8a8a] cursor-pointer'
                      : 'border-transparent shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 gap-2">
                    {editingCatId === cat.id ? (
                      <input
                        autoFocus
                        defaultValue={cat.name}
                        onClick={(e) => e.stopPropagation()}
                        onBlur={(e) => {
                          renameCategory(cat.id, e.target.value.trim() || cat.name);
                          setEditingCatId(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') e.target.blur();
                          if (e.key === 'Escape') setEditingCatId(null);
                        }}
                        className="flex-grow rounded-md border border-[#7161EF] px-2 py-1 text-sm font-bold focus:ring-0"
                      />
                    ) : (
                      <h3
                        className={`font-black text-sm truncate ${canRename(cat) ? 'cursor-text' : ''}`}
                        title={canRename(cat) ? 'Click to rename' : cat.name}
                        onClick={(e) => {
                          if (!canRename(cat)) return;
                          e.stopPropagation();
                          setEditingCatId(cat.id);
                        }}
                      >
                        {cat.name}
                        {cat.locked && (
                          <span className="material-symbols-outlined text-xs ml-1 text-[#8a8a8a] align-middle">
                            lock
                          </span>
                        )}
                      </h3>
                    )}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span className="text-[10px] font-bold text-[#8a8a8a] tabular-nums">
                        {catCards.length}
                      </span>
                      {!cat.locked && canCreateGroups && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCategory(cat.id);
                          }}
                          title="Delete group (cards return to unsorted)"
                          className="w-6 h-6 rounded flex items-center justify-center text-[#8a8a8a] hover:bg-[#e8e8e8] hover:text-[#7161EF] transition-all"
                        >
                          <span className="material-symbols-outlined text-base">close</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {catCards.length === 0 ? (
                    <p className="text-xs text-[#c6c6c6] py-4 text-center">Drop cards here</p>
                  ) : (
                    <div className="space-y-2">
                      {catCards.map((card) => (
                        <Card key={card.id} card={card} zoneId={cat.id} />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}

            {canCreateGroups && (
              <button
                {...dropProps('__new__')}
                onClick={(e) => {
                  e.stopPropagation();
                  if (selectedCardId) onZoneClick('__new__');
                  else addCategory();
                }}
                className={`rounded-xl border-2 border-dashed min-h-[10rem] flex flex-col items-center justify-center gap-2 text-[#8a8a8a] transition-all ${
                  dragOverId === '__new__'
                    ? 'border-[#7161EF] text-black bg-white'
                    : 'border-[#c6c6c6]/70 hover:border-[#7161EF] hover:text-[#7161EF]'
                }`}
              >
                <span className="material-symbols-outlined text-3xl">add_circle</span>
                <span className="text-xs uppercase tracking-widest font-bold">New Group</span>
                <span className="text-[10px]">Click, or drop a card here</span>
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SortBoard;
