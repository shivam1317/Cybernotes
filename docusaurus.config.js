// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

// /** @type {import('@docusaurus/types').Config} **/
const config = {
  title: "Cybernotes",
  tagline: "By 0xSH1V4M",
  url: "https://shivam1317.github.io",
  baseUrl: "/Cybernotes/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shivam1317", // Usually your GitHub org/user name.
  projectName: "Cybernotes", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        apiKey: "7bcdfd213bdb051b9614ce1083b698f2",
        indexName: "cybernotes",
        appId: "ABHJYS7Q6I",
        contextualSearch: true,
      },
      navbar: {
        title: "Cybernotes",
        logo: {
          alt: "cybernotes",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/shivam1317/Cybernotes",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contributing",
            items: [
              {
                label: "How to contribute",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Contact me",
            items: [
              {
                label: "Medium",
                href: "https://medium.com/@0xSH1V4M",
              },
              {
                label: "Discord",
                href: "https://discord.gg/MUeJUdNxJv",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/0xSH1V4M",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Development notes",
                href: "https://oxsh1v4m.gitbook.io/webdev-notes/getting-started/welcome",
              },
              {
                label: "GitHub",
                href: "https://github.com/shivam1317",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cybernotes`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
