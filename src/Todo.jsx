import { useState } from "react";
import { useNavigate } from 'react-router-dom'
const LEVELS = ["Low", "Medium", "High"];

const levelColors = {
  Low: { bg: "#e8f5e9", text: "#2e7d32", border: "#a5d6a7" },
  Medium: { bg: "#fff8e1", text: "#f57f17", border: "#ffe082" },
  High: { bg: "#fce4ec", text: "#c62828", border: "#f48fb1" },
};

export default function TodoList() {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [level, setLevel] = useState("Medium");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editLevel, setEditLevel] = useState("Medium");

  const handleAdd = () => {
    if (!taskName.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), name: taskName.trim(), level, completed: false },
    ]);
    setTaskName("");
    setLevel("Medium");
  };

  const handleDelete = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const handleToggle = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const startEdit = (task) => {
    setEditId(task.id);
    setEditName(task.name);
    setEditLevel(task.level);
  };

  const saveEdit = () => {
    if (!editName.trim()) return;
    setTasks(tasks.map((t) => (t.id === editId ? { ...t, name: editName.trim(), level: editLevel } : t)));
    setEditId(null);
  };

  const pending = tasks.filter((t) => !t.completed).length;
  const done = tasks.filter((t) => t.completed).length;

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerLeft}>
            <span style={styles.logo}>✅</span>
            <div>
              <h1 style={styles.title}>My Tasks</h1>
              <p style={styles.subtitle}>Stay organised, get things done.</p>
            </div>
          </div>
          <div style={styles.statsRow}>
            <div style={styles.statBox}>
              <span style={styles.statNum}>{tasks.length}</span>
              <span style={styles.statLabel}>Total</span>
            </div>
            <div style={styles.statBox}>
              <span style={{ ...styles.statNum, color: "#f57f17" }}>{pending}</span>
              <span style={styles.statLabel}>Pending</span>
            </div>
            <div style={styles.statBox}>
              <span style={{ ...styles.statNum, color: "#2e7d32" }}>{done}</span>
              <span style={styles.statLabel}>Done</span>
            </div>
          </div>
        </div>

        {/* Input Row */}
        <div style={styles.inputRow}>
          <input
            style={styles.input}
            placeholder="Enter a new task…"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          />
          <select
            style={styles.select}
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            {LEVELS.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
          <button style={styles.addBtn} onClick={handleAdd}>
            + ADD
          </button>
        </div>

        {/* Column Headers */}
        <div style={styles.colHeader}>
          <span style={{ flex: 3 }}>Task Name</span>
          <span style={{ flex: 1, textAlign: "center" }}>Priority</span>
          <span style={{ flex: 1, textAlign: "center" }}>Completed</span>
          <span style={{ width: 180, textAlign: "center" }}>Actions</span>
        </div>

        {/* Task List */}
        <div style={styles.list}>
          {tasks.length === 0 && (
            <div style={styles.empty}>
              <span style={styles.emptyIcon}>📋</span>
              <p style={styles.emptyText}>No tasks yet — add your first one above!</p>
            </div>
          )}

          {tasks.map((task) => {
            const lc = levelColors[task.level];
            const isEditing = editId === task.id;

            return (
              <div
                key={task.id}
                style={{
                  ...styles.taskRow,
                  opacity: task.completed ? 0.5 : 1,
                  borderLeft: `5px solid ${lc.border}`,
                }}
              >
                {isEditing ? (
                  <>
                    <input
                      style={{ ...styles.input, flex: 3, marginRight: 12 }}
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                      autoFocus
                    />
                    <select
                      style={{ ...styles.select, flex: 1 }}
                      value={editLevel}
                      onChange={(e) => setEditLevel(e.target.value)}
                    >
                      {LEVELS.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                    <div style={{ width: 180, display: "flex", gap: 8, justifyContent: "center" }}>
                      <button style={styles.saveBtn} onClick={saveEdit}>Save</button>
                      <button style={styles.cancelBtn} onClick={() => setEditId(null)}>Cancel</button>
                    </div>
                  </>
                ) : (
                  <>
                    <span style={{
                      flex: 3,
                      fontFamily: "'Lora', serif",
                      fontSize: 18,
                      color: "#ffffff",
                      textDecoration: task.completed ? "line-through" : "none",
                      wordBreak: "break-word",
                    }}>
                      {task.name}
                    </span>

                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                      <span style={{
                        backgroundColor: lc.bg,
                        color: lc.text,
                        border: `1.5px solid ${lc.border}`,
                        borderRadius: 24,
                        padding: "6px 22px",
                        fontSize: 13,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                      }}>
                        {task.level}
                      </span>
                    </div>

                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggle(task.id)}
                        style={styles.checkbox}
                        title="Mark complete"
                      />
                    </div>

                    <div style={{ width: 180, display: "flex", gap: 8, justifyContent: "center" }}>
                      <button style={styles.editBtn} onClick={() => startEdit(task)} title="Edit">
                        ✏️ Edit
                      </button>
                      <button style={styles.deleteBtn} onClick={() => handleDelete(task.id)} title="Delete">
                        🗑️ Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <button onClick={()=>{navigate("/")}} className="pointer-events-auto mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">Home</button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; height: 100%; }
        input:focus, select:focus { outline: 2px solid #5c6bc0; outline-offset: 1px; }
        button { transition: filter 0.12s, transform 0.12s; }
        button:hover { filter: brightness(0.92); transform: scale(0.98); }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "48px 40px",
    fontFamily: "'DM Mono', monospace",
  },
  card: {
    background: "#1a1a1a",
    borderRadius: 20,
    boxShadow: "0 12px 60px rgba(0,0,0,0.5)",
    padding: "52px 60px",
    width: "100%",
    maxWidth: 1200,
    border: "1.5px solid #333333",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    borderBottom: "2px solid #333333",
    paddingBottom: 32,
    flexWrap: "wrap",
    gap: 20,
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  logo: { fontSize: 48 },
  title: {
    margin: 0,
    fontFamily: "'Lora', serif",
    fontSize: 38,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: -0.5,
  },
  subtitle: {
    margin: "5px 0 0",
    fontSize: 14,
    color: "#888",
    letterSpacing: 0.3,
  },
  statsRow: {
    display: "flex",
    gap: 20,
  },
  statBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#2a2a2a",
    border: "1.5px solid #444444",
    borderRadius: 14,
    padding: "14px 28px",
    minWidth: 90,
  },
  statNum: {
    fontSize: 32,
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1,
  },
  statLabel: {
    fontSize: 11,
    color: "#888",
    marginTop: 5,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  inputRow: {
    display: "flex",
    gap: 16,
    marginBottom: 32,
    alignItems: "center",
  },
  input: {
    flex: 2,
    padding: "16px 20px",
    border: "1.5px solid #444444",
    borderRadius: 10,
    fontSize: 17,
    fontFamily: "'DM Mono', monospace",
    background: "#2a2a2a",
    color: "#ffffff",
  },
  select: {
    flex: 0.6,
    padding: "16px 16px",
    border: "1.5px solid #444444",
    borderRadius: 10,
    fontSize: 17,
    fontFamily: "'DM Mono', monospace",
    background: "#2a2a2a",
    color: "#ffffff",
    cursor: "pointer",
  },
  addBtn: {
    padding: "16px 40px",
    background: "#3a3a3a",
    color: "#fff",
    border: "1.5px solid #555555",
    borderRadius: 10,
    fontFamily: "'DM Mono', monospace",
    fontWeight: 700,
    fontSize: 17,
    letterSpacing: 1.2,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  colHeader: {
    display: "flex",
    alignItems: "center",
    padding: "8px 22px",
    marginBottom: 12,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: "#666",
    textTransform: "uppercase",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    minHeight: 340,
  },
  taskRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "22px 22px",
    background: "#2a2a2a",
    borderRadius: 12,
    border: "1px solid #3a3a3a",
    transition: "opacity 0.2s",
  },
  checkbox: {
    width: 26,
    height: 26,
    accentColor: "#1a1a2e",
    cursor: "pointer",
  },
  editBtn: {
    background: "#fff8e1",
    border: "1.5px solid #ffe082",
    borderRadius: 8,
    padding: "9px 16px",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "'DM Mono', monospace",
    fontWeight: 600,
    color: "#b36a00",
  },
  deleteBtn: {
    background: "#fce4ec",
    border: "1.5px solid #f48fb1",
    borderRadius: 8,
    padding: "9px 16px",
    cursor: "pointer",
    fontSize: 14,
    fontFamily: "'DM Mono', monospace",
    fontWeight: 600,
    color: "#c62828",
  },
  saveBtn: {
    background: "#e8f5e9",
    border: "1.5px solid #a5d6a7",
    borderRadius: 8,
    padding: "11px 22px",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    fontSize: 14,
    fontWeight: 700,
    color: "#2e7d32",
  },
  cancelBtn: {
    background: "#3a3a3a",
    border: "1.5px solid #555555",
    borderRadius: 8,
    padding: "11px 18px",
    cursor: "pointer",
    fontFamily: "'DM Mono', monospace",
    fontSize: 14,
    color: "#888",
  },
  empty: {
    textAlign: "center",
    padding: "90px 0",
    color: "#666",
  },
  emptyIcon: { fontSize: 64 },
  emptyText: {
    marginTop: 16,
    fontSize: 18,
    fontFamily: "'Lora', serif",
    color: "#666",
  },
};