import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { saveJournalEntry } from "../utils/journalStorage";
import { Mood } from "../types/journal";
import MoodSelector from "./MoodSelector";

const FormContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background-color: #4a90e2;
  color: white;
  font-size: 1rem;
  border-radius: 8px;

  &:hover {
    background-color: #357bd1;
  }
`;

interface Props {
  onEntryAdded: () => void;
}

const EntryForm = ({ onEntryAdded }: Props) => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState<Mood>("");

  const handleSubmit = () => {
    if (text.trim().length === 0) return;

    const entry = {
      id: uuidv4(),
      content: text,
      createdAt: new Date().toISOString(),
      mood,
    };

    saveJournalEntry(entry);
    setText("");
    setMood("");
    onEntryAdded();
  };

  return (
    <FormContainer>
      <h2>New Journal Entry</h2>
      <TextArea
        placeholder="How are you feeling today?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <MoodSelector selectedMood={mood} onMoodSelect={setMood} />
      <Button onClick={handleSubmit}>Save Entry</Button>
    </FormContainer>
  );
};

export default EntryForm;
