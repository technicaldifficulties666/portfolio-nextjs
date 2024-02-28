import Favicon from "/public/images/favicon1.png";
import ClientRootLayout from "../components/ClientRootLayout";
import Footer from "../components/Footer";

export const metadata = {
  title: "Subaig Bindra",
  description:
  "Welcome to Subaig's Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss your next venture!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "chakra",
    "hashnode",
    "best portfolio",
    "best portfolio website"
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
