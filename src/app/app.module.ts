import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './compenents/first-component/first-component.component';

//mapeamento dos componentes gerado automático
@NgModule({
  declarations: [AppComponent, FirstComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
