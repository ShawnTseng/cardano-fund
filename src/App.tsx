import { useEffect, useState } from "react";
import type { Project } from "./types";
import { loadProjects } from "./lib/storage";
import CreateProjectForm from "./components/CreateProjectForm";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(loadProjects());
  }, []);

  return (
    <div style={{ padding: 24, display: "grid", gap: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 800 }}>AdaFund · MVP</h1>

      <CreateProjectForm onCreated={() => setProjects(loadProjects())} />

      <section style={{ display: "grid", gap: 12 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>專案列表</h2>
        {projects.length === 0 ? (
          <div style={{ color: "#666" }}>尚無專案，請先建立一個。</div>
        ) : (
          projects.map((p) => (
            <div key={p.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <strong>{p.title}</strong>
                <small style={{ color: "#666" }}>截止：{p.deadline}</small>
              </div>
              {p.description && <p style={{ marginTop: 8 }}>{p.description}</p>}
              <div style={{ marginTop: 8, fontSize: 14, color: "#444" }}>
                目標：{p.targetAda} ADA
              </div>
              <div style={{ marginTop: 4, fontSize: 12, color: "#666" }}>
                收款：{p.recipientAddress}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default App
