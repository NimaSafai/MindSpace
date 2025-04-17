# 🧠 MindSpace – Journal & Mood Tracker (Frontend Only)

MindSpace is a calming, personal journaling app built with **React + TypeScript** and styled using **Styled Components**. This version focuses solely on the **frontend**, allowing users to write daily journal entries, tag their mood, and revisit past entries — all stored locally in the browser.

---

## ✨ Features

- 📝 Write and save journal entries
- 😄 Select your current mood (happy, sad, anxious, etc.)
- 💾 Entries are saved using `localStorage`
- 🎨 Clean and modern UI with Styled Components

---

## 📸 Preview

> _Add screenshots or a GIF here once you have the UI built!_

---

## 🚀 Tech Stack

- **React** with **TypeScript**
- **Styled Components** for styling
- **localStorage** for data persistence
- **UUID** for unique entry IDs

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mindspace.git
cd mindspace
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

> The app should now be running at `http://localhost:5173` (if using Vite).

---

## 📁 Project Structure

```bash
src/
│
├── components/          # Reusable UI components
│   ├── EntryForm.tsx
│   ├── JournalEntryCard.tsx
│   └── MoodSelector.tsx
│
├── pages/
│   └── JournalPage.tsx  # Main journal feature page
│
├── types/
│   └── journal.ts       # Journal entry & mood types
│
├── utils/
│   └── journalStorage.ts  # Handles localStorage logic
│
└── App.tsx / main.tsx   # App entry point
```

---

## 🧪 Features to Add Next

Here are some suggested next steps:

- ✅ Edit / Delete entries
- 🔍 Filter entries by mood
- 📈 Mood analytics page (charts or calendar view)
- 🔐 Add authentication (if backend is added)
- ☁️ Sync with backend or cloud storage

---

## 📜 License

MIT – Free to use, customize, and grow.

---

## 💬 Feedback / Ideas?

Feel free to open an issue or feature request!

> This is a passion project to grow React + TypeScript skills — have fun building it! 🚀
