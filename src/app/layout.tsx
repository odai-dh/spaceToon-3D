import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AstroViewer',
  description: 'Explore the solar system in 3D',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/aframe-extras@6.1.1/dist/aframe-extras.min.js"></script>
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
