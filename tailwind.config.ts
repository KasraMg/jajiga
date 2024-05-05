import type { Config } from 'tailwindcss';
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config =  withMT({
    content: [
        './node_modules/flowbite-react/lib/**/*.js',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ], 
    plugins: [
        require('flowbite/plugin')
    ],
 
    theme: {
        extend: {
            colors: {
                textGray: '#333333',
            },
            screens: {
                sm: { min: '500px' },
                md: { min: '768px' },
                lg: { min: '900px' },
                xl: { min: '1200px' },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
        fontFamily: {
            'vazir': ['var(--font-vazir)'] , 
        },
        colors: {
            customYellow: '#f0c807', // مثال از رنگ سبز تیره
          }
    },
 
});
export default config;
