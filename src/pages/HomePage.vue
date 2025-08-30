<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <!-- Left: Custom Menu Icon -->
        <ion-buttons slot="start">
          <ion-button fill="clear" @click="openMenu">
            <img :src="menuIcon" alt="menu" class="menu-icon" />
          </ion-button>
        </ion-buttons>

        <!-- Center: Crown + Points + Button Image -->
        <ion-title>
          <div class="center-info">
            <img :src="crownIcon" alt="crown" class="crown-icon" />
            <span class="points">120 Points</span>
            <ion-button fill="clear" class="arrow-btn" @click="goToPoints">
              <img :src="pointsBtn" alt="points button" class="points-btn" />
            </ion-button>
          </div>
        </ion-title>

        <!-- Right: Profile Image -->
        <ion-buttons slot="end">
          <ion-button fill="clear">
            <img :src="profileImg" alt="profile" class="profile-img" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding main-content">
      <!-- Logo and Greeting -->
      <div class="greeting-section">
        <img :src="logoRed" alt="logo" class="logo-img" />
        <div class="greeting-text">
          <p class="greeting">Anneayong, Chau!</p>
          <h2 class="question">What do you want to eat?</h2>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-section">
        <ion-searchbar 
          placeholder="try our new Steak Fries Veggies"
          show-clear-button="focus"
          class="custom-searchbar"
        ></ion-searchbar>
      </div>

      <!-- Special Offers Section -->
      <div class="special-offers-section">
        <div class="section-header">
          <h3>Special Offers!</h3>
          <ion-button fill="clear" class="view-all-btn" @click="viewAllOffers">
            View All
            <ion-icon name="chevron-forward" slot="end"></ion-icon>
          </ion-button>
        </div>
        
        <!-- Horizontal Slider for Special Offers -->
        <div class="offers-slider">
          <div class="offer-card" v-for="offer in specialOffers" :key="offer.id">
            <img :src="offer.image" :alt="offer.title" class="offer-image" />
            <div class="offer-content">
              <div class="offer-badge">{{ offer.badge }}</div>
              <h4 class="offer-title">{{ offer.title }}</h4>
              <p class="offer-subtitle">{{ offer.subtitle }}</p>
              <div class="offer-price">{{ offer.price }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Category Section -->
      <div class="category-section">
        <h3 class="category-title">Category</h3>
        <div class="category-grid">
          <div 
            class="category-item" 
            v-for="category in categories" 
            :key="category.id"
            @click="goToCategory(category.id)"
          >
            <img :src="category.image" :alt="category.name" class="category-image" />
            <div class="category-overlay">
              <span class="category-name">{{ category.name }}</span>
            </div>
          </div>
        </div>
        
        <!-- Order Now Button -->
        <ion-button expand="block" class="order-now-btn" @click="orderNow">
          Order Now!
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { menuController } from '@ionic/vue';
import { useRouter } from 'vue-router';

/* ✅ Import assets */
import menuIcon from '../assets/menu-icon.png';
import crownIcon from '../assets/crown-icon.png';
import pointsBtn from '../assets/points-btn.png';
import profileImg from '../assets/profile.jpg';
import logoRed from '../assets/logo-red.png';

// You'll need to add these images to your assets folder
import chickenImg from '../assets/chicken-category.jpg';
import seafoodImg from '../assets/seafood-category.png';
import offerImg1 from '../assets/offer1.png';
import offerImg2 from '../assets/offer2.png';

const router = useRouter();

// Sample data - replace with your actual data
const specialOffers = ref([
  {
    id: 1,
    image: offerImg1,
    badge: 'FRESH FOOD',
    title: 'Delicious',
    subtitle: 'FAST FOOD',
    price: '$16'
  },
  {
    id: 2,
    image: offerImg2,
    badge: 'HOT DEAL',
    title: 'Special',
    subtitle: 'COMBO MEAL',
    price: '$12'
  }
]);

const categories = ref([
  {
    id: 1,
    name: 'Chicken',
    image: chickenImg
  },
  {
    id: 2,
    name: 'Seafoods',
    image: seafoodImg
  }
]);

const openMenu = async () => {
  await menuController.open();
};

const goToPoints = () => {
  router.push('/points');
};

const viewAllOffers = () => {
  router.push('/offers');
};

const goToCategory = (categoryId) => {
  router.push(`/category/${categoryId}`);
};

const orderNow = () => {
  router.push('/order');
};
</script>

<style scoped>
/* ----- Toolbar + Header ----- */
ion-header,
ion-toolbar {
  --background: #ffffff;
  --border-width: 0;
  --border-color: transparent;
  --shadow: none;
  z-index: 10;
}

/* Left menu icon */
.menu-icon {
  width: 40px;
  height: 28px;
}

/* Right profile image */
.profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

/* Center crown + points + button image */
.center-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.crown-icon {
  width: 20px;
  height: 20px;
}

.points {
  font-weight: bold;
  font-size: 14px;
  color: #000000;
}

.arrow-btn {
  --padding-start: 0;
  --padding-end: 0;
  --min-height: auto;
  --color: transparent;
}

.points-btn {
  width: 16px;
  height: 16px;
}

/* ----- Content Sections ----- */
ion-content {
  --background: transparent;
  --padding-top: 0;
  --padding-bottom: 20px;
}

/* Greeting Section */
.greeting-section {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 20px;
  margin-bottom: 24px;
  padding: 0 8px;
}

.logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.greeting-text {
  flex: 1;
}

.greeting {
  margin: 0;
  font-size: 14px;
  color: #666;
  font-weight: normal;
}

.question {
  margin: 4px 0 0 0;
  font-size: 22px;
  font-weight: bold;
  color: #000;
  line-height: 1.3;
}

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
  height: 50px;
}

.custom-searchbar::part(icon) {
  color: #e53e3e !important;
}

/* Special Offers Section */
.special-offers-section {
  margin-bottom: 24px;
  padding: 0 4px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.view-all-btn {
  --color: #e53e3e;
  font-size: 14px;
  font-weight: 500;
}

.offers-slider {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 0 4px 8px 4px;
  margin: 0 -4px;
  scroll-snap-type: x mandatory;
}

.offers-slider::-webkit-scrollbar {
  display: none;
}

.offer-card {
  min-width: 280px;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  scroll-snap-align: start;
  background: linear-gradient(135deg, #e53e3e, #ff6b6b);
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
}

.offer-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.offer-content {
  flex: 1;
}

.offer-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 4px;
  display: inline-block;
}

.offer-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 2px 0;
}

.offer-subtitle {
  font-size: 12px;
  margin: 0 0 8px 0;
  opacity: 0.9;
}

.offer-price {
  font-size: 18px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 6px;
  display: inline-block;
}

/* Category Section */
.category-section {
  margin-bottom: 24px;
  padding: 0 4px;
}

.category-title {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0 0 16px 0;
}

.category-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 20px;
}

.category-item {
  position: relative;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.category-item:hover {
  transform: scale(1.02);
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 16px 12px 12px;
  color: white;
}

.category-name {
  font-size: 16px;
  font-weight: bold;
}

/* Order Now Button */
.order-now-btn {
  --background: #e53e3e;
  --background-activated: #d63031;
  --color: white;
  --border-radius: 12px;
  height: 48px;
  font-weight: bold;
  margin-top: 8px;
}

/* Ensure content is visible and properly positioned */
.main-content {
  background: #f8f9fa !important;
  min-height: 100vh;
}

.ion-padding {
  padding: 16px !important;
}
</style>