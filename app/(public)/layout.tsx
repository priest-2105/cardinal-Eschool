import "./globals.css";
import PublicNavbar from "@/components/public/Navbar";
import PublicFooter from "@/components/public/Footer"; 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
    <head>
      <link rel="shortcut icon" href="/assets/img/favicon-logo.png" type="image/x-icon" />
    </head>
     <body
        className={`antialiased`}
      >
        <PublicNavbar/>
        <div className="min-h-screen">
        {children}
        </div>
        <PublicFooter/>
      </body>
    </html>
  );
}
