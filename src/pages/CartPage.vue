<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>Order Summary</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-segment v-model="method">
        <ion-segment-button value="pickup">Pickup</ion-segment-button>
        <ion-segment-button value="delivery">Delivery</ion-segment-button>
      </ion-segment>

      <ion-item v-if="method === 'delivery'">
        <ion-label position="stacked">Delivery Address</ion-label>
        <ion-input placeholder="Enter address"></ion-input>
      </ion-item>

      <ion-list inset>
        <ion-item v-for="i in 3" :key="i">
          <ion-label>Item #{{ i }}</ion-label>
          <ion-badge slot="end">₱{{ 99 * i }}</ion-badge>
        </ion-item>
      </ion-list>

      <ion-button expand="block" @click="$router.push('/order-received')">Place Order</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,
  IonSegment, IonSegmentButton, IonItem, IonLabel, IonInput, IonList, IonBadge, IonButton
} from '@ionic/vue';

const method = ref<'pickup' | 'delivery'>('delivery');
</script>
