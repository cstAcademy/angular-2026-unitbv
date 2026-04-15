import { Component, inject, input, output } from '@angular/core';
import { Game } from '../../../core/interfaces/game.interface';
import { FormsModule } from '@angular/forms';
import { GameService } from '../../../core/services/game.service';

@Component({
  selector: 'app-game-card',
  imports: [FormsModule],
  templateUrl: './game-card.html',
  styleUrl: './game-card.scss',
})
export class GameCard {
  readonly gameService = inject(GameService);
  readonly game = input.required<Game>();
  readonly bestGameEvent = output<Game>();
  review: string = 'ceva';

  clearReview() {
    // console.log('Clearing review for game:', this.game.title);
    console.log('Clearing review. Current review:', this.review);
    this.review = '';
  }

  voteGame() {
    this.bestGameEvent.emit(this.game());
  }

  saveToWishlist() {
    this.gameService.addToWishlist(this.game());
  }

  addToCart() {
    console.log('Adding to cart:', this.game().title);
    this.gameService.addToCart(this.game());
  }
}
