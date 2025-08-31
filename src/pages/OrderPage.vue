<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/menu" class="back-button">
            <ion-icon name="chevron-back" class="back-icon"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-title class="center-title">{{ foodItem?.category || 'Food Item' }}</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear">
            <img src="@/assets/red-bag.png" alt="bag" class="bag-icon" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div v-if="foodItem" class="order-container">
        <!-- Food Image -->
        <div class="food-image-container">
          <img :src="foodItem.image" :alt="foodItem.name" class="main-food-image" />
          <!-- Heart button positioned like in the reference image -->
          <button 
            class="image-heart-btn"
            @click="toggleFavorite"
          >
            <ion-icon 
              :icon="isFavorited ? heart : heartOutline" 
              class="image-heart-icon"
            ></ion-icon>
          </button>
        </div>

        <!-- Food Details -->
        <div class="food-details">
          <h1 class="food-title">{{ foodItem.name }}</h1>
          
          <!-- Star Rating -->
          <div class="rating-section">
            <div class="stars">{{ foodItem.stars }}</div>
          </div>

          <!-- Description -->
          <p class="food-description">
            {{ foodItem.description }}
          </p>

          <!-- Price and Quantity -->
          <div class="price-quantity-section">
            <div class="price-display">P {{ foodItem.price }}</div>
            <div class="quantity-controls">
              <ion-button 
                fill="clear" 
                class="quantity-btn minus-btn"
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
              >
                −
              </ion-button>
              <span class="quantity-number">{{ quantity }}</span>
              <ion-button 
                fill="clear" 
                class="quantity-btn plus-btn"
                @click="increaseQuantity"
              >
                +
              </ion-button>
            </div>
          </div>

          <!-- Beverages Section -->
          <div class="beverages-section">
            <h3 class="section-title">Beverages</h3>
            <div class="beverage-selector">
              <span class="beverage-label">Choose Beverages</span>
              <ion-select 
                v-model="selectedBeverage" 
                placeholder="Coke"
                class="beverage-dropdown"
              >
                <ion-select-option value="coke">Coke</ion-select-option>
                <ion-select-option value="sprite">Sprite</ion-select-option>
                <ion-select-option value="orange">Orange Juice</ion-select-option>
                <ion-select-option value="water">Water</ion-select-option>
              </ion-select>
            </div>

            <!-- Size Selection -->
            <div class="size-selection">
              <div class="size-options">
                <button 
                  class="size-btn"
                  :class="{ active: selectedSize === 'regular' }"
                  @click="selectedSize = 'regular'"
                >
                  Regular
                </button>
                <button 
                  class="size-btn"
                  :class="{ active: selectedSize === 'large' }"
                  @click="selectedSize = 'large'"
                >
                  Large
                </button>
                <button 
                  class="size-btn"
                  :class="{ active: selectedSize === 'xlarge' }"
                  @click="selectedSize = 'xlarge'"
                >
                  X-Large
                </button>
              </div>
            </div>
          </div>

          <!-- Add-Ons Section -->
          <div class="addons-section">
            <h3 class="section-title">Add-Ons</h3>
            
            <div class="addon-item">
              <div class="addon-info">
                <div class="addon-image-placeholder tomato"></div>
                <div class="addon-details">
                  <h4 class="addon-name">Tomato Sauce</h4>
                  <p class="addon-category">Sauce</p>
                  <span class="addon-price">P 49</span>
                </div>
              </div>
              <div class="addon-controls">
                <button class="addon-quantity-btn" @click="decreaseAddon('tomato')">−</button>
                <span class="addon-quantity">{{ addonQuantities.tomato }}</span>
                <button class="addon-quantity-btn" @click="increaseAddon('tomato')">+</button>
              </div>
            </div>

            <div class="addon-item">
              <div class="addon-info">
                <div class="addon-image-placeholder rice"></div>
                <div class="addon-details">
                  <h4 class="addon-name">White Rice</h4>
                  <p class="addon-category">Rice</p>
                  <span class="addon-price">P 25</span>
                </div>
              </div>
              <div class="addon-controls">
                <button class="addon-quantity-btn" @click="decreaseAddon('rice')">−</button>
                <span class="addon-quantity">{{ addonQuantities.rice }}</span>
                <button class="addon-quantity-btn" @click="increaseAddon('rice')">+</button>
              </div>
            </div>
          </div>

          <!-- Add to Bag Button -->
          <ion-button 
            expand="block" 
            class="add-to-bag-btn"
            @click="addToBag"
          >
            Add to Bag
          </ion-button>
        </div>
      </div>

      <!-- Loading state -->
      <div v-else class="loading-container">
        <ion-spinner></ion-spinner>
        <p>Loading food item...</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonButton, IonIcon, IonSelect, 
  IonSelectOption, IonSpinner 
} from '@ionic/vue';
import { heart, heartOutline } from 'ionicons/icons';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Import images
import breakfast1 from '@/assets/breakfast1.png';
import breakfast2 from '@/assets/breakfast2.png';
import chicken1 from '@/assets/chicken1.png';
import chicken2 from '@/assets/chicken2.png';
import seafood1 from '@/assets/seafood1.png';
import seafood2 from '@/assets/seafood2.png';
import dessert1 from '@/assets/dessert1.png';
import dessert2 from '@/assets/dessert2.png';
import extra1 from '@/assets/extra1.png';
import extra2 from '@/assets/extra2.png';
import extra3 from '@/assets/extra3.png';
import extra4 from '@/assets/extra4.png';

