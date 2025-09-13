import type { Project } from "../types";

const KEY = "cf_projects_v1";

export function loadProjects(): Project[] {
    try {
        const raw = localStorage.getItem(KEY);
        return raw ? (JSON.parse(raw) as Project[]) : [];
    } catch {
        return [];
    }
}

export function saveProjects(list: Project[]) {
    localStorage.setItem(KEY, JSON.stringify(list));
}