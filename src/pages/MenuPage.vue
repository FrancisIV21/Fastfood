<template>
  <ion-page>
    <app-header title="Menu" />
    <ion-content class="ion-padding">
      <fast-food-card title="Pizza" price="199" image="/assets/pizza.png" />
      <fast-food-card title="Pasta" price="149" image="/assets/pasta.png" />
    </ion-content>
    <app-footer />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FastFoodCard from '@/components/FastFoodCard.vue';
</script>
