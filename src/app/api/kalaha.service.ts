import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../board/board';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KalahaService {

  gameUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }

  public getBoard(id: any): Observable<Board> {
    return this.http.get<Board>(`${this.gameUrl}/${id}`);
  }

  public initGame(): Observable<Board> {
    return this.http.post<Board>(this.gameUrl, null);
  }

  public play(currentPit: number, player: string, boardId: String): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .put(
        `${this.gameUrl}/${boardId}`,
        `{"player":"${player}",
          "pitIndex":${currentPit}}`,
        httpOptions
      );
  }

}
