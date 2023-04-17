import { Language } from "../LangSelector/types"
import { FooterLinkType } from "./types"

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.ghostnft.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/@ghost-nft",
      },
      {
        label: "Community",
        href: "https://docs.ghostnft.io/contact-us",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.ghostnft.io/contact-us",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.ghostnft.io/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.ghostnft.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/ghost-nft",
      },
      {
        label: "Documentation",
        href: "https://docs.ghostnft.io",
      },
    ],
  },
]

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/ghost_NFT_",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/ghostnften",
      },
      {
        label: "日本語",
        href: "https://t.me/ghostjapanese",
      },
    ],
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/ghost_nft_marketplace/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/ghost-nft",
  },
]

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}))
