import type { Metadata } from 'next';

import './style.css'
import WelcomeNav from './components/welcome-nav';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Welcome To TechnoTips',
  description: "TechnoTips is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <WelcomeNav />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
    </>
  )
}
