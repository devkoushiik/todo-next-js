import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 h-[100vh]`}>
        <div className="container max-w-full">
          <header className="bg-neutral-300">
            <Navbar />
          </header>
          <main className="max-w-full px-8 text-black children">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
