'use client';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] });
import { ThemeProvider } from "@material-tailwind/react";
 
export default function RootLayout({
    children,
}: {
    children: React.ReactElement;
}) {
    return (
        <html lang='en'>
            <body className={`|${inter.className}`}>
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