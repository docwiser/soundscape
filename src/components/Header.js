import Link from 'next/link';
import Search from './search';
function Header() {
return (
<>
<header>
<Link href="/">Soundscape</Link>
<Search />
</header>
</>
);
}
export default Header;