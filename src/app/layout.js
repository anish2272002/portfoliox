import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"

export const metadata = {
  title: 'Anish Kumar | anish2272002 | ML Engineer & Web Developer',
  description: 'Anish Kumar Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" type="image/x-icon" href="assets/me/anish.ico"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <script src="https://kit.fontawesome.com/2939ec19a4.js" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
