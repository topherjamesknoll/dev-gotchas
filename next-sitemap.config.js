/** @type {import('next-sitemap').IConfig} */

// const axios = require("axios");

module.exports = {
    siteUrl: "https://devgotchas.com",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    autoLastmod: false,
    priority: false,
    changefreq: "monthly",
    // additionalPaths: async () => {
    //     const result = [];
    //     await axios
    //         .get("https://public-api.wordpress.com/rest/v1.1/sites/220124193/posts")
    //         .then((response) => {
    //             response.data?.posts?.map((post) => {
    //                 result.push({
    //                     loc: `/${post.slug}`,
    //                 });
    //             });
    //         });
    //
    //     return result;
    // },
};
