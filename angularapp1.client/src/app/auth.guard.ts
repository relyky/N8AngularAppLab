import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './shared/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = checkIfAuthenticated(route, state);

  if (isAuthenticated)
    return true;

  router.navigate(['/login']);
  return false;
};

function checkIfAuthenticated(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
  const authSvc = inject(AuthService);

  console.log('checkIfAuthenticated', {
    url: state.url,
    isAuthed: authSvc.isAuthed,
    authSvc,
    route,
    state
  })

  return authSvc.isAuthed;
}
