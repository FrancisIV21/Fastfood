import { createAnimation } from '@ionic/vue';

const customMenuAnimation = (baseEl: HTMLElement) => {
  const menuInner = baseEl.querySelector('.menu-inner') as HTMLElement;

  return createAnimation()
    .addElement(menuInner)
    .duration(300)
    .easing('cubic-bezier(0.25, 0.8, 0.25, 1)')
    .beforeStyles({
      background: '#ff0000', // your red background
    })
    .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
    .afterStyles({
      background: '#ff0000',
    });
};

export default customMenuAnimation;
