import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../public/fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-poppins',
  preload: true
});


export const metadata: Metadata = {
  title: "Locked In",
  description: "Goal tracker",
};


interface RootLayoutProps {
  children: React.ReactNode;
}



const RootLayout =({children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
