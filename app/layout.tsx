import React from 'react';
import { Metadata, Viewport } from 'next'
import StyledComponentsRegistry from '@/util/registry';

export const viewport: Viewport = {
  themeColor: '#283739',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  description: 'A tic-tac-toe game to play for free!',
  keywords: ['tic-tac-toe', 'Game'],
}

export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en">
      <head>
        <link
            rel="preload"
            href="/fonts/crystal-radio-kit.regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
        />
      </head>
      <body>
        <StyledComponentsRegistry>
            {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}