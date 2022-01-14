import ItemsMock from "../DropdownMenu/mock";
import { MenuItemsType } from "../MenuItems/types";

const MenuItemsMock: MenuItemsType[] = [
  {
    label: "Swap",
    href: "/swap",
    icon: "Swap",
    items: ItemsMock,
    showItemsOnMobile: false,
  },
  {
    label: "Earn",
    href: "/earn",
    icon: "Earn",
    items: ItemsMock,
    showItemsOnMobile: true,
  },
  {
    label: "NFT",
    href: "/nft",
    icon: "Nft",
    items: ItemsMock,
  }
];

export default MenuItemsMock;
