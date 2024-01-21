import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "@/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container max-w-full">
          <header className="bg-neutral-300">
            <Navbar />
          </header>
          <main className="max-w-full px-8 shadow-lg text-white bg- children">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
