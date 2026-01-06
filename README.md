# 🤖 AI Chatbot 

Chatbot ini merupakan fitur pendukung, dirancang dengan arsitektur **AI-ready** dan **fallback mock mode** agar aplikasi tetap dapat dijalankan meskipun tanpa API eksternal.

---

## ✨ Fitur Chatbot

- UI chatbot modern (bubble chat)
- Mendukung integrasi AI provider (OpenRouter / OpenAI)
- **Mock mode (default)** untuk testing tanpa API
- Fallback otomatis jika AI provider error
- Siap dikembangkan ke AI production

---

## 🧠 Konsep & Arsitektur

Chatbot menggunakan pendekatan **dependency-safe design**, yaitu:

- AI dianggap sebagai **external service**
- Aplikasi **tidak bergantung penuh** pada AI
- Jika AI tidak tersedia → sistem **tetap berjalan normal**

Pendekatan ini umum digunakan pada sistem production untuk menjaga stabilitas aplikasi.

---

## 🔁 Mode Chatbot

### 🟢 Mock Mode (Default & Gratis)
```env
MOCK_AI=true
```

 - Tidak membutuhkan API key
 - Cocok untuk testing & pretest
 - Respon bersifat simulasi
Contoh response:

```csharp
[MOCK MODE] Halo! Kamu bilang: "hai"
```

### 🟢 AI Mode (Optional)

```env
MOCK_AI=false
OPENROUTER_API_KEY=your_api_key_here
```

 - Menggunakan OpenRouter AI
 - Mendukung model free (jika tersedia)
 - Otomatis fallback ke mock jika error / timeout

## ⚙️ Instalasi & Setup

### 1️⃣ Clone Repository

```bash
 git clone https://github.com/RfliFhri/chatbot-testing.git
 cd chatbot-testing
```

## ⚙️ Environment Configuration

### 1️⃣ Buat file `.env`

Salin dari `.env.example`:

```bash
cp .env.example .env
```

### Isi variabel berikut:

```env
PORT=3001
MOCK_AI=true
OPENROUTER_API_KEY=YOUR_API_KEY
```


## ▶️ Menjalankan Chatbot

```bash
npm install
npm run dev
```

### Akses chatbot melalui browser:

 - http://localhost:3001/

## 👤 Author

> Rafli
> Mahasiswa / Web Developer
