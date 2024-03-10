import Script from 'next/script';
import Link from 'next/link';
import MusicList from './musiclist';
function Music() {
return (
<>
<MusicList filter="latest hindi songs" />
</>
);
}
export default Music;