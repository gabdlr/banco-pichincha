import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = req.headers.set('authorId', '0000');
  req = req.clone({
    headers,
  });
  return next(req);
};
