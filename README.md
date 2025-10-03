

---

# 🌍 Location Assistant Extension

A **Chrome Extension** that helps users **navigate from a start point to a destination**, visualize recommended routes (shortest distance), and track their current location in real-time.
It’s designed for **new movers, travelers, and daily commuters** who want quick, location-aware guidance inside the browser.

---

## 🚀 Features

* 📍 **Location Tracking** – Access and display user’s current location.
* 🧭 **Direction Assistant** – Show routes between two points.
* ⚡ **Shortest Path Suggestion** – Get optimized paths for navigation.
* 💬 **AI-Powered Tips**  – Integrate with **ChatGPT API** for real-time recommendations.
* 🎨 **Modern UI** – Built with **Tailwind CSS** for a clean and responsive interface.
* 🔒 **Privacy-Friendly** – Only stores necessary data locally, no unwanted tracking.

---

## 🛠️ Tech Stack

* **Framework:** [Plasmo](https://www.plasmo.com/) (for Chrome Extension dev)
* **UI:** [Tailwind CSS](https://tailwindcss.com/)
* **Maps & Location:** Google Maps API / OpenStreetMap
* **AI Integration:** OpenAI API (optional)
* **Language:** JavaScript / TypeScript + React

---

## 📂 Project Structure

```
location-assistant-extension/
│── extension/          # Final Chrome extension build
│── src/                # React components & pages
│   ├── popup/          # Extension popup UI
│   ├── options/        # Settings page
│   └── background/     # Background service worker
│── public/             # Icons & assets
│── package.json
│── README.md
│── tailwind.config.js
│── manifest.json       # Chrome extension manifest (v3)
```

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/bayedhaf/location-assistant-extension.git
cd location-assistant-extension
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run in development

```bash
pnpm dev
```

### 4. Build for Chrome

```bash
pnpm build
```

### 5. Load into Chrome

1. Open **chrome://extensions/**
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the `/build` or `/extension` folder

---

## ⚙️ Configuration

* **Maps API Key:** Add your Google Maps or OpenStreetMap key in `.env`

```env
NEXT_PUBLIC_MAPS_API_KEY=your_api_key_here
```

* **OpenAI API Key:**

```env
OPENAI_API_KEY=your_api_key_here
```

---

## 📸 Screenshots

<img width="1366" height="768" alt="chro" src="https://github.com/user-attachments/assets/72376a87-beb0-4642-91d0-c9376f87cb57" />

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to add.

---

## 📜 License

MIT License © 2025 Bayisa

---


