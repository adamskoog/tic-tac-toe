import React from 'react';
import StyledComponentsRegistry from '@/util/registry';

export default function RootLayout({ children }: { children: any }) {

  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
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