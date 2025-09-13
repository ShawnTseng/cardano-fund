import { useState } from "react";
import type { Project } from "../types";
import { loadProjects, saveProjects } from "../lib/storage";

type Props = { onCreated?: (p: Project) => void };

export default function CreateProjectForm({ onCreated }: Props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [targetAda, setTargetAda] = useState<number>(5);
    const [deadline, setDeadline] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");

    function validate(): string | null {
        if (!title.trim()) return "請輸入專案名稱";
        if (!recipientAddress.trim()) return "請輸入收款地址（testnet）";
        if (!deadline) return "請選擇截止日期";
        if (!targetAda || targetAda <= 0) return "目標金額需 > 0";
        return null;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const err = validate();
        if (err) {
            alert(err);
            return;
        }
        const p: Project = {
            id: crypto.randomUUID(),
            title: title.trim(),
            description: description.trim() || undefined,
            targetAda: Number(targetAda),
            deadline,
            recipientAddress: recipientAddress.trim(),
            createdAt: new Date().toISOString(),
        };
        const next = [p, ...loadProjects()];
        saveProjects(next);
        onCreated?.(p);
        // reset
        setTitle("");
        setDescription("");
        setTargetAda(5);
        setDeadline("");
        setRecipientAddress("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 640 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700 }}>建立專案（MVP）</h2>

            <input
                placeholder="專案名稱"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="簡短描述（選填）"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                min={1}
                step={1}
                placeholder="目標金額（ADA）"
                value={targetAda}
                onChange={(e) => setTargetAda(Number(e.target.value))}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <input
                placeholder="收款地址（Preprod）"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
            />

            <button type="submit">建立專案</button>

            <small style={{ color: "#666" }}>
                備註：目前僅存本地（localStorage）。下一步再接鏈上互動與進度顯示。
            </small>
        </form>
    );
}