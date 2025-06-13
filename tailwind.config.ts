import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // roxinho místico ✨
        secondary: '#EC4899', // rosa mágico
      },
    },
  },
  plugins: [],
}
export default config
