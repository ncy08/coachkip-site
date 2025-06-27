<template>
  <div v-html="sitemap"></div>
</template>

<script>
export default {
  data() {
    return {
      sitemap: "",
    };
  },
  created() {
    this.generateSitemap();
  },
  methods: {
    generateSitemap() {
      const urls = [
        {
          loc: "https://kip.coach/",
          lastmod: new Date().toISOString().split("T")[0],
          changefreq: "monthly",
          priority: "1.0",
        },
        // Add more URLs as needed
      ];

      let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
      xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.0">\n`;

      urls.forEach((url) => {
        xml += `  <url>\n`;
        xml += `    <loc>${url.loc}</loc>\n`;
        xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
        xml += `    <priority>${url.priority}</priority>\n`;
        xml += `  </url>\n`;
      });

      xml += `</urlset>`;
      this.sitemap = xml;
    },
  },
};
</script>
