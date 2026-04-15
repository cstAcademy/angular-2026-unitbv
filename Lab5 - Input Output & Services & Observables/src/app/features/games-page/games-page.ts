import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { GameCard } from "./game-card/game-card";
import { NgClass } from '@angular/common';
import { Game } from '../../core/interfaces/game.interface';
import { GameService } from '../../core/services/game.service';

@Component({
  selector: 'app-games-page',
  imports: [RouterLink, GameCard, NgClass],
  templateUrl: './games-page.html',
  styleUrl: './games-page.scss',
})
export class GamesPage {

  private readonly gameService = inject(GameService);
  readonly bestGame = signal<Game | null>(null);
  readonly wishlistGame = signal<Game | null>(null);
  readonly cartGame = computed(() => this.gameService.cart());
  cards: Game[] = [];

  constructor() {
    // console.log('GamesPage constructor');
    this.gameService.wishlist$.subscribe((game) => {
      console.log('Received game in wishlist subscription:', game);
      this.wishlistGame.set(game);
    });
    effect(() => {
      console.log('Cart game changed:', this.cartGame());
    });
  }

  ngOnInit() {
    console.log('GamesPage ngOnInit');
    this.cards = this.gameService.getGames();
  }

  ngOnDestroy() {
    console.log('GamesPage ngOnDestroy');
  }

  setBestGame(game: Game) {
    this.bestGame.set(game);
    console.log('Best game set to:', game);
  }
}
