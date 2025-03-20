export default defineNuxtRouteMiddleware((to, from) => {
  const blockedRoutes = ['/admin', '/api'];

  if (import.meta.server) return;

  if (blockedRoutes.some(route => to.path.startsWith(route))) {
    return navigateTo('/');
  }
})