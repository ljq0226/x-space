import { Sidebar } from "@components/sidebar/sidebar";
import Home from '../home/page';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center w-full h-screen gap-0 lg:gap-4">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
