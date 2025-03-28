import type { Metadata } from 'next';
import Providers from './Providers';
import { GlobalStyle } from './GlobalStyle';

export const metadata: Metadata = {
  title: 'Starsoft',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GlobalStyle />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
