// Aggregate analysis across many completed tree-test sessions for one study.
// Each session looks like { tasks: [buildTaskRecord(...) output, …] } from
// treeTestUtils.

export const taskStats = (tasks, sessions) =>
  tasks.map((task) => {
    const attempts = sessions
      .map((session) => (session.tasks || []).find((t) => t.taskId === task.id))
      .filter(Boolean);
    const total = attempts.length;
    const completed = attempts.filter((a) => !a.skipped);
    const successes = completed.filter((a) => a.correct);
    const directSuccesses = successes.filter((a) => a.direct);
    const avgDurationMs = completed.length
      ? completed.reduce((sum, a) => sum + (a.durationMs || 0), 0) / completed.length
      : 0;

    return {
      taskId: task.id,
      prompt: task.prompt,
      attempts: total,
      successRate: completed.length ? successes.length / completed.length : 0,
      directRate: successes.length ? directSuccesses.length / successes.length : 0,
      skipRate: total ? (total - completed.length) / total : 0,
      avgDurationMs,
    };
  });

// Where participants actually ended up for one task, most common first —
// surfaces which wrong turns are the popular ones, not just the failure rate.
export const destinationBreakdown = (task, sessions) => {
  const tally = new Map();
  sessions.forEach((session) => {
    const rec = (session.tasks || []).find((t) => t.taskId === task.id);
    if (!rec || rec.skipped) return;
    const key = rec.answerNodeId;
    if (!tally.has(key)) {
      tally.set(key, { nodeId: key, title: rec.answerTitle, correct: rec.correct, count: 0 });
    }
    tally.get(key).count++;
  });
  return Array.from(tally.values()).sort((a, b) => b.count - a.count);
};
