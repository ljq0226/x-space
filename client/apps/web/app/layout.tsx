import '../styles/globals.css'
import { Sidebar } from "@components/sidebar/sidebar";
import Home from './home/page';
import { Aside } from '@components/aside/aside';
import { AsideTrends } from '@components/aside/aside-trends';
import { Suggestions } from '@components/aside/suggestions';
import { ThemeContextProvider } from '@lib/context/theme-context';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <div className="flex justify-center w-full h-screen gap-0 lg:gap-4">
            <Sidebar />
            <Home />
            <Aside>
              <AsideTrends />
              <Suggestions />
            </Aside>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
