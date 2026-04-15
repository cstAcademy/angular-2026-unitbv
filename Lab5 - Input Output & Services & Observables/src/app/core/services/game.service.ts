import { Injectable, signal } from '@angular/core';
import { Game } from '../interfaces/game.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    private listOfGames: Game[] = this.generateListOfGames();
    private wishlist = new Subject<Game>();
    wishlist$ = this.wishlist.asObservable();
    private readonly _cart = signal<Game | null>(null);
    readonly cart = this._cart.asReadonly();

    private generateListOfGames(): Game[] {
        return [
            {
                title: "Dwarf Fortress",
                imageUrl:
                "https://cdn.cloudflare.steamstatic.com/steam/apps/975370/header.jpg?t=1670338868",
                description:
                "The deepest, most intricate simulation of a world that's ever been created.",
                isVisible: true,
            },
            {
                title: "Crusader Kings III",
                imageUrl:
                "https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg?t=1678993244",
                description:
                "Love, fight, scheme, and claim greatness. Determine your noble house’s legacy in the sprawling grand strategy of Crusader Kings III. Death is only the beginning as you guide your dynasty’s bloodline in the rich and larger-than-life simulation of the Middle Ages.",
                isVisible: true,
            },
            {
                title: "HITMAN 3",
                imageUrl:
                "https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1679476219",
                description:
                "Enter the world of the ultimate assassin. HITMAN World of Assassination brings together the best of HITMAN, HITMAN 2 and HITMAN 3 including the main campaign, contract mode, escalations, elusive target arcades and the roguelike inspired game mode HITMAN: Freelancer.",
                isVisible: true,
            },
            {
                title: "Deep Rock Galactic",
                imageUrl:
                "https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg?t=1678288589",
                description:
                "Deep Rock Galactic is a 1-4 player co-op FPS featuring badass space Dwarves, 100% destructible environments, procedurally-generated caves, and endless hordes of alien monsters.",
                isVisible: true,
            },
            {
                title: "Stellaris",
                imageUrl:
                "https://cdn.akamai.steamstatic.com/steam/apps/281990/header.jpg?t=1678972819",
                description:
                "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.",
                isVisible: true,
            },
        ];
    }

    getGames(): Game[] {
        return this.listOfGames;
    }

    addToWishlist(game: Game) {
        this.wishlist.next(game);
    }

    addToCart(game: Game) {
        this._cart.set(game);
    }
}