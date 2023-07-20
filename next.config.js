module.exports = {
  swcMinify: false,
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
    SERVER_API:'https://hashinclude.cloud'
    // SERVER_API:'http://localhost:5000'

  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
}
