import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey = 'AIzaSyCHV_ImgyPoXc-80eKTGUerHzVTdyMBkJk';

  constructor(public http: HttpClient) { }


  getVideosForCategory(categoryId, maxResults): Observable<Object> {
    const url = 'https://www.googleapis.com/youtube/v3/videos?key='
      + this.apiKey + '&videoCategoryId=' + categoryId + '&chart=mostPopular'
      + '&maxResults=' + maxResults + '&part=snippet';

    console.log('fetching from', url);
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }));
  }
}
