import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatosComponent } from './components/contatos/contatos.component';
import { AddressComponent } from './components/address/address.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrosselComponent,
    DestaquesComponent,
    SobreComponent,
    FooterComponent,
    ContatosComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
