import { useState, useEffect } from "react";
import styled from "styled-components";
import { JournalEntry } from "../types/journal";
import { getJournalEntries } from "../utils/journalStorage";
import EntryForm from "../components/EntryForm";
import JournalEntryCard from "../components/JournalEntryCard";

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const JournalPage = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const loadEntries = () => {
    const stored = getJournalEntries();
    setEntries(stored);
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <PageContainer>
      <EntryForm onEntryAdded={loadEntries} />
      {entries.length === 0 ? (
        <p>No entries added yet. Start by writing one above!</p>
      ) : (
        entries.map((entry) => (
          <JournalEntryCard key={entry.id} entry={entry} />
        ))
      )}
    </PageContainer>
  );
};

export default JournalPage;
