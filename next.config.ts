import createMDX from "@next/mdx";

import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ["github.com", "vc7v703vlt.ufs.sh", "plus.unsplash.com", "images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    format: "mdx",
  },
});

export default withMDX(config);
