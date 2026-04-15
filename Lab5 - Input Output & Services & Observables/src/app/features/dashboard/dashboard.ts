import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  private router = inject(Router);

  constructor() {
    console.log('Dashboard constructor');
  }

  ngOnInit() {
    console.log('Dashboard ngOnInit');
  }

  ngOnDestroy() {
    console.log('Dashboard ngOnDestroy');
  }

  navigateToGames() {
    this.router.navigate(['/games']);
  }
}
