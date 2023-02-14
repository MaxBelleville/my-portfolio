import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://maxbelleville.github.io`,
    pathPrefix: `/my-portfolio`,
  },
  pathPrefix: `/my-portfolio`,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp","gatsby-plugin-material-ui", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Pacifico`,
          file: `https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap`,
        },
        {
          name: `Raleway`,
          file: `https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;800&display=swap`,
        }
      ],
    },
  },
]
};

export default config;
