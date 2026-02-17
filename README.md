# 🎹 Piano With Alex (Piano Teacher Website)

A modern, multi-language landing page for Alexander Minulin, a professional piano teacher based in Tel Aviv. 
This project was built to help new students discover the studio, view the gallery, and book lessons easily via WhatsApp.





---

## ✨ Key Features

* **🌍 Multi-Language Support:** Full translation for Hebrew (RTL), English (LTR), and Russian (LTR).
* **📱 Fully Responsive:** Optimized for all devices, from mobile phones to wide desktop screens.
* **💬 Direct Conversion:** "Book Now" buttons integrate directly with the WhatsApp API, pre-filling messages in the correct language.
* **🎞️ Infinite Gallery:** A smooth, auto-scrolling marquee gallery powered by Framer Motion.
* **📍 Location Services:** Interactive Google Maps embed and Waze-friendly address display.
* **🎨 Modern UI:** Glassmorphism effects, sticky navigation, and smooth scroll animations.

---

## 🛠️ Tech Stack

* **Framework:** React 18 + Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Deployment:** Netlify

---

## 🚀 How to Run Locally

If you want to clone and run this project on your own computer:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/piano-teacher-site.git](https://github.com/YOUR_USERNAME/piano-teacher-site.git)
    cd piano-teacher-site
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

---

## 📂 Project Structure

```text
src/
├── assets/          # Images (Alex's photos, background, etc.)
├── components/      
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Services, Gallery, Reviews
│   └── ui/          # Reusable UI elements (WhatsApp Float)
├── data/            
│   └── content.js   # The "Brain" - contains all text for 3 languages
├── App.jsx          # Main layout and language state logic
└── main.jsx         # Entry point

