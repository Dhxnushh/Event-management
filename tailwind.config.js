/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // ... other safelist options
    'bg-image', // Add 'bg-image' to Tailwind's safelist to prevent purging
  ],
  theme: {
    backgroundImage: {
      'my-image': `url('login.jpg')`, // Adjust path as needed
    },
  },
  plugins: [],
}

