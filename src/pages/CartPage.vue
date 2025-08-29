<template>
  <ion-page>
    <app-header title="Cart" />
    <ion-content class="ion-padding">
      <p>Your cart is empty.</p>
    </ion-content>
    <app-footer />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>
