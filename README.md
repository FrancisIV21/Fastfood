# Fastfood


fastfood/
├── android/                 # Android native project (Capacitor)
├── ios/                     # iOS native project (Capacitor)
├── public/                  # index.html, static assets
├── src/
│   ├── assets/              # Images, icons
│   ├── components/          # Shared UI components
│   ├── pages/               # Screens (Login, Home, Menu, Cart, Profile)
│   ├── router/              # Vue Router config
│   ├── store/               # Pinia store
│   ├── theme/               # Ionic theme + global styles
│   ├── App.vue              # Root component
│   └── main.ts              # Entry point
├── capacitor.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md

// You'll need to add these images to your assets folder
import chickenImg from '../assets/chicken-category.jpg';
import seafoodImg from '../assets/seafood-category.png';
import offerImg1 from '../assets/offer1.png';
import offerImg2 from '../assets/offer2.png';


/* Search Section */

.search-section {
  margin-bottom: 24px;
  padding: 0 4px;
}

.custom-searchbar {
  --background: #f1f3f4;
  --border-radius: 12px;
  --box-shadow: none;
  --placeholder-color: #999;
  --placeholder-font-style: italic;
  --color: #333;
  --icon-color: #e53e3e;
  height: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 22px;
  width: 380px;
  left: 20px;
}

.custom-searchbar::part(icon) {
  color: #e53e3e !important;
}

/* Order Now Button - Floating */
.order-now-btn {
  --background: #e53e3e;
  --background-activated: #d63031;
  --color: white;
  --border-radius: 25px;
  height: 50px;
  width: 140px;
  font-weight: bold;
  position: absolute;
  bottom: 250px;
  right: 20px;
  z-index: 1000 !important;
  box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  margin: 0;
}