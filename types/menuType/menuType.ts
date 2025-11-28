export interface MenuChild {
    key: string | number,
    label: string,
}

export interface MenuItem {
    key: string | number;
    label: string;
    path: string;
    icon?: React.ReactNode | any;
    children?: MenuChild[];
}

export interface MenuProps {
    menuItem: MenuItem[];
}

