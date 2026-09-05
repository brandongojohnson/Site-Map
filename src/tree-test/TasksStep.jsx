import React, { useState } from 'react';
import { taskUid, findNode } from './treeTestUtils';
import TreePicker from './TreePicker';
import './WizardShell.css';
import './TreeComponents.css';

// Shared "write the tasks" step. Each task pairs a prompt ("Find out how
// much the Enterprise plan costs") with one or more correct destination
// nodes, picked from the tree built in the previous step.
const TasksStep = ({ tree, tasks, setTasks }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggle = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const addTask = () => {
    if (!prompt.trim() || selectedIds.size === 0) return;
    setTasks((prev) => [...prev, { id: taskUid(), prompt: prompt.trim(), correctNodeIds: [...selectedIds] }]);
    setPrompt('');
    setSelectedIds(new Set());
  };

  const removeTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <div>
      {tasks.length > 0 && (
        <div className="tasks-step-list">
          {tasks.map((task, i) => (
            <div key={task.id} className="tasks-step-item">
              <div className="tasks-step-item-body">
                <p className="tasks-step-item-label">Task {i + 1}</p>
                <p className="tasks-step-item-prompt">{task.prompt}</p>
                <p className="tasks-step-item-answer">
                  Correct: {task.correctNodeIds.map((id) => findNode(tree, id)?.title).filter(Boolean).join(', ')}
                </p>
              </div>
              <button onClick={() => removeTask(task.id)} title="Remove task" className="tasks-step-remove-btn">
                <span className="material-symbols-outlined wizard-icon-16">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="tasks-step-form">
        <p className="tasks-step-form-label">Add a task</p>
        <textarea
          className="wizard-input tasks-step-prompt-textarea"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Find out how much the Enterprise plan costs."
        />
        <p className="tasks-step-picker-hint">
          Check the page(s) that count as a correct answer for this task.
        </p>
        <TreePicker tree={tree} selectedIds={selectedIds} onToggle={toggle} />
        <button onClick={addTask} disabled={!prompt.trim() || selectedIds.size === 0} className="tasks-step-add-btn">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TasksStep;
