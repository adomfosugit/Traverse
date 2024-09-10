import { Nunito } from 'next/font/google';
import '../styles/globals.css';
import NavBar from './NavBar';
import BidModal from './components/modals/BidModal';
import LandModal from './components/modals/LandModal';
import ToasterProvider from './components/providers/ToasterProvider';
const nunito = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Traverse</title>
        <meta name="description" content="Traverse" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={nunito.className}>
        <ToasterProvider />
        <BidModal />
        <LandModal />
        <NavBar />
        <div className="div">{children}</div>
      </body>
    </html>
  );
}
