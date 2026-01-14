import "./globals.css";
import { ReduxProvider } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-gray-100 text-gray-900
  dark:bg-gray-950 dark:text-gray-100
  transition-colors duration-300"
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
