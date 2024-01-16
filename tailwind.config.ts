import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './node_modules/flowbite-react/lib/**/*.js',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
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
            'vazir-bold': 'Vazir-bold',
            'vazir-light': 'Vazir-light',
            'vazir-medium': 'Vazir-medium',
        },
    },
 
};
export default config;
