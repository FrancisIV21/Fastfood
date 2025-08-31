<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Loyalty Points</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- Tier Section -->
      <div class="tier-section">
        <div class="tier-header">
          <div class="crown-icon">👑</div>
          <div class="tier-info">
            <h2>Beginner Tier</h2>
            <p>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
          </div>
          <ion-button fill="clear" color="danger" class="view-all-btn">
            View All
            <ion-icon name="chevron-forward" slot="end"></ion-icon>
          </ion-button>
        </div>

        <!-- Progress Circle -->
        <div class="progress-container">
          <div class="progress-circle">
            <svg viewBox="0 0 120 120" class="progress-svg">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#ffebee"
                stroke-width="8"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#ff5252"
                stroke-width="8"
                stroke-dasharray="314.16"
                stroke-dashoffset="314.16"
                stroke-linecap="round"
                class="progress-bar"
              />
            </svg>
            <div class="progress-text">
              <div class="points">0 / 160</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Rewards Section -->
      <div class="rewards-section">
        <div class="rewards-header">
          <h3>Rewards</h3>
          <ion-button fill="clear" color="danger" class="how-it-works-btn">
            How it Works
            <ion-icon name="chevron-forward" slot="end"></ion-icon>
          </ion-button>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <ion-segment value="all" class="custom-segment">
            <ion-segment-button value="all" class="active-tab">
              <ion-label>All</ion-label>
            </ion-segment-button>
            <ion-segment-button value="beginner">
              <ion-label>Beginner</ion-label>
            </ion-segment-button>
            <ion-segment-button value="intermediate">
              <ion-label>Intermediate</ion-label>
            </ion-segment-button>
            <ion-segment-button value="loyal">
              <ion-label>Loyal</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>

        <!-- Reward Item -->
        <div class="reward-item">
          <div class="reward-image">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzRDQUY1MCIvPgo8cGF0aCBkPSJNMTUgMjBMMjUgMzBMMzUgMTVNNDAgMjBINTBNNDAgMjVINDciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Food item" />
          </div>
          <div class="reward-details">
            <h4>Steak Fries Veggies</h4>
            <p class="reward-category">Meat</p>
            <div class="reward-points">
              <span class="crown-small">👑</span>
              <span class="points-text">20 points</span>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/vue';
import { chevronForward } from 'ionicons/icons';
</script>

<style scoped>
.tier-section {
  margin-bottom: 32px;
}

.tier-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.crown-icon {
  font-size: 24px;
  margin-right: 12px;
  margin-top: 4px;
}

.tier-info {
  flex: 1;
  margin-right: 12px;
}

.tier-info h2 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.tier-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.view-all-btn {
  --color: #ff5252;
  font-size: 14px;
  font-weight: 500;
}

.progress-container {
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-bar {
  transition: stroke-dashoffset 0.5s ease-in-out;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.points {
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.rewards-section {
  background: #fff;
}

.rewards-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.rewards-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.how-it-works-btn {
  --color: #ff5252;
  font-size: 14px;
  font-weight: 500;
}

.filter-tabs {
  margin-bottom: 24px;
}

.custom-segment {
  background: #f5f5f5;
  border-radius: 24px;
  padding: 4px;
}

.custom-segment ion-segment-button {
  --background: transparent;
  --background-checked: #ff5252;
  --color: #666;
  --color-checked: #fff;
  border-radius: 20px;
  margin: 0 2px;
  font-size: 14px;
  font-weight: 500;
}

.active-tab {
  --background: #ff5252 !important;
  --color: #fff !important;
}

.reward-item {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
}

.reward-image {
  width: 60px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
  background: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.reward-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.reward-details {
  flex: 1;
}

.reward-details h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.reward-category {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #666;
}

.reward-points {
  display: flex;
  align-items: center;
}

.crown-small {
  font-size: 16px;
  margin-right: 6px;
}

.points-text {
  font-size: 14px;
  font-weight: 600;
  color: #ff5252;
}

/* Custom styling for active segment */
ion-segment-button.segment-button-checked {
  --background: #ff5252;
  --color: #fff;
}
</style>