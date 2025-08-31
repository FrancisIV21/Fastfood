declare module './animations/menuAnimation' {
  import type { Animation } from '@ionic/vue';
  export const customMenuAnimation: (baseEl: HTMLElement) => Animation;
}