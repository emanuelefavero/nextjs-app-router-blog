const dev = process.env.NODE_ENV !== 'production'

// TODO: Add your website URL here
export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'
