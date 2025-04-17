import styled from "styled-components";
import { Mood } from "../types/journal";

const moods: { mood: Mood; label: string; emoji: string }[] = [
  { mood: "happy", label: "Happy", emoji: "😄" },
  { mood: "sad", label: "Sad", emoji: "😢" },
  { mood: "anxious", label: "Anxious", emoji: "😰" },
  { mood: "angry", label: "Angry", emoji: "😠" },
  { mood: "neutral", label: "Neutral", emoji: "😐" },
];

const MoodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const MoodButton = styled.button<{ selected: boolean }>`
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: ${({ selected }) =>
    selected ? "2px solid #4a90e2" : "1px solid #ccc"};
  background: ${({ selected }) => (selected ? "#e6f0ff" : "white")};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface Props {
  selectedMood: Mood;
  onMoodSelect: (mood: Mood) => void;
}

const MoodSelector = ({ selectedMood, onMoodSelect }: Props) => {
  return (
    <MoodContainer>
      {moods.map((m) => (
        <MoodButton
          key={m.mood}
          selected={selectedMood === m.mood}
          onClick={() => onMoodSelect(m.mood)}
          title={m.label}
        >
          {m.emoji}
        </MoodButton>
      ))}
    </MoodContainer>
  );
};

export default MoodSelector;
