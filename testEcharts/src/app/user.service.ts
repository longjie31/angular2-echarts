import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {
  }

  getConfig() {
    return this.http.get<Config>(this.configUrl).pipe(
      retry(3), // 重试3次
      catchError(this.handleError)// catchError捕获错误
    );
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(this.configUrl, {observe: 'response'});
  }
  // handleError操纵错误
  private handleError(error: HttpErrorResponse) {
    // instanceof运算符
    if (error.error instanceof ErrorEvent) {
      console.error('一个错误产生：', error.error.message);
    } else {
      console.error(
        `后端返回代码${error.status},` + `body:${error.error}`
      );
    }
    return throwError('发生错误，请再试一次');
  }
}
