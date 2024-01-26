const { nextui } = require("@nextui-org/react")
import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [nextui],
} satisfies Config

