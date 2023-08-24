import { ResolveFn } from '@angular/router';

export const productResolverResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
