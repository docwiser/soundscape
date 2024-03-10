import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from '../components/nav';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
title: "SoundScape: Explore, Listen, and Share Music",
description: "Discover, stream, and share your favorite music with SoundScape. Dive into a world of endless tunes, curated playlists, and personalized recommendations. Listen to the latest hits, explore diverse genres, and create your own musical journey. Start streaming today and immerse yourself in the world of music!",
};
export default function RootLayout({ children }) {
return (
<html lang="en">
<body className={inter.className}>
<Header />
<main>
{children}
<h2>Find Something specific to you</h2>
<Navigation />
</main>
<Footer />
</body>
</html>
);
}