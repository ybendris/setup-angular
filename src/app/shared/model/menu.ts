import { SubMenu } from './sub-menu';

export class Menu {
    constructor(
        public name: string,
        public items: SubMenu[],
    ) {}
}
