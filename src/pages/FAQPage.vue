<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-menu-button /></ion-buttons>
        <ion-title>FAQs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-accordion-group>
        <ion-accordion value="q1">
          <ion-item slot="header"><ion-label>How to order?</ion-label></ion-item>
          <div class="ion-padding" slot="content">Browse menu, add to bag, place order.</div>
        </ion-accordion>
        <ion-accordion value="q2">
          <ion-item slot="header"><ion-label>Payment methods</ion-label></ion-item>
          <div class="ion-padding" slot="content">Cash, card upon delivery (demo).</div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonAccordionGroup, IonAccordion, IonItem, IonLabel } from '@ionic/vue';
</script>
