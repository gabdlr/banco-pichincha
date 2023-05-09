import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductosFinancierosComponent } from './app/productos-financieros/productos-financieros.component';
import { ListadoProductosFinancierosComponent } from './app/productos-financieros/listado-productos-financieros/listado-productos-financieros.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './app/services/author.interceptor';
import { ProductoFinancieroComponent } from './app/productos-financieros/producto-financiero/producto-financiero.component';
import { CrearProductoFinancieroComponent } from './app/productos-financieros/components/crear-producto-financiero/crear-producto-financiero.component';
import { EditarProductoFinancieroComponent } from './app/productos-financieros/components/editar-producto-financiero/editar-producto-financiero.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        component: ProductosFinancierosComponent,
        children: [
          { path: '', component: ListadoProductosFinancierosComponent },
          {
            path: 'producto-financiero',
            component: ProductoFinancieroComponent,
            children: [
              {
                path: 'crear',
                component: CrearProductoFinancieroComponent,
              },
              {
                path: 'editar/:id',
                component: EditarProductoFinancieroComponent,
              },
              { path: '**', redirectTo: 'crear' },
            ],
          },
        ],
      },
      { path: '**', redirectTo: '/' },
    ]),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
});
