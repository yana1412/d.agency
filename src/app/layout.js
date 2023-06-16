import '@/styles/reset.scss'
import '@/styles/main.scss'

export const metadata = {
  title: 'Test',
  description: 'Test work for d.agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='use-credentials' />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body >{children}</body>
    </html>
  )
}
