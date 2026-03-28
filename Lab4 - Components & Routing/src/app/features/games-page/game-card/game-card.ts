import { Component } from '@angular/core';
import { Game } from '../../../core/interfaces/game.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-card',
  imports: [FormsModule],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
  game: Game = {
    title: "Dwarf Fortress",
    imageUrl:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
    description:
      "The deepest, most intricate simulation of a world that's ever been created.",
  };

  review: string = 'ceva';

  clearReview() {
    // console.log('Clearing review for game:', this.game.title);
    console.log('Clearing review. Current review:', this.review);
    this.review = '';
  }
}
