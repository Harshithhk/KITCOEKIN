module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  reactStrictMode: true,
  env: {
    CHATBOT_API: 'https://hashinclude.cloud/mista/getChat',
    SERVER_API: 'https://hashinclude.cloud',
    // SERVER_API: 'http://localhost:5000'
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     // Remove console.log statements in production
  //     config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
  //   }
  //   return config;
  // },
  "presets": ["next/babel"]

};
