<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>My Orders</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list inset>
        <ion-item v-for="i in 4" :key="i">
          <ion-label>
            <h2>Order #{{ 1000 + i }}</h2>
            <p>Status: Delivered</p>
          </ion-label>
          <ion-button size="small" slot="end" fill="clear">View</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
</script>
