export default defineNuxtRouteMiddleware((to, from) => {
  const blockedRoutes = ['/admin', '/api'];

  if (import.meta.server) return; // Skip on server

  if (blockedRoutes.some(route => to.path.startsWith(route))) {
    return navigateTo('/');
  }
})