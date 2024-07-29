import { Mulish } from 'next/font/google'
import "./globals.css";
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/components/Providers';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS;
  return (
    <html lang="en" className='light !scroll-smooth'>
      <head>
        {googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${googleAnalyticsId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={cn('min-h-screen font-sans antialiased', mulish.className)}>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
