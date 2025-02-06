import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Brodino</span>,
  project: {
    link: "https://github.com/Brodino96/documentation",
  },
  chat: {
    link: "https://discord.com",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  docsRepositoryBase: "https://github.com/Brodino96/documentation/tree/main",
  footer: {
    text: "Brodino",
  },
}

export default config
