import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/how-to-setup-blog',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/tutorial/how-to-setup-blog.tsx",
    featureArticle: true,
    preview: {
      author: MAYUR,
      date: "August 08 2022",
      articleTitle: "How to setup this blog template",
      tags: "demo, blog setup",
      thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      shortIntro: "These are the steps to setup your blog",
      category: "tutorial",
    },
    seo: {
      title: "How to setup this blog template",
      description: "These are the steps to setup your blog",
      keywords: "demo, blog setup",
      ogImage: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
      twitterHandle: "@mayur_nalwala",
      author: MAYUR.name,
    },
  },
  {
    path: "/pages/tutorial/how-to-write-your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "How to write your first article",
      tags: "demo, first article",
      thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
      shortIntro:
        "This a step by step guide on how to write your first article.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
    },
  },
  {
    path: "/pages/tutorial/how-to-deploy-blog.tsx",
    featureArticle: true,
    preview: {
      author: RUPALI,
      date: "August 08 2022",
      articleTitle: "How to Export and deploy on firebase",
      tags: "demo, deploy blog",
      thumbnail: "/public/imp_assets/tutorials/how-to-deploy.svg",
      shortIntro:
        "In this article you will see how to export blog files and what folder to deploy on your hosting.",
      category: "tutorial",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/how-to-deploy.svg",
    },
  },
  {
    path: "/pages/blog/we-added-perlin-noise.tsx",
    preview: {
      author: RUPALI,
      date: "June 2 2023",
      articleTitle: "We added Perlin Noise!",
      tags: "perlin noise, map generation, world",
      thumbnail: "/public/images/perlin noise.png",
      shortIntro: "We added perlin noise to our Map Generation Algorithm",
      category: "Villagers",
    },
    seo: {
      title: "Home Layout Example",
      description: "In this article we will see Default Home Layout example.",
      keywords:
        "next js, tailwind css, typescript, blog template, default layout, default home layout",
      ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
      author: RUPALI.name,
    },
  },
  {
    path: "/pages/blog/using-cellular-automata.tsx",
    preview: {
      author: MAYUR,
      date: "June 1 2023",
      articleTitle: "Using Cellular Automata to generate Caverns",
      tags: "cellular automata, caverns, world",
      thumbnail: "/public/images/cautomata.png",
      shortIntro:
        "I have now created a script in javascript which uses an algorithm called",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
    },
  },
  {
    path: "/pages/blog/villager-updates.tsx",
    preview: {
      author: RUPALI,
      date: "May 25 2023",
      articleTitle: "Villager updates!",
      tags: "demo, centered, centered layout",
      thumbnail: "/public/images/inspect img.png",
      shortIntro:
        "We added some updates to the villagers",
      category: "layouts",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
      ogImage: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
    },
  }


];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
