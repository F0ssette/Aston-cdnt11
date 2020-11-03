import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponent } from './switch/switch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { VirtualkbComponent } from './virtualkb/virtualkb.component';
import { PlayersComponent } from './players/players.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerComponent } from './player/player.component';
import { FlockComponent } from './TPJersey/flock/flock.component';
import { PricesComponent } from './TPJersey/prices/prices.component';
import { PhotosComponent } from './TPJersey/photos/photos.component';
import { BadgeComponent } from './TPJersey/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwitchComponent,
    CarouselComponent,
    VirtualkbComponent,
    PlayersComponent,
    PlayerFormComponent,
    PlayerComponent,
    FlockComponent,
    PricesComponent,
    PhotosComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
