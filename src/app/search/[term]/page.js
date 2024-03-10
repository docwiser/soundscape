import Link from 'next/link';
import MusicList from '../../musiclist';
export const metadata = { title: "Search Results| Soundscape" };
function Music({ params }) {
return (
<>
<MusicList filter={params.term} />
</>
);
}
export default Music;