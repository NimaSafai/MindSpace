import styled from "styled-components";
import { JournalEntry } from "../types/journal";

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const DateText = styled.div`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.5rem;
`;

const EntryText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const MoodTag = styled.span`
  display: inline-block;
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

const moodEmojis: Record<JournalEntry["mood"], string> = {
  happy: "😄",
  sad: "😢",
  anxious: "😰",
  angry: "😠",
  neutral: "😐",
  "": "",
};

interface Props {
  entry: JournalEntry;
}

const JournalEntryCard = ({ entry }: Props) => {
  const date = new Date(entry.createdAt).toLocaleString();
  return (
    <Card>
      <DateText>{date}</DateText>
      <MoodTag>{moodEmojis[entry.mood]}</MoodTag>
      <EntryText>{entry.content}</EntryText>
    </Card>
  );
};

export default JournalEntryCard;
