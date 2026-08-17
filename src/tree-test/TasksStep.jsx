import React, { useState } from 'react';
import { taskUid, findNode } from './treeTestUtils';
import TreePicker from './TreePicker';

const inputCls =
  'w-full rounded-lg border border-[#c6c6c6]/60 bg-white px-4 py-3 text-sm text-black focus:border-[#7161EF] focus:ring-0';

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
        <div className="space-y-2 mb-6">
          {tasks.map((task, i) => (
            <div key={task.id} className="flex items-start justify-between gap-3 rounded-lg bg-white shadow-sm px-4 py-3">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-normal text-[#8a8a8a] font-bold mb-1">Task {i + 1}</p>
                <p className="text-sm font-medium">{task.prompt}</p>
                <p className="text-xs text-[#8a8a8a] mt-1">
                  Correct: {task.correctNodeIds.map((id) => findNode(tree, id)?.title).filter(Boolean).join(', ')}
                </p>
              </div>
              <button
                onClick={() => removeTask(task.id)}
                title="Remove task"
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-[#8a8a8a] hover:bg-[#f3f3f4] hover:text-[#7161EF] transition-all"
              >
                <span className="material-symbols-outlined text-base">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-xl bg-white shadow-sm p-5">
        <p className="text-[10px] uppercase tracking-normal text-[#474747] font-bold mb-3">Add a task</p>
        <textarea
          className={`${inputCls} h-20 resize-none mb-3`}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. Find out how much the Enterprise plan costs."
        />
        <p className="text-[11px] text-[#8a8a8a] mb-2">
          Check the page(s) that count as a correct answer for this task.
        </p>
        <TreePicker tree={tree} selectedIds={selectedIds} onToggle={toggle} />
        <button
          onClick={addTask}
          disabled={!prompt.trim() || selectedIds.size === 0}
          className="mt-4 px-5 py-2.5 bg-[#7161EF] text-white rounded-lg font-bold text-xs uppercase tracking-normal hover:opacity-90 active:scale-95 disabled:opacity-40 transition-all"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TasksStep;
