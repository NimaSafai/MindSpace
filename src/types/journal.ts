export type Mood = "happy" | "sad" | "anxious" | "angry" | "neutral" | "";

export interface JournalEntry {
  id: string;
  content: string;
  createdAt: string;
  mood: Mood;
}
