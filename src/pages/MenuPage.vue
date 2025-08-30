<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>Order Now</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list inset>
        <ion-item v-for="i in 8" :key="i">
          <ion-label>
            <h2>Food Item #{{ i }}</h2>
            <p>Description of food item</p>
          </ion-label>
          <ion-button slot="end" size="small" @click="$router.push('/cart')">Add to Bag</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
</script>
