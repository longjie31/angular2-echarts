import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule,Routes} from "@angular/router";
import{LocationStrategy,HashLocationStrategy,APP_BASE_HREF} from "@angular/common";
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
const routers:Routes = [
  {path:'Search',component:SearchComponent},
  {path:'Artist',component:ArtistComponent},
  {path:'Albums',component:AlbumComponent},
  {path:'Tracks',component:TrackComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
