export default {
  themeConfig: {
    initialColorMode: "dark",
  },
  base: "/docs",
  src: "./src/docs/",
  gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-copy-linked-files" }],
}
