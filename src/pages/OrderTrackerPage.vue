<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>Order Tracker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list inset>
        <ion-item>
          <ion-label>Preparing</ion-label>
          <ion-checkbox checked disabled slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>On the way</ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Delivered</ion-label>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/vue';
</script>
