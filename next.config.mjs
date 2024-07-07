/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/id/home',
        permanent: true
      }
    ]
  }
}

export default nextConfig
