import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { GamesPage } from './features/games-page/games-page';

export const routes: Routes = [
    {
        // Redirect to dashboard as default route
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard,
        // Lazy loading
        // loadComponent: () =>
        // import('./features/dashboard/dashboard').then(
        //     (component) => component.Dashboard
        // ),
    },
    {
        path: 'games',
        component: GamesPage,
    }
];
