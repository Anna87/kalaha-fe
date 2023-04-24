import { Component, OnInit } from '@angular/core';
import { KalahaService } from '../api/kalaha.service';
import { Board, Pit } from './board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board: Board | undefined;

  constructor(private service: KalahaService) {
  }

  ngOnInit() {
    let id = this.board?.boardId;
    if (id != null) {
      this.service.getBoard(id)
        .subscribe((board) => {
          this.board = board;
        });
    } else
      this.initGame();
  }

  initGame() {
    this.service.initGame().subscribe({
        next: (board) => {
          this.board = board;
        }
      });
  }

  play(selectedPit: number, player: string, pits: Pit[]) {
    if (this.board?.nextPlayer !== player || pits[selectedPit].stones === 0){
      return;
    }

    if (this.board == null) {
      return;
    }

    this.service.play(selectedPit, player, this.board.boardId).subscribe({
      next: (board) => {
        this.board = board;
      }
    });
  }
}
