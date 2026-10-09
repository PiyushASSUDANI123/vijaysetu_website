import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VijaySetu (विजयसेतु) | राजनीतिक चुनाव प्रबंधन व डिजिटल वॉर रूम सॉफ्टवेयर',
  description: 'भारत का अग्रणी इलेक्शन मैनेजमेंट व वोटर डेटाबेस प्लेटफॉर्म। 1-सेकंड मतदाता पर्ची, WhatsApp ऑटोमेशन, बूथ-वार लाइव टर्नआउट, जातिगत समीकरण व रियल-टाइम वॉर रूम इंटेलिजेंस।',
  keywords: [
    'VijaySetu',
    'Election Management Software India',
    'Voter Slip Generator WhatsApp',
    'Chunav War Room Software',
    'Panna Pramukh Management App',
    'Booth Level Voter Analytics',
    'Voter List OCR Hindi PDF',
    'Political Campaign Management System'
  ],
  authors: [{ name: 'VijaySetu Team' }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'VijaySetu - चुनाव प्रबंधन का संपूर्ण डिजिटल वॉर रूम',
    description: 'बूथ से लेकर वॉर-रूम तक, हर वोट और कार्यकर्ता पर सटीक नियंत्रण। लाइव टर्नआउट, डिजिटल पर्ची व माइक्रो-टारगेटिंग।',
    url: 'https://vijaysetu.piyushassudani.in',
    siteName: 'VijaySetu',
    locale: 'hi_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
