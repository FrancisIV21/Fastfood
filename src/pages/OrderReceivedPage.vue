<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="success-container">
        <!-- Success Icon -->
        <div class="success-icon-container">
          <img :src="receivedIcon" alt="Order Received" class="success-icon" />
        </div>

        <!-- Success Message -->
        <div class="success-content">
          <h1 class="success-title">Order Received!</h1>
          <div class="order-info">
            <span class="order-text">Your order </span>
            <span class="order-number">No. {{ orderNumber }}</span>
            <span class="order-text"> has successfully take and now being processed. Kindly wait for our notification regarding your order.</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <ion-button 
            expand="block" 
            class="track-order-btn"
            @click="goToTracker"
          >
            Track Order
          </ion-button>
          
          <ion-button 
            expand="block" 
            fill="clear" 
            class="back-home-btn"
            @click="goToHome"
          >
            Back to Home
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import receivedIcon from '@/assets/received-icon.png';

const route = useRoute();
const router = useRouter();

// Generate random order number
const orderNumber = ref('');

// Methods
const goToTracker = () => {
  router.push('/order-tracker');
};

const goToHome = () => {
  router.push('/home');
};

// Generate order number on mount
onMounted(() => {
  // Generate a random order number similar to the image
  orderNumber.value = Math.floor(Math.random() * 90000000 + 10000000).toString();
});
</script>

<style scoped>
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
}

.success-icon-container {
  margin-bottom: 40px;
}

.success-icon {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-top: -100px;
}

.success-content {
  margin-bottom: 60px;
  max-width: 300px;
}

.success-title {
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0 0 20px 0;
}

.order-info {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.order-text {
  color: #666;
}

.order-number {
  color: #d32f2f;
  font-weight: 600;
}

.action-buttons {
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.track-order-btn {
  --background: #d32f2f;
  --color: white;
  --border-radius: 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
}

.back-home-btn {
  --color: #d32f2f;
  height: 56px;
  font-size: 16px;
  font-weight: 500;
}

.back-home-btn::part(native) {
  text-decoration: none;
}
</style>