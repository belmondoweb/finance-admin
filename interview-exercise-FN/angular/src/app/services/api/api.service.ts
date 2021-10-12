import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPlaylist, IUser } from '../../models';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private readonly baseUrl = 'http://localhost:8081';

    constructor(private http: HttpClient) {}


    /// Fetch User ///
    fetchUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.baseUrl}/users`);
    }
    /// Get Play List ///
    fetchPlaylists(): Observable<IPlaylist[]> {
        return this.http.get<IPlaylist[]>(`${this.baseUrl}/playlists`);
    }

    ////* ERROR: ////
  _errorHandler(error: Response) { 
    console.log(error);
    return Observable.throw(error || 'Internal server error');
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Client Side Error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'There is a problem with the service. We are notified & working on it. Please try again later.');
  };
}
