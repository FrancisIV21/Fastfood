<template>
  <ion-app>
    <!-- Side menu (hidden on login/signup/splash) -->
    <ion-menu
      v-if="$route.name !== 'Login' && $route.name !== 'Signup' && $route.name !== 'Splash'"
      content-id="main-content"
    >
      <ion-header>
        <ion-toolbar>
          <ion-title>FastFood</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <!-- Profile snippet -->
        <div class="profile">
          <ion-avatar>
            <img src="https://i.pravatar.cc/150?img=12" alt="avatar" />
          </ion-avatar>
          <div class="details">
            <h3>Guest User</h3>
            <p>guest@example.com</p>
          </div>
        </div>

        <ion-list inset>
          <ion-list-header>Menu</ion-list-header>
          <ion-menu-toggle
            v-for="item in menuItems"
            :key="item.path"
            :autoHide="false"
          >
            <ion-item :routerLink="item.path" button>
              <ion-icon :icon="item.icon" slot="start" />
              <ion-label>{{ item.label }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>

        <div class="logout">
          <ion-button expand="block" fill="outline" color="danger" router-link="/login">
            Logout
          </ion-button>
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
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonMenuToggle,
  IonListHeader,
  IonIcon,
  IonButton,
} from "@ionic/vue";

import {
  homeOutline,
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

const menuItems = [
  { label: "Home", path: "/home", icon: homeOutline },
  { label: "Order Now", path: "/menu", icon: fastFoodOutline },
  { label: "Notifications", path: "/notifications", icon: notificationsOutline },
  { label: "Store Locator", path: "/store-locator", icon: pinOutline },
  { label: "FAQs", path: "/faqs", icon: helpCircleOutline },
  { label: "My Orders", path: "/my-orders", icon: bagOutline },
  { label: "My Account", path: "/profile", icon: personCircleOutline },
  { label: "My Favorites", path: "/favorites", icon: heartOutline },
  { label: "Order Tracker", path: "/order-tracker", icon: navigateOutline },
  { label: "Order History", path: "/order-history", icon: timeOutline },
];
</script>

<style scoped>
/* Fade transition for pages */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}

/* Profile block */
.profile {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
}
.profile .details h3 {
  margin: 0;
  font-size: 16px;
}
.profile .details p {
  margin: 0;
  font-size: 12px;
  opacity: 0.8;
}
.logout {
  padding: 16px;
}
</style>
