module.exports = {
  title: "Blockchain Solutions",
  description: "Official Documentation Guide",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started/" },
      { text: "Tati Blockchain", link: "https://tatiblockchain.co.za" }
    ],
    sidebar: {
      "/get-started/": ["", "smartcontracts", "decentralised-applications"]
    }
  }
};
