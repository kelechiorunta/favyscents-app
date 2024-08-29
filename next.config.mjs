/** @type {import('next').NextConfig} */
// const headers = async () => {
//     return [
//       {
//         source: '/images/:path*', // Cache all images in the images directory
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable', // Cache for 1 year
//           },
//         ],
//       },
//     ];
//   };
  
  const nextConfig = {
   // headers, // Integrate the headers function in the Next.js config
    webpack: (config, { isServer }) => {
      config.resolve.alias['@components'] = new URL('./src/components', import.meta.url).pathname;
      config.resolve.alias['@utils'] = new URL('./src/utils', import.meta.url).pathname;
  
      config.module.rules.push({
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash].[ext]', // Stores images in 'pics' directory with a unique hash in the filename
        },
      });

    //   config.module.rules.push({
    //     test: /\.ico$/i,
    //     loader: 'file-loader',  // or 'file-loader'
    //     options: {
    //       limit: 8192,  // Adjust the limit based on your needs
    //       name: 'icons/[name].[hash].[ext]',
    //     },
    //   });

      return config;
    },
  };
  
  export default nextConfig;
