import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-image-recent',
  templateUrl: './image-recent.component.html',
  styleUrls: ['./image-recent.component.css']
})
export class ImageRecentComponent implements OnInit {

  private unsubscribe$ = new Subject();
  videos: any[];
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.videos = [];
    console.log('Fetching videos... ');
    this.youTubeService
      .getVideosForCategory('20', 20)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (const element of lista['items']) {
          console.log('link', `https://www.youtube.com/watch?v=${element.id}`);
          console.log('title', element.snippet.title);
          this.videos.push({
            link: `https://www.youtube.com/watch?v=${element.id}`,
            title: element.snippet.title
          });
        }
      });
  }

}
