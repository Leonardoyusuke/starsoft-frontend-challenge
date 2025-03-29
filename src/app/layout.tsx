import type { Metadata } from 'next';
import Providers from './Providers';
import { GlobalStyle } from './GlobalStyle';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Starsoft',
  description: '',
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable} suppressHydrationWarning>
        <GlobalStyle />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
