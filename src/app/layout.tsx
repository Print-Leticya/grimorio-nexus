// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Grimório Nexus',
  description: 'Uma alquimia de conhecimento',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
