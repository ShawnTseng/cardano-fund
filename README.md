# Cardano Fund · MVP

A minimal crowdfunding platform built with **Vite + React + TypeScript + Lucid Evolution (Maestro provider)**.

---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd cardano-fund
npm install
```

### 2. Setup Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Edit `.env` and fill in your Maestro API key:
```env
VITE_MAESTRO_API_KEY=your_api_key_here
```

⚠️ `.env` is ignored by Git for security.  
Only `.env.example` is tracked in the repository.

### 3. Run Dev Server
```bash
npm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Features (MVP)
- Create crowdfunding projects (stored in localStorage)
- List all projects
- Connect **Eternl wallet** (CIP-30)
- Basic form validation  
  - Bech32 address format check (e.g. `addr_test1...`)  
  - Deadline must not be in the past

---

## 📦 Tech Stack
- [Vite](https://vitejs.dev/) + React + TypeScript
- [@lucid-evolution/lucid](https://github.com/Anastasia-Labs/lucid-evolution)
- [Maestro](https://maestro.org/) API as blockchain provider

---

## 🔒 Environment Variables
- `VITE_MAESTRO_API_KEY` — Your Maestro API key (Preprod or Mainnet)

---

## 🛣 Roadmap
- [x] Create projects (localStorage)
- [x] Connect Eternl wallet
- [ ] Support ADA donation transactions
- [ ] Show total raised from UTxOs
- [ ] Escrow smart contract (Aiken)
- [ ] Reward mechanism (NFT / token distribution)

---

## 📜 License
MIT
