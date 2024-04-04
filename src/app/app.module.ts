import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModalComponent } from './login-modal.component';
import { InputComponent } from './input.component';
import { ModalComponent } from './model.compoennt';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    LoginModalComponent,
    InputComponent,
    ModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
