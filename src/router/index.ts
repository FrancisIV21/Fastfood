import { createRouter, createWebHistory } from '@ionic/vue-router';

// Lazy imports for all pages
const SplashScreen = () => import('@/pages/SplashScreen.vue');
const LoginPage = () => import('@/pages/LoginPage.vue');
const SignupPage = () => import('@/pages/SignupPage.vue');
const HomePage = () => import('@/pages/HomePage.vue');
const MenuPage = () => import('@/pages/MenuPage.vue');
const OrderPage = () => import('@/pages/OrderPage.vue');
const OrderSummary = () => import('@/pages/OrderSummary.vue'); // Add this line
const CartPage = () => import('@/pages/CartPage.vue');
const OrderReceivedPage = () => import('@/pages/OrderReceivedPage.vue');
const LoyaltyPointsPage = () => import('@/pages/LoyaltyPointsPage.vue');
const OrderTrackerPage = () => import('@/pages/OrderTrackerPage.vue');
const ProfilePage = () => import('@/pages/ProfilePage.vue');
const NotificationsPage = () => import('@/pages/NotificationsPage.vue');
const StoreLocatorPage = () => import('@/pages/StoreLocatorPage.vue');
const FAQPage = () => import('@/pages/FAQPage.vue');
const MyOrdersPage = () => import('@/pages/MyOrdersPage.vue');
const FavoritesPage = () => import('@/pages/FavoritesPage.vue');
const OrderHistoryPage = () => import('@/pages/OrderHistoryPage.vue');

const routes = [
  { path: '/', name: 'Splash', component: SplashScreen },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'Signup', component: SignupPage },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/menu', name: 'Menu', component: MenuPage },
  { path: '/order/:id', name: 'Order', component: OrderPage, props: true },
  { path: '/order-summary', name: 'OrderSummary', component: OrderSummary }, // Add this line
  { path: '/cart', name: 'Cart', component: CartPage },
  { path: '/order-received', name: 'OrderReceived', component: OrderReceivedPage },
  { path: '/points', name: 'LoyaltyPoints', component: LoyaltyPointsPage },
  { path: '/order-tracker', name: 'OrderTracker', component: OrderTrackerPage },
  { path: '/profile', name: 'Profile', component: ProfilePage },
  { path: '/notifications', name: 'Notifications', component: NotificationsPage },
  { path: '/store-locator', name: 'StoreLocator', component: StoreLocatorPage },
  { path: '/faqs', name: 'FAQ', component: FAQPage },
  { path: '/my-orders', name: 'MyOrders', component: MyOrdersPage },
  { path: '/favorites', name: 'Favorites', component: FavoritesPage },
  { path: '/order-history', name: 'OrderHistory', component: OrderHistoryPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;