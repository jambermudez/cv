import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material Components 
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './component/header-navbar/header-navbar/header-navbar.component';
import { StudiesComponent } from './component/studies/studies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillCardComponent } from './component/skill-card/skill-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    StudiesComponent,
    SkillCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Angular Material Components
    MatExpansionModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
