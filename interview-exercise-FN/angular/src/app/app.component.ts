import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'InterviewApp';
    searchText:string;
    userId:number;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {}

    searchVideos(event:any){
       this.searchText = event.searchText;
       this.userId = event.userId;
    }
}
