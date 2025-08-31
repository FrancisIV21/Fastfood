<template>
  <ion-app>
    <!-- Side menu (hidden on login/signup/splash) -->
    <ion-menu
      v-if="$route.name !== 'Login' && $route.name !== 'Signup' && $route.name !== 'Splash'"
      content-id="main-content"
      class="custom-menu"
      :animation="customMenuAnimation"
    >
      <ion-content class="menu-content">
        <!-- ✅ Profile Section -->
        <div class="profile-section">
          <ion-avatar class="profile-avatar">
            <img src="./assets/profile.jpg" alt="Profile" />
          </ion-avatar>

          <div class="profile-info">
            <div class="profile-header">
              <p class="username">Francis Ian </p>
              <img src="./assets/crown-icon.png" alt="Crown" class="crown-icon" />
              
              <!-- ✅ Points Button (active if route = /points) -->
              <ion-button
                fill="clear"
                size="small"
                class="points-btn"
                router-link="/points"
                :class="{ active: $route.path === '/points' }"
              >
                0 Points
              </ion-button>
            </div>
            <p class="email">Francisverylongemailaddress@example.com</p>
          </div>
        </div>

        <!-- ✅ Menu Items -->
        <div class="menu-items">
          <ion-menu-toggle :auto-hide="false" v-for="(item, index) in menuItems" :key="index">
            <ion-item
              :router-link="item.path"
              lines="none"
              :detail="false"
              class="menu-item"
              :class="{ 'item-active': $route.path === item.path }"
            >
              <!-- Show logo for Home, otherwise show the ion-icon -->
              <template v-if="item.label === 'Home'">
                <img src="./assets/logo-red.png" alt="Logo" class="home-logo" />
              </template>
              <template v-else>
                <ion-icon :icon="item.icon" slot="start" />
              </template>

              <span>{{ item.label }}</span>
              <ion-badge v-if="item.badge" :color="item.badgeColor" slot="end">{{ item.badge }}</ion-badge>
            </ion-item>
          </ion-menu-toggle>
        </div>

        <!-- ✅ Logout -->
        <div class="logout-section">
          <ion-button expand="block" color="danger" router-link="/login">Logout</ion-button>
        </div>
      </ion-content>
    </ion-menu>

    <!-- Main router outlet with fade transition -->
    <div id="main-content">
      <transition name="fade" mode="out-in">
        <ion-router-outlet :key="$route.fullPath" />
      </transition>
    </div>
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonContent,
  IonItem,
  IonAvatar,
  IonMenuToggle,
  IonIcon,
  IonButton,
  IonBadge,
} from "@ionic/vue";

import {
  fastFoodOutline,
  notificationsOutline,
  pinOutline,
  helpCircleOutline,
  bagOutline,
  personCircleOutline,
  heartOutline,
  navigateOutline,
  timeOutline,
} from "ionicons/icons";

import customMenuAnimation from "./animations/menuAnimation";

const menuItems = [
  { label: "Home", path: "/home", icon: null },
  { label: "Order Now!", path: "/menu", icon: fastFoodOutline },
  { label: "Notifications", path: "/notifications", icon: notificationsOutline, badge: "3", badgeColor: "warning" },
  { label: "Store Locator", path: "/store-locator", icon: pinOutline },
  { label: "FAQ's", path: "/faqs", icon: helpCircleOutline },
  { label: "My Orders", path: "/my-orders", icon: bagOutline, badge: "2", badgeColor: "warning" },
  { label: "My Account", path: "/profile", icon: personCircleOutline },
  { label: "My Favorites", path: "/favorites", icon: heartOutline },
  { label: "Order Tracker", path: "/order-tracker", icon: navigateOutline },
  { label: "Order History", path: "/order-history", icon: timeOutline },
];
</script>

<style>
/* ✅ Force white background */
ion-app,
ion-router-outlet,
.ion-page,
ion-content {
  --background: #ffffff !important;
  background: #ffffff !important;
}

/* Prevent white flash when menu closes */
ion-menu::part(backdrop) {
  background: rgba(0, 0, 0, 0.1) !important;
}
ion-menu::part(container) {
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(20px) !important;
}

/* Fade transition for page changes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ✅ Profile section */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 8px;
}

.profile-info {
  width: 100%;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

.username {
  font-weight: bold;
  font-size: 16px;
  color: #000;
  max-width: 120px; /* ✅ adjust depending on sidebar width */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.crown-icon {
  width: 30px;
  height: 20%;
  margin-top: -120px;
}

/* ✅ Points button active style */
.points-btn {
  font-size: 15px;
  font-weight: bold;
  color: #000;
  text-transform: none;
  margin-left: 10px;
  margin-top: -110px;
  --padding-start: 4px;
  --padding-end: 4px;
  transition: color 0.2s ease;
}
.points-btn.active {
  color: #e60000; /* red when active */
}

/* Email */
.email {
  font-size: 13px;
  color: #555;
  margin-top: -10px;
  max-width: 150px; /* ✅ ensures email doesn’t overflow */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Menu items */
.menu-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.menu-items {
  flex: 1;
}
.menu-item {
  --background: transparent;
  color: #000;
  transition: background-color 0.2s ease, color 0.2s ease;
  border-radius: 8px;
}

/* Active red state */
.menu-item.item-active {
  --background: rgba(230, 0, 0, 0.1);
  color: #e60000;
}
.menu-item.item-active ion-icon {
  color: #e60000;
}

.menu-item ion-icon {
  color: rgb(187, 187, 187);
}
.menu-item span {
  margin-left: 10px;
}

.home-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
  margin-right: 10px;
}

/* Logout button */
.logout-section {
  padding: 15px;
}
</style>
