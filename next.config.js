const API_KEY = "10923b261ba94d897ac6b81148314a3f";

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // url 넣으면
        source: "/old-blog/:path*",
        // 해당 destination 켜짐
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
