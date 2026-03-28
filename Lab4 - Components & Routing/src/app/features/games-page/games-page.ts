import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { GameCard } from "./game-card/game-card";
import { NgClass } from '@angular/common';
import { Game } from '../../core/interfaces/game.interface';

@Component({
  selector: 'app-games-page',
  imports: [RouterLink, GameCard, NgClass],
  templateUrl: './games-page.html',
  styleUrl: './games-page.scss',
})
export class GamesPage {

  cards: Game[] = [
    {
      title: "1",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
      description: "The deepest, most intricate simulation of a world that's ever been created.",
      isVisible: true,
    },
    {
      title: "2",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
      description: "The deepest, most intricate simulation of a world that's ever been created.",
      isVisible: false,
    },
    {
      title: "3",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
      description: "The deepest, most intricate simulation of a world that's ever been created.",
      isVisible: true,
    }
  ];

  constructor() {
    console.log('GamesPage constructor');
  }

  ngOnInit() {
    console.log('GamesPage ngOnInit');
  }

  ngOnDestroy() {
    console.log('GamesPage ngOnDestroy');
  }
}
