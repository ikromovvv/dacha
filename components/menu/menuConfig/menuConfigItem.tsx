import { AppstoreOutlined, CarOutlined  , UserOutlined} from "@ant-design/icons";

type MenuItemType = {
    key?: string;
    label: string;
    description?: string;
    path?: string;
    icon?: any;
    children?: MenuItemType[];
    type?: "group";
};

export const menuConfigItem: MenuItemType[] = [
    {
        key: "ofitsiant",
        label: "Ofitsiantlar",
        description: "Ushbu bo‘limda ofitsiantlar ro‘yxatini ko‘rib chiqishingiz, yangi ishchilar qo‘shishingiz va ularni boshqarishingiz mumkin.",
        path: "/",
        icon: <AppstoreOutlined />,
    },
    {
        key: "oshpaz",
        label: "Oshpazlar",
        description: "Ushbu bo‘limda oshpazlar ro‘yxatini ko‘rib chiqishingiz, yangi oshpazlar qo‘shishingiz va ularning ish faoliyatini boshqarishingiz mumkin.",
        path: "/chefs",
        icon: <UserOutlined />, // Agar ishchi bilan mos icon ishlatamiz
    },
    {
        key: "kuryer",
        label: "Kuryer va Taksistlar",
        description: "Bu bo‘limda taksistlar va kuryerlar  haqida ma’lumotlar, eng tavsiya etilgan vazifalar va statistikalarni topishingiz mumkin.",
        path: "/mustwatch",
        icon: <CarOutlined />,
    },
    {
        key: "arenda",
        label: "Arendaga narsalar",
        description: "Bu bo‘limda taksistlar va kuryerlar  haqida ma’lumotlar, eng tavsiya etilgan vazifalar va statistikalarni topishingiz mumkin.",
        path: "/mustwatch",
        icon: <CarOutlined />,
    },{
        key: "cafe",
        label: "Kafe va Restoranlar",
        description: "Bu bo‘limda taksistlar va kuryerlar  haqida ma’lumotlar, eng tavsiya etilgan vazifalar va statistikalarni topishingiz mumkin.",
        path: "/mustwatch",
        icon: <CarOutlined />,
    },
];
