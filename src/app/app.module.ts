import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardComponent } from './shared/card/card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContainerComponent } from './shared/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardSearchComponent } from './shared/card-search/card-search.component';
import { CardTestimonialComponent } from './shared/card-testimonial/card-testimonial.component';
import { FormSearchComponent } from './shared/form-search/form-search.component';
import { PromotionsComponent } from './pages/home/promotions/promotions.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { ModalComponent } from './shared/modal/modal.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ButtonControlComponent } from './shared/button-control/button-control.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './shared/dropdown-uf/dropdown-uf.component';
import { PassengerSelectorComponent } from './shared/passenger-selector/passenger-selector.component';
import { LoginComponent } from './pages/login/login.component';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthenticationInterceptor } from './core/interceptors/authentication.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    CardComponent,
    ContainerComponent,
    HomeComponent,
    FooterComponent,
    CardSearchComponent,
    CardTestimonialComponent,
    FormSearchComponent,
    ModalComponent,
    ButtonControlComponent,
    PromotionsComponent,
    DropdownUfComponent,
    TestimonialsComponent,
    PassengerSelectorComponent,
    LoginComponent,
    FormBaseComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatCheckboxModule,
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
