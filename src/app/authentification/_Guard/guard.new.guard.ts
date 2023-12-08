import { CanActivateFn } from '@angular/router';

export const guardNewGuard: CanActivateFn = (route, state) => {
  return true;
};
