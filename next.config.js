// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   images: {
// //     domains: ["strapi.littlearyans.in"],
// //   },
// // };

// // module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   images: {
// //     domains: ["strapi.littlearyans.in"],
// //   },
// //   webpack: (config, { isServer }) => {
// //     if (!isServer) {
// //       config.resolve.fallback.fs = false;
// //     }
// //     return config;
// //   },
// //   async headers() {
// //     return [
// //       {
// //         source: "/(.*)",
// //         headers: [
// //           {
// //             key: "Cache-Control",
// //             value: "public, max-age=31536000, immutable",
// //           },
// //         ],
// //       },
// //     ];
// //   },
// // };

// // module.exports = nextConfig;

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["strapi.littlearyans.in"],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }

//     // Add loader for PDF files
//     config.module.rules.push({
//       test: /\.pdf$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           name: "[path][name].[ext]",
//           publicPath: `/_next/static/files`,
//           outputPath: "static/files",
//         },
//       },
//     });

//     return config;
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["strapi.littlearyans.in", "127.0.0.1"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    // Add loader for PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: `/_next/static/files`,
          outputPath: "static/files",
        },
      },
    });

    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
