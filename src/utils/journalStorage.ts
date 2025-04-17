import { JournalEntry } from "../types/journal";

const STORAGE_KEY = "mindspace_journal_entries";

export const getJournalEntries = (): JournalEntry[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveJournalEntry = (entry: JournalEntry): void => {
  const existing = getJournalEntries();
  const updated = [entry, ...existing];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};
