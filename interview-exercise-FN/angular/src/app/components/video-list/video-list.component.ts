import { IvyParser } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IPlaylist, IVideo } from 'src/app/models';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnChanges {

  @Input() searchText:string;
  @Input() userId:number;

  videos: IPlaylist[]=[]
  filteredVideos: IPlaylist[]=[]
  
  constructor(private _vedioSevice: ApiService) { }

  ngOnInit(): void {
    this.getVedios();
  }

  ngOnChanges(){
    debugger;
    this.filteredVideos = this.videos.filter(v => v.id == this.userId); 
  }
  
  getVedios(){
    debugger;
    this._vedioSevice.fetchPlaylists().subscribe(_res => {
      this.videos = _res;
    });
  }
  
}
