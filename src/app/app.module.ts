import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GreetComponent } from "./greet/greet.component";
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ShoppingListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