const route = useRoute();
const router = useRouter();

// Define the food item type
interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  stars: string;
  description: string;
}

// Reactive data
const foodItem = ref<FoodItem | null>(null);
const quantity = ref(1);
const selectedBeverage = ref('coke');
const selectedSize = ref('regular');
const isFavorited = ref(false); // Added missing reactive variable
const addonQuantities = ref({
  tomato: 1,
  rice: 1
});

// Food items data (properly structured object literal)
const foodItems: Record<string, FoodItem> = {
  'american-breakfast': {
    id: 'american-breakfast',
    name: 'American Breakfast',
    category: 'Breakfast',
    price: 150,
    image: breakfast1,
    stars: '⭐⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'filipino-breakfast': {
    id: 'filipino-breakfast',
    name: 'Filipino Breakfast',
    category: 'Breakfast',
    price: 120,
    image: breakfast2,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'fried-chicken': {
    id: 'fried-chicken',
    name: 'Fried Chicken',
    category: 'Chicken',
    price: 175,
    image: chicken1,
    stars: '⭐⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'grilled-chicken': {
    id: 'grilled-chicken',
    name: 'Grilled Chicken',
    category: 'Chicken',
    price: 180,
    image: chicken2,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'fried-fish': {
    id: 'fried-fish',
    name: 'Fried Fish',
    category: 'Seafood',
    price: 200,
    image: seafood1,
    stars: '⭐⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'grilled-salmon': {
    id: 'grilled-salmon',
    name: 'Grilled Salmon',
    category: 'Seafood',
    price: 220,
    image: seafood2,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'chocolate-cake': {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    category: 'Dessert',
    price: 130,
    image: dessert1,
    stars: '⭐⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'cheese-cake': {
    id: 'cheese-cake',
    name: 'Cheese Cake',
    category: 'Dessert',
    price: 110,
    image: dessert2,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'chocolate-frappe': {
    id: 'chocolate-frappe',
    name: 'Chocolate Frappe',
    category: 'Drinks',
    price: 150,
    image: extra1,
    stars: '⭐⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'sundae': {
    id: 'sundae',
    name: 'Sundae',
    category: 'Dessert',
    price: 140,
    image: extra2,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'chocolate-shake': {
    id: 'chocolate-shake',
    name: 'Chocolate Shake',
    category: 'Drinks',
    price: 130,
    image: extra3,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  },
  'coca-cola': {
    id: 'coca-cola',
    name: 'Coca-Cola',
    category: 'Drinks',
    price: 60,
    image: extra4,
    stars: '⭐⭐⭐⭐',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque nunc, tincidunt nec dui ac, rutrum consectetur ligula.'
  }
};

// Methods
const increaseQuantity = () => {
  quantity.value++;
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increaseAddon = (addonType: 'tomato' | 'rice') => {
  addonQuantities.value[addonType]++;
};

const decreaseAddon = (addonType: 'tomato' | 'rice') => {
  if (addonQuantities.value[addonType] > 0) {
    addonQuantities.value[addonType]--;
  }
};

// Added missing toggleFavorite method
const toggleFavorite = () => {
  isFavorited.value = !isFavorited.value;
  console.log('Favorite toggled:', isFavorited.value);
  // You can add additional logic here like saving to a favorites list
};

const addToBag = () => {
  // Create order data
  const orderData = {
    item: foodItem.value,
    quantity: quantity.value,
    beverage: selectedBeverage.value,
    size: selectedSize.value,
    addons: addonQuantities.value,
    isFavorited: isFavorited.value
  };
  
  console.log('Added to bag:', orderData);
  
  // Navigate to order summary page
  router.push({
    name: 'OrderSummary',
    params: {
      orderData: JSON.stringify(orderData)
    }
  });
};

// Load food item on mount
onMounted(() => {
  const itemId = route.params.id as string;
  if (itemId && foodItems[itemId]) {
    foodItem.value = foodItems[itemId];
  } else {
    // Handle case where item is not found
    console.error('Food item not found:', itemId);
    // Optionally redirect back to menu
    // router.push('/menu');
  }
});
</script>

<style scoped>
.custom-toolbar {
  --border-width: 0;
  --border-color: transparent;
  --border-style: none;
  --box-shadow: none;
  --background: #fff;
}

.back-button {
  --color: #000;
}

.back-icon {
  font-size: 24px;
  color: #000;
}

.center-title {
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  color: #000;
}

.bag-icon {
  width: 25px;
  height: 28px;
  margin-right: 4px;
}

.order-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.food-image-container {
  position: relative;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  margin-bottom: 24px;
}

.main-food-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.image-heart-btn {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.image-heart-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.image-heart-icon {
  font-size: 20px;
  color: #d32f2f;
}

.food-details {
  padding: 0 8px;
}

.food-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #000;
}

.rating-section {
  margin-bottom: 16px;
}

.stars {
  font-size: 18px;
  color: #f5a623;
}

.food-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 24px;
}

.price-quantity-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}

.price-display {
  font-size: 28px;
  font-weight: bold;
  color: #d32f2f;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.quantity-btn {
  --color: #d32f2f !important;
  --background: transparent !important;
  --border-radius: 10px;
  width: 40px;
  height: 40px;
  min-height: 40px;
  border: 2px solid #d32f2f !important;
  border-radius: 10px;
  margin: 0;
  font-size: 24px !important;
  font-weight: bold !important;
  color: #d32f2f !important;
  display: flex;
  align-items: center;
  justify-content: center;
  --padding-start: 0px;
  --padding-end: 0px;
  --padding-top: 0px;
  --padding-bottom: 0px;
}

.quantity-btn:disabled {
  --color: #ccc !important;
  border-color: #ccc !important;
  color: #ccc !important;
}

.quantity-number {
  font-size: 18px;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.beverages-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #000;
}

.beverage-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f8f8;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
}

.beverage-label {
  font-size: 16px;
  color: #333;
}

.beverage-dropdown {
  --placeholder-color: #d32f2f;
  --color: #d32f2f;
  font-weight: 500;
}

.add-to-bag-btn {
  --background: #d32f2f;
  --color: white;
  --border-radius: 12px;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
}

.addons-section {
  text-align: center;
  padding: 16px 0;
}

.addons-text {
  font-size: 16px;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
}

.size-selection {
  margin-top: 16px;
}

.size-options {
  display: flex;
  gap: 8px;
}

.size-btn {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.size-btn.active {
  background: #ffa500;
  border-color: #ffa500;
  color: white;
}

.addons-section {
  margin-bottom: 32px;
}

.addon-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f0f0f0;
  border-radius: 12px;
  margin-bottom: 12px;
}

.addon-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.addon-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
}

.addon-image-placeholder {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.addon-image-placeholder.tomato {
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.addon-image-placeholder.rice {
  background: linear-gradient(135deg, #f8f8f8, #e8e8e8);
  color: #666;
}

.addon-image-placeholder.tomato::before {
  content: "🍅";
}

.addon-image-placeholder.rice::before {
  content: "🍚";
}

.addon-details h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.addon-details p {
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #666;
}

.addon-price {
  font-size: 14px;
  font-weight: bold;
  color: #d32f2f;
}

.addon-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.addon-quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #d32f2f;
  border-radius: 6px;
  background: transparent;
  color: #d32f2f;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.addon-quantity-btn:disabled {
  border-color: #ccc;
  color: #ccc;
}

.addon-quantity {
  font-size: 16px;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  gap: 16px;
}

.loading-container p {
  color: #666;
  font-size: 16px;
}
</style>