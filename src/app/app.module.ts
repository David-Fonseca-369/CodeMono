import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { LayoutBaseComponent } from './layout/layout-base/layout-base.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavbarModule, // Para que angular sepa que exista este modulo.
    FooterModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
