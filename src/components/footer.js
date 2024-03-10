import Link from 'next/link';
function Footer() {
return (
<>
<footer>
<p>Footer</p>
<h3>Take a look on some of our Collections, only for you</h3>
<ul style={{ listStyleType: "none" }}>
<li><Link href="/search/Sad%20Hits">Sad Hits</Link></li>
<li><Link href="/search/Romantic">Romantic</Link></li>
</ul>
<p>This is just a Open-source project. it does not collect and/or share your Personal information with anyone</p>
<p>&copy; copyright 2024 Susant Swain Production, Inc. All music's,title's,audio's,label's,and lirix's are Proprietory Property of the respective onor</p>
</footer>
</>
);
}
export default Footer;