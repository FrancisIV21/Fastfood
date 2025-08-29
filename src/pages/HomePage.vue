<template>
  <ion-page>
    <app-header title="Home" />

    <ion-content class="ion-padding">
      <h2>Welcome, {{ auth.user?.name }}</h2>
      <fast-food-card title="Cheeseburger" price="99" image="/assets/burger.png" />
      <fast-food-card title="Fries" price="59" image="/assets/fries.png" />
    </ion-content>

    <app-footer />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FastFoodCard from '@/components/FastFoodCard.vue';
import { useAuthStore } from '@/store';

const auth = useAuthStore();
</script>
