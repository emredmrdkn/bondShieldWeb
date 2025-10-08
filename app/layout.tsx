import './globals.css'

export const metadata = {
  title: 'BondShield - Emlak Denetim Platformu',
  description: 'Modern emlak denetim ve kefalet yönetim platformu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}