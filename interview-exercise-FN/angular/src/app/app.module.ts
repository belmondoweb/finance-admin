import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@NgModule({
    declarations: [FilterPipe, AppComponent, HeaderComponent, VideoListComponent],
    imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
