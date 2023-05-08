import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductosFinancierosComponent } from './app/productos-financieros/productos-financieros.component';
import { ListadoProductosFinancierosComponent } from './app/productos-financieros/listado-productos-financieros/listado-productos-financieros.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/services/author.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        component: ProductosFinancierosComponent,
        children: [
          { path: '', component: ListadoProductosFinancierosComponent },
        ],
      },
    ]),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
});
