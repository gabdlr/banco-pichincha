import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductosFinancierosComponent } from './app/productos-financieros/productos-financieros.component';
import { ListadoProductosFinancierosComponent } from './app/productos-financieros/listado-productos-financieros/listado-productos-financieros.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        component: ProductosFinancierosComponent,
      },
    ]),
  ],
});
