import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false;
  if (isAuthenticated) {
    return true; // Allow access
  } else {
    return false; // Deny access
  }

  
};
