export interface Board {
    boardId: String;
    gameOver: boolean;
    nextPlayer: string;
    winner: string;
    rowOne: RowDetails;
    rowTwo: RowDetails;
}

export interface Pit {
    stones: number;
}

export interface RowDetails {
  pits: Pit[];
  kalahaStones: number;
}
