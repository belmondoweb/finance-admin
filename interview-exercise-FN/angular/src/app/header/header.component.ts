import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPlaylist, IUser, IVideo } from '../models';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() onSearch : EventEmitter<any> = new EventEmitter<any>();

  form = new FormGroup({
    searchText: new FormControl(''),
    userId: new FormControl(''),
  });

  users: IUser[];
  vedios: IPlaylist[] = []

  constructor(private fb: FormBuilder, private userService: ApiService, private _vedioSevice: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.fetchUsers().subscribe(_res => {
      this.users = _res;
    });
  }

  searchVideos(){
    debugger;
    this.onSearch.emit(this.form.value);
  }

}
