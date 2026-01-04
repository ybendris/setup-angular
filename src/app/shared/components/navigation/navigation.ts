import { Component } from '@angular/core';
import { Menu } from '../../model/menu';
import { SubMenu } from '../../model/sub-menu';
import { NavigationItem } from '../navigation-item/navigation-item';

@Component({
    selector: 'app-navigation',
    imports: [NavigationItem],
    templateUrl: './navigation.html',
    styleUrl: './navigation.scss',
})
export class Navigation {
    public menus = [
        new Menu('file', [new SubMenu('share', '/file/share')]),
        new Menu('edit', [new SubMenu('undo', '/edit/undo')]),
        new Menu('format', [new SubMenu('allo', '/format/allo')]),
    ];
}
