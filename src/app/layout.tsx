'use client';
import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@material-tailwind/react";
import localFont from 'next/font/local'
 
const fonts = localFont({
    src: [
        {
            path: '../../public/fonts/vazir/Vazir-Bold.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/vazir/Vazir-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/vazir/Vazir-Light.woff2',
            weight: '300',
            style: 'normal',
        }
    ],
    variable: '--font-vazir'
})


export default function RootLayout({
    children,
}: {
    children: React.ReactElement;
}) {
    return (
        <html lang='en'>
            <body className={`${fonts.variable}`}>
                <ThemeProvider>
                    {children} 
                </ThemeProvider>
            </body>
        </html >
    );
}

{/* <Head>
<title>Parallax Effect with React</title>
<link rel="icon" href="/favicon.ico" />
</Head> */}