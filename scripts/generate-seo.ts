import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
    portfolioProjects,
    testimonials,
    siteOrigin,
} from "../src/content/site-content";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(SCRIPT_DIR, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const WELL_KNOWN_DIR = path.join(PUBLIC_DIR, ".well-known");

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, (character) => {
        switch (character) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "'":
                return "&apos;";
            case '"':
                return "&quot;";
            default:
                return character;
        }
    });
}

function generateSitemap() {
    const urls = [
        { loc: `${siteOrigin}/`, changefreq: "daily", priority: 1 },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
            (url) => `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
        )
        .join("\n")}\n</urlset>`;

    writeFileSync(path.join(PUBLIC_DIR, "sitemap.xml"), xml, "utf8");
    console.log("Wrote public/sitemap.xml");
}

function generateRss() {
    // We removed the blogs section, but keeping an empty RSS for now if needed, or we can just skip it
    const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Soumya Sagar Nayak - Updates</title>\n  <link>${siteOrigin}/</link>\n  <description>Thoughts on web dev and engineering.</description>\n</channel>\n</rss>`;

    writeFileSync(path.join(PUBLIC_DIR, "rss.xml"), rss, "utf8");
    console.log("Wrote public/rss.xml");
}

function generateLlmstxt() {
    mkdirSync(WELL_KNOWN_DIR, { recursive: true });

    const content = [
        "# Soumya Sagar Nayak",
        "",
        "## About",
        "Portfolio and engineering showcase for Soumya Sagar Nayak.",
        "",
        "## Pages",
        `- [Home](${siteOrigin}/)`,
        "",
        "## Projects",
        ...portfolioProjects.flatMap((project) => [
            `- ${project.title}`,
            `  - Company: ${project.company}`,
            `  - Year: ${project.year}`,
            `  - Link: ${project.link}`,
            `  - Highlights: ${project.results.join("; ")}`,
            "",
        ]),
        "## Reviews",
        ...testimonials.flatMap((testimonial) => [
            `- ${testimonial.name}`,
            `  - Role: ${testimonial.position}`,
            `  - Review: ${testimonial.text}`,
            "",
        ]),
    ].join("\n");

    writeFileSync(path.join(WELL_KNOWN_DIR, "llms.txt"), content, "utf8");
    console.log("Wrote public/.well-known/llms.txt");
}

function main() {
    generateSitemap();
    generateRss();
    generateLlmstxt();
}

main();
