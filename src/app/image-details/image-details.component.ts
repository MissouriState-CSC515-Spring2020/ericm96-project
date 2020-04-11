import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  private unsubscribe$ = new Subject();
  videos: any[];
  constructor(private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.videos = [];
    console.log('Fetching videos... ');
    this.youTubeService
      .getVideosForCategory('20', 1)
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
