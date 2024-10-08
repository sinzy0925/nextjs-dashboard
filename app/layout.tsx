import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>
        {children}
        <p className={`${lusitana.className} text-2xl`}>Hello</p>
      </body>
    </html>
  );
}
