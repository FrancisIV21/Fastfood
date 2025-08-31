<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="custom-toolbar">
        <ion-buttons slot="start">
          <ion-back-button default-href="/menu" class="back-button">
            <ion-icon name="chevron-back" class="back-icon"></ion-icon>
          </ion-back-button>
        </ion-buttons>
        <ion-title class="center-title">Order Summary</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" class="options-btn">
            <ion-icon name="ellipsis-vertical" class="options-icon"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="summary-container">
        <!-- Customer Info -->
        <div class="info-card">
          <div class="info-header">
            <h3 class="info-title">{{ customerInfo.name }}</h3>
            <ion-button fill="clear" class="edit-btn">
              <ion-icon name="ellipsis-vertical" class="edit-icon"></ion-icon>
            </ion-button>
          </div>
          <p class="info-detail">{{ customerInfo.phone }}</p>
          <p class="info-detail">{{ customerInfo.email }}</p>
        </div>

        <!-- Home Address -->
        <div class="info-card">
          <div class="info-header">
            <h3 class="info-title">My Home Address</h3>
            <div class="address-indicator"></div>
            <ion-button fill="clear" class="edit-btn">
              <ion-icon name="ellipsis-vertical" class="edit-icon"></ion-icon>
            </ion-button>
          </div>
          <p class="info-detail">{{ addresses.home.street }}</p>
          <p class="info-detail">{{ addresses.home.city }}</p>
        </div>

        <!-- Work/Office Address -->
        <div class="info-card">
          <div class="info-header">
            <h3 class="info-title">Work/Office</h3>
            <div class="work-indicator"></div>
            <ion-button fill="clear" class="edit-btn">
              <ion-icon name="ellipsis-vertical" class="edit-icon"></ion-icon>
            </ion-button>
          </div>
          <p class="info-detail">{{ addresses.work.street }}</p>
          <p class="info-detail">{{ addresses.work.city }}</p>
        </div>

        <!-- Orders Section -->
        <div class="orders-section">
          <h2 class="orders-title">Orders</h2>
          
          <div v-for="order in orders" :key="order.id" class="order-item">
            <div class="order-content">
              <img :src="order.image" :alt="order.name" class="order-image" />
              <div class="order-details">
                <h4 class="order-name">{{ order.name }}</h4>
                <div class="order-items">
                  <p v-for="item in order.items" :key="item" class="order-item-detail">
                    {{ item }}
                  </p>
                </div>
              </div>
              <ion-button fill="clear" class="order-edit-btn">
                <ion-icon name="ellipsis-vertical" class="order-edit-icon"></ion-icon>
              </ion-button>
            </div>
            
            <div class="order-footer">
              <div class="order-price">P {{ order.price }}</div>
              <div class="quantity-controls">
                <button 
                  class="quantity-btn"
                  @click="decreaseOrderQuantity(order.id)"
                  :disabled="order.quantity <= 1"
                >
                  −
                </button>
                <span class="quantity-number">{{ order.quantity }}</span>
                <button 
                  class="quantity-btn"
                  @click="increaseOrderQuantity(order.id)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment Section -->
        <div class="payment-section">
          <h2 class="payment-title">Payment Option</h2>
          <div class="payment-summary">
            <div class="grand-total">
              <span class="total-label">Grand Total</span>
              <span class="total-amount">P {{ grandTotal }}</span>
            </div>
          </div>
        </div>

        <!-- Place Order Button -->
        <ion-button 
          expand="block" 
          class="place-order-btn"
          @click="placeOrder"
        >
          Place Order
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonButtons, IonBackButton, IonButton, IonIcon
} from '@ionic/vue';
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Import images (you'll need to import the actual food images)
import chicken1 from '@/assets/chicken1.png';

const route = useRoute();
const router = useRouter();

// Customer info
const customerInfo = ref({
  name: 'Chou Tzuyu',
  phone: '+63 912 345 6789',
  email: 'chou.tzu-yu@email.com'
});

// Addresses
const addresses = ref({
  home: {
    street: 'No. 21 St. Agustin Street, Brgy. De Jose',
    city: 'Delgado City 2234 Philippines'
  },
  work: {
    street: '3rd flr Anyeong Bldg. Seareal St. Joaqin',
    city: 'City 3456 Philippines'
  }
});

// Orders data
const orders = ref([
  {
    id: 'steak-fries-veggies',
    name: 'Steak Fries Veggies',
    image: chicken1, // Replace with actual steak image
    items: [
      '1x Tomato Sauce',
      '1x Regular Coke',
      '1x Fried Chicken'
    ],
    price: 185,
    quantity: 1
  }
]);

// Computed grand total
const grandTotal = computed(() => {
  return orders.value.reduce((total, order) => {
    return total + (order.price * order.quantity);
  }, 0);
});

// Methods
const increaseOrderQuantity = (orderId: string) => {
  const order = orders.value.find(o => o.id === orderId);
  if (order) {
    order.quantity++;
  }
};

const decreaseOrderQuantity = (orderId: string) => {
  const order = orders.value.find(o => o.id === orderId);
  if (order && order.quantity > 1) {
    order.quantity--;
  }
};

const placeOrder = () => {
  console.log('Placing order:', {
    customer: customerInfo.value,
    orders: orders.value,
    total: grandTotal.value
  });
  
  // Navigate to order received page
  router.push('/order-received');
};

// Check if order data was passed from OrderPage
onMounted(() => {
  // You can receive order data from route params or state management
  const orderData = route.params.orderData;
  if (orderData) {
    // Handle incoming order data
    console.log('Received order data:', orderData);
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

.options-btn {
  --color: #000;
}

.options-icon {
  font-size: 20px;
  color: #000;
}

.summary-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

.info-card {
  background: #f0f0f0;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  position: relative;
}

.info-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  position: relative;
}

.info-title {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0;
}

.address-indicator {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #ffa500;
  border-radius: 50%;
}

.work-indicator {
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: #ff6b6b;
  border-radius: 50%;
}

.edit-btn {
  --color: #ffa500;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
}

.edit-icon {
  font-size: 16px;
  color: #ffa500;
}

.info-detail {
  font-size: 14px;
  color: #666;
  margin: 2px 0;
  line-height: 1.4;
}

.orders-section {
  margin: 32px 0;
}

.orders-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}

.order-item {
  background: #f0f0f0;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
}

.order-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.order-image {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
}

.order-details {
  flex: 1;
}

.order-name {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin: 0 0 8px 0;
}

.order-items {
  margin: 0;
}

.order-item-detail {
  font-size: 12px;
  color: #666;
  margin: 2px 0;
  line-height: 1.3;
}

.order-edit-btn {
  --color: #ffa500;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.order-edit-icon {
  font-size: 16px;
  color: #ffa500;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-price {
  font-size: 18px;
  font-weight: bold;
  color: #d32f2f;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid #d32f2f;
  border-radius: 6px;
  background: transparent;
  color: #d32f2f;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.quantity-btn:hover {
  background: #d32f2f;
  color: white;
}

.quantity-btn:disabled {
  border-color: #ccc;
  color: #ccc;
  cursor: not-allowed;
}

.quantity-btn:disabled:hover {
  background: transparent;
  color: #ccc;
}

.quantity-number {
  font-size: 16px;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.payment-section {
  margin: 32px 0 24px 0;
}

.payment-title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 20px;
}

.payment-summary {
  background: #f0f0f0;
  border-radius: 16px;
  padding: 20px;
}

.grand-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total-label {
  font-size: 16px;
  color: #000;
  font-weight: 500;
}

.total-amount {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}

.place-order-btn {
  --background: #d32f2f;
  --color: white;
  --border-radius: 12px;
  height: 56px;
  font-size: 18px;
  font-weight: 600;
  margin: 24px 0;
}
</style>