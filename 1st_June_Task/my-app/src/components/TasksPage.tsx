import React, { useState } from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId: number) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Task List</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New task"
        />
        <button
          onClick={addTask}
          className="mt-2 w-full bg-sky-500 hover:bg-sky-600 text-white p-2 rounded"
        >
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center p-2 border-b">
            {editingTask && editingTask.id === task.id ? (
              <div className="flex w-full">
                <input
                  type="text"
                  className="border p-2 rounded flex-grow"
                  value={editingTask.title}
                  onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                />
                <button
                  onClick={() => updateTask(editingTask)}
                  className="ml-2 bg-pink-400 hover:bg-pink-500 text-white p-2 rounded"
                >
                  Update
                </button>
              </div>
            ) : (
              <div className="flex w-full justify-between items-center">
                <span
                  className={`flex-grow ${task.completed ? 'line-through' : ''}`}
                >
                  {task.title}
                </span>
                <div className="flex items-center">
                  <button
                    onClick={() => setEditingTask(task)}
                    className="ml-2 bg-yellow-400 hover:bg-yellow-500 text-white p-2 px-5 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="ml-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="ml-2 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
                  >
                    {task.completed ? 'Undo' : 'Complete'}
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
