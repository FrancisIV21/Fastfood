<template>
  <ion-card>
    <img :src="image" alt="" />
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>₱{{ price }}</ion-card-subtitle>
    </ion-card-header>
  </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';

defineProps<{
  title: string;
  price: string | number;
  image: string;
}>();
</script>
