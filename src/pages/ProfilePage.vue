<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>My Account</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Name</ion-label>
        <ion-input value="Guest User" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Email</ion-label>
        <ion-input value="guest@example.com" />
      </ion-item>
      <ion-button expand="block">Save</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
</script>
