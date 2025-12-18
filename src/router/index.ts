import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: 'Home - NeonStream'}
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogView,
            meta: { title : 'Catalog - NeonStream'}
        }
    ]
})

router.afterEach((to: RouteLocationNormalized)=>{
    // 1. WCAG 2.4.2: Update the Page Title
  // This is the first thing a Screen Reader announces on page load (usually)
    document.title = to.meta.title || 'NeonStream';

    // 2. Manage Focus
  // We move focus to the Skip Link
  // This resets the user to the top of the page logically.
    const skipLink = document.querySelector('.skip-link') as HTMLElement;

    if(skipLink){
        skipLink.focus();
    }else{
        document.body.setAttribute('tabindex', '-1');
        document.body.focus();
    }
});

export default router