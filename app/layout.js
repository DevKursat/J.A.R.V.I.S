import './globals.css';

export const metadata = {
  title: 'J.A.R.V.I.S — Yapay Zekâ Kişisel Asistan | Erum Tech Core',
  description: 'J.A.R.V.I.S: Yüz tanıma, sesli komut, hava durumu, haber, YouTube indirme ve daha fazlasını sunan yapay zekâ destekli kişisel masaüstü asistanınız. Erum Tech Core tarafından geliştirilmiştir.',
  keywords: 'jarvis, yapay zeka, sesli asistan, yüz tanıma, kişisel asistan, masaüstü, erum tech core',
  authors: [{ name: 'Erum Tech Core' }],
  openGraph: {
    title: 'J.A.R.V.I.S — Yapay Zekâ Kişisel Asistan',
    description: 'Yüz tanıma, sesli komut, hava durumu raporlama ve daha fazlasıyla donatılmış kişisel masaüstü asistanınız.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}
