
import "./globals.css";
import { ReduxProvider } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-primary-50 text-primary-900 dark:bg-primary-900 dark:text-primary-50">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
