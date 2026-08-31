import { defineConfig } from "astro/config";
export default defineConfig({
    site: "https://hidde-fokkema.com",
    redirects: { "/teaching": "/research/#teaching" },
});
