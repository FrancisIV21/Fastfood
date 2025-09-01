<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-buttons slot="start">
          <ion-menu-button :auto-hide="false">
            <img src="@/assets/menu-icon.png" alt="menu" class="menu-icon" />
          </ion-menu-button>
        </ion-buttons>
        <ion-title class="left-title">Our Foods</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear">
            <img src="@/assets/red-bag.png" alt="bag" class="bag-icon" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Search Bar - Updated -->
      <div class="search-container">
        <ion-searchbar 
          placeholder="try our new Beef Bibimbowl"
          show-clear-button="focus"
          class="custom-searchbar"
        ></ion-searchbar>
        <img src="@/assets/red-filter-icon.png" alt="filter" class="filter-icon" />
      </div>

      <!-- Category Slider -->
      <div class="categories-scroll">
        <div 
          v-for="cat in categories" 
          :key="cat"
          :class="['category-card', selectedCategory === cat ? 'active' : '']"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </div>
      </div>

      <!-- Food Grid -->
      <div class="food-scroll">
        <div class="food-grid">

          <!-- Breakfast -->
          <div class="food-card" @click="navigateToOrder('american-breakfast')">
            <img src="@/assets/breakfast1.png" alt="American Breakfast" class="food-img" />
            <div class="food-info">
              <h3>American Breakfast</h3>
              <p>Breakfast</p>
              <p class="price">P 150</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('filipino-breakfast')">
            <img src="@/assets/breakfast2.png" alt="Filipino Breakfast" class="food-img" />
            <div class="food-info">
              <h3>Filipino Breakfast</h3>
              <p>Breakfast</p>
              <p class="price">P 120</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <!-- Chicken -->
          <div class="food-card" @click="navigateToOrder('fried-chicken')">
            <img src="@/assets/chicken1.png" alt="Fried Chicken" class="food-img" />
            <div class="food-info">
              <h3>Fried Chicken</h3>
              <p>Chicken</p>
              <p class="price">P 175</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('grilled-chicken')">
            <img src="@/assets/chicken2.png" alt="Grilled Chicken" class="food-img" />
            <div class="food-info">
              <h3>Grilled Chicken</h3>
              <p>Chicken</p>
              <p class="price">P 180</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <!-- Seafood -->
          <div class="food-card" @click="navigateToOrder('fried-fish')">
            <img src="@/assets/seafood1.png" alt="Fried Fish" class="food-img" />
            <div class="food-info">
              <h3>Fried Fish</h3>
              <p>Seafood</p>
              <p class="price">P 200</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('grilled-salmon')">
            <img src="@/assets/seafood2.png" alt="Grilled Salmon" class="food-img" />
            <div class="food-info">
              <h3>Grilled Salmon</h3>
              <p>Seafood</p>
              <p class="price">P 220</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <!-- Dessert -->
          <div class="food-card" @click="navigateToOrder('chocolate-cake')">
            <img src="@/assets/dessert1.png" alt="Chocolate Cake" class="food-img" />
            <div class="food-info">
              <h3>Chocolate Cake</h3>
              <p>Dessert</p>
              <p class="price">P 130</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('cheese-cake')">
            <img src="@/assets/dessert2.png" alt="Cheese Cake" class="food-img" />
            <div class="food-info">
              <h3>Cheese Cake</h3>
              <p>Dessert</p>
              <p class="price">P 110</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <!-- Extras / Other -->
          <div class="food-card" @click="navigateToOrder('chocolate-frappe')">
            <img src="@/assets/extra1.png" alt="Chocolate Frappe" class="food-img" />
            <div class="food-info">
              <h3>Chocolate Frappe</h3>
              <p>Drinks</p>
              <p class="price">P 150</p>
              <div class="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('sundae')">
            <img src="@/assets/extra2.png" alt="Sundae" class="food-img" />
            <div class="food-info">
              <h3>Sundae</h3>
              <p>Dessert</p>
              <p class="price">P 140</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('chocolate-shake')">
            <img src="@/assets/extra3.png" alt="Chocolate Shake" class="food-img" />
            <div class="food-info">
              <h3>Chocolate Shake</h3>
              <p>Drinks</p>
              <p class="price">P 130</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

          <div class="food-card" @click="navigateToOrder('coca-cola')">
            <img src="@/assets/extra4.png" alt="Coca-Cola" class="food-img" />
            <div class="food-info">
              <h3>Coca-Cola</h3>
              <p>Drinks</p>
              <p class="price">P 60</p>
              <div class="stars">⭐⭐⭐⭐</div>
            </div>
          </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonMenuButton, IonSearchbar, IonButton 
} from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const categories = ["All", "Breakfast", "Chicken", "Seafood", "Dessert", "Drinks"];
const selectedCategory = ref("All");

// Navigation method
const navigateToOrder = (itemId: string) => {
  router.push(`/order/${itemId}`);
};
</script>

<style scoped>
.custom-toolbar {
  --border-width: 0;
  --border-color: transparent;
  --border-style: none;
  --box-shadow: none;
  --background: #fff;
}
.left-title {
  text-align: left;
  margin-left: -20px; 
  font-weight: 600;
  font-size: 24px;
  margin-top: 3px;
}
.menu-icon {
  width: 40px;
  height: 28px;
}
.bag-icon {
  width: 25px;
  height: 28px;
  margin-right: 4px;
}

/* Updated Search Bar Styles */
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 11px auto 14px auto;
  width: 90%;
  max-width: 350px;
}

.custom-searchbar {
  --background: #ffffff;
  --border-radius: 25px;
  --placeholder-color: #999;
  --placeholder-font-style: normal;
  --icon-color: #e53e3e;
  --color: #333;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0;
  --padding-end: 50px;
}

.custom-searchbar::part(native) {
  border-radius: 25px;
}

.custom-searchbar::part(icon) {
  color: #e53e3e !important;
}

.filter-icon {
  position: absolute;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
  z-index: 10;
}

.categories-scroll {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 4px 14px 8px;
  scrollbar-width: none;
}
.categories-scroll::-webkit-scrollbar { display: none; }
.category-card {
  min-width: 90px;
  height: 45px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: 0.25s;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border: 1px solid #ccc;
  background: #f2f2f2;
  color: #555;
}
.category-card.active {
  background: #d32f2f;
  color: #fff;
  transform: translateY(-2px);
}
.food-scroll {
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  padding-bottom: 16px;
}
.food-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px;
  justify-content: center;
}
.food-card {
  background: #e6e6e6;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #d8d8d8;
  width: 180px;
  height: 250px;
  margin: auto;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.food-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.food-card:active {
  transform: translateY(0px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.food-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 6px;
}
.food-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 4px 0;
}
.food-info p {
  margin: 2px 0;
  color: #666;
}
.price {
  font-weight: bold;
  color: #d32f2f;
}
.stars {
  font-size: 14px;
  color: #f5a623;
}
</style>