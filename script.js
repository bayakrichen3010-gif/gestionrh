* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f4f7fb;
  --sidebar: #0f172a;
  --sidebar-text: #e2e8f0;
  --sidebar-muted: #94a3b8;
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;
  --purple: #8b5cf6;
  --white: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #e5e7eb;
  --shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: var(--bg);
  color: var(--text);
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, var(--sidebar), #111827);
  color: var(--sidebar-text);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.brand-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--purple));
  display: grid;
  place-items: center;
  font-weight: 800;
  color: var(--white);
}

.brand h1 {
  font-size: 1.5rem;
}

.brand p {
  font-size: 0.72rem;
  color: var(--sidebar-muted);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  color: var(--sidebar-text);
  text-decoration: none;
  background: rgba(255,255,255,0.04);
  padding: 12px 14px;
  border-radius: 10px;
  transition: 0.2s ease;
  border: 1px solid transparent;
}

.nav-item:hover, .nav-item.active {
  background: rgba(37, 99, 235, 0.18);
  border-color: rgba(96, 165, 250, 0.35);
}

.sidebar-footer {
  color: var(--sidebar-muted);
  font-size: 0.8rem;
  text-align: center;
}

.main-content {
  flex: 1;
  padding: 28px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.eyebrow {
  color: var(--muted);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.topbar h2 {
  margin-top: 5px;
  font-size: 2rem;
}

.primary-btn, .secondary-btn {
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--white);
  box-shadow: var(--shadow);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.secondary-btn {
  background: #eef2ff;
  color: var(--text);
}

.section-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--white);
  border-radius: 16px;
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

.stat-card.blue {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
}

.stat-card.green {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
}

.stat-card.orange {
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
}

.stat-card.purple {
  background: linear-gradient(135deg, #f5f3ff, #e9d5ff);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 0.92rem;
  margin-bottom: 16px;
}

.icon {
  font-size: 1.25rem;
}

.stat-card h3 {
  font-size: 2rem;
  margin-bottom: 4px;
}

.stat-card small {
  color: var(--muted);
}

.panel {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  box-shadow: var(--shadow);
  margin-bottom: 28px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.panel-header h3 {
  font-size: 1.5rem;
}

.controls-row {
  display: flex;
  gap: 10px;
  align-items: center;
}

.controls-row input, .controls-row select, .field input, .field select, .field textarea {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
  background: var(--white);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-weight: 600;
  color: var(--text);
}

.field textarea {
  resize: vertical;
  min-height: 110px;
}

.full-width {
  grid-column: span 2;
}

.form-actions {
  display: flex;
  align-items: end;
  justify-content: flex-start;
  gap: 12px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

th, td {
  padding: 12px 14px;
  border-bottom: 1px solid var(--border);
  text-align: left;
}

th {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--muted);
}

tbody tr:hover {
  background: #f8fafc;
}

.action-btn {
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
  margin-right: 8px;
  font-weight: 600;
}

.edit-btn {
  background: #dbeafe;
  color: var(--primary-dark);
}

.delete-btn {
  background: #fee2e2;
  color: #b91c1c;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 18px;
}

.chart-card {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 18px;
}

.chart-card h4 {
  margin-bottom: 14px;
  font-size: 1rem;
}

.full-width {
  grid-column: 1 / -1;
}

canvas {
  max-height: 260px;
}

@media (max-width: 1100px) {
  .section-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  .form-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }
}

@media (max-width: 900px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .nav {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .nav-item {
    flex: 1;
    min-width: 140px;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .main-content {
    padding: 18px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .section-grid, .form-grid, .charts-grid {
    grid-template-columns: 1fr;
  }

  .full-width {
    grid-column: auto;
  }
}

