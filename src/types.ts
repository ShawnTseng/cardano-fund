export type Project = {
    id: string;
    title: string;
    description?: string;
    targetAda: number;
    deadline: string;       // ISO date string (YYYY-MM-DD)
    recipientAddress: string;
    createdAt: string;      // ISO datetime
};