import {Inject, Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs";
import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from "./SearchResult";

@Injectable()
export class YouTubeService {
  constructor(
    private http: Http,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {

  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response:Response)=>{
        return (<any>response.json()).items.map(item=>{
          console.log('item:',item);
          return new SearchResult({
            id:item.id.videoId,
            title:item.snippet.title,
            description:item.snippet.description,
            thumbnailUrl:item.snippet.thumbnails.high.url
          });
        })
      })
  }
}
export var youTubeServiceInjectables: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
