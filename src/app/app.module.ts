import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BusquedaPipe } from './components/shared/busqueda.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from '@angular/forms';
import { using } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './components/shared/material.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    DetalleComponent,
    NavBarComponent,
    BusquedaPipe,
    PerfilComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
