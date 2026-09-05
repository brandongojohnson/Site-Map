import React, { useState, useRef } from 'react';
import { catUid, SORT_TYPES } from './sortUtils';
import SortlyLogo from '../shared/components/SortlyLogo';
import './SortBoard.css';

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
      className={`sort-board-card ${selectedCardId === card.id ? 'is-selected' : ''}`}
    >
      <span className="material-symbols-outlined sort-board-card-drag-icon">drag_indicator</span>
      {card.label}
    </div>
  );

  return (
    <div className="sort-board">
      <header className="sort-board-header">
        <div className="sort-board-header-left">
          <SortlyLogo iconClassName="sort-board-logo-icon" textClassName="sort-board-logo-text" />
          <span className="sort-board-divider" />
          <div>
            <h1 className="sort-board-title">{studyName}</h1>
            <p className="sort-board-subtitle">{SORT_TYPES[type].label}</p>
          </div>
        </div>

        <div className="sort-board-header-right">
          <div className="sort-board-progress">
            <div className="sort-board-progress-track">
              <div
                className="sort-board-progress-fill"
                style={{ width: `${(sortedCount / cards.length) * 100}%` }}
              />
            </div>
            <span className="sort-board-progress-count">
              {sortedCount}/{cards.length}
            </span>
          </div>
          <button onClick={onExit} className="sort-board-quit-btn">
            Quit
          </button>
          <button
            onClick={() => onFinish(categories, assignments)}
            disabled={sortedCount === 0}
            className="sort-board-finish-btn"
          >
            {allSorted ? 'Finish' : `Finish (${unsortedCards.length} left)`}
          </button>
        </div>
      </header>

      <div className="sort-board-body">
        {/* Unsorted tray */}
        <aside
          {...dropProps(UNSORTED)}
          onClick={() => onZoneClick(UNSORTED)}
          className={`sort-board-tray ${dragOverId === UNSORTED ? 'is-drag-over' : ''}`}
        >
          <h2 className="sort-board-tray-title">Unsorted Cards ({unsortedCards.length})</h2>
          {unsortedCards.length === 0 ? (
            <p className="sort-board-tray-empty">All cards sorted. Drag a card back here to unsort it.</p>
          ) : (
            <div className="sort-board-card-list">
              {unsortedCards.map((card) => (
                <Card key={card.id} card={card} zoneId={UNSORTED} />
              ))}
            </div>
          )}
          {selectedCardId && (
            <p className="sort-board-tray-hint">Card selected — click a group to place it.</p>
          )}
        </aside>

        {/* Category columns */}
        <main className="sort-board-main">
          {categories.length === 0 && (
            <div className="sort-board-empty-state">
              <span className="material-symbols-outlined sort-board-empty-icon">category</span>
              <p className="sort-board-empty-text">No groups yet. Create one, or drag a card onto “New Group”.</p>
            </div>
          )}

          <div className="sort-board-grid">
            {categories.map((cat) => {
              const catCards = cards.filter((c) => assignments[c.id] === cat.id);
              return (
                <section
                  key={cat.id}
                  {...dropProps(cat.id)}
                  onClick={() => onZoneClick(cat.id)}
                  className={`sort-board-category ${
                    dragOverId === cat.id ? 'is-drag-over' : selectedCardId ? 'is-drop-target' : ''
                  }`}
                >
                  <div className="sort-board-cat-header">
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
                        className="sort-board-cat-rename-input"
                      />
                    ) : (
                      <h3
                        className={`sort-board-cat-title ${canRename(cat) ? 'can-rename' : ''}`}
                        title={canRename(cat) ? 'Click to rename' : cat.name}
                        onClick={(e) => {
                          if (!canRename(cat)) return;
                          e.stopPropagation();
                          setEditingCatId(cat.id);
                        }}
                      >
                        {cat.name}
                        {cat.locked && (
                          <span className="material-symbols-outlined sort-board-cat-lock-icon">lock</span>
                        )}
                      </h3>
                    )}
                    <div className="sort-board-cat-header-right">
                      <span className="sort-board-cat-count">{catCards.length}</span>
                      {!cat.locked && canCreateGroups && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCategory(cat.id);
                          }}
                          title="Delete group (cards return to unsorted)"
                          className="sort-board-cat-delete"
                        >
                          <span className="material-symbols-outlined sort-board-cat-delete-icon">close</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {catCards.length === 0 ? (
                    <p className="sort-board-cat-empty">Drop cards here</p>
                  ) : (
                    <div className="sort-board-card-list">
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
                className={`sort-board-new-group-btn ${dragOverId === '__new__' ? 'is-drag-over' : ''}`}
              >
                <span className="material-symbols-outlined sort-board-new-group-icon">add_circle</span>
                <span className="sort-board-new-group-label">New Group</span>
                <span className="sort-board-new-group-hint">Click, or drop a card here</span>
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SortBoard;
