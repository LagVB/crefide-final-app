import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='flex w-screen h-screen'>
        {children}
      </body>
    </html>
  );
}
