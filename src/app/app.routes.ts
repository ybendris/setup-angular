import { Routes } from '@angular/router';
import { Placeholder } from './shared/components/placeholder/placeholder';

export const routes: Routes = [
    {
        path: 'file',
        children: [{ path: 'share', component: Placeholder }],
    },
    {
        path: 'edit',
        children: [{ path: 'undo', component: Placeholder }],
    },
    {
        path: 'format',
        children: [{ path: 'allo', component: Placeholder }],
    },
];
