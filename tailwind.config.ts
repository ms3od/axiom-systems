import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#101C30',
          dark: '#0A1220',
          light: '#182742'
        },
        deepslate: {
          DEFAULT: '#1E293B',
          dark: '#0F172A',
          light: '#334155'
        },
        electric: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          subtle: '#3B82F6'
        },
        ice: {
          DEFAULT: '#DBEAFE',
          soft: '#EFF6FF'
        },
        offwhite: '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    }
  },
  plugins: []
} as Config;
