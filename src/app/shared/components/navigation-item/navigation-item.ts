import { Component, computed, inject, input, signal } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Menu } from '../../model/menu';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
    selector: 'app-navigation-item',
    imports: [CdkMenuItem, RouterLinkActive, CdkMenuTrigger, CdkMenu, RouterLink],
    templateUrl: './navigation-item.html',
    styleUrl: './navigation-item.scss',
})
export class NavigationItem {
    private readonly router = inject(Router);

    navigationMenu = input.required<Menu>();

    public readonly isOpen = signal<boolean>(false);

    private navigationEnd = toSignal(
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
        { initialValue: null },
    );

    public readonly isActive = computed(() => {
        this.navigationEnd();

        return !!this.navigationMenu()?.items.some((item) =>
            this.router.isActive(item.route, {
                paths: 'subset',
                queryParams: 'ignored',
                fragment: 'ignored',
                matrixParams: 'ignored',
            }),
        );
    });

    protected onOpenMenu() {
        this.isOpen.set(true);
    }

    protected onCloseMenu() {
        this.isOpen.set(false);
    }
}
