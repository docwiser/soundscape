import Script from 'next/script';
import Link from 'next/link';
import MusicMenu from './musicmenu';
async function getMusic(term) {
let fetchmusic = await fetch('https://musicapi.x007.workers.dev/search?q=' + term + '&searchEngine=seevn');
let musiccontent = { response: [] };
if (!fetchmusic.ok) {
musiccontent.error = true;
} else {
musiccontent = await fetchmusic.json();
}
return musiccontent;
}
async function MusicList({ filter }) {
let musics = await getMusic(filter);
let musicFrame = [];
if (musics.error) {
musicFrame.push(
<div key="music-error-container">
<h1 key="music-error-heading">Error</h1>
<p key="music-error-p">Sorry, something went wrong</p>
</div>
);
} else {
musicFrame.push(
<h1 key="music-track-heading">Tracks</h1>
);
if (musics.response.length === 0) {
musicFrame.push(
<p key="music-track-not-found-p">No Music Found</p>
);
} else {
musics.response.forEach((musicItem) => {
musicFrame.push(
<div key={`mm-div-music-frame-primary-${musicItem.id}`}>
<img key={`${musicItem.id}-11-img`} src={musicItem.img} alt="artist's picture" />
<h2 key={`heading-head-primary-mm-hd-${musicItem.id}`}>
<Link key={`music-link-primary-mm-ff-${btoa(btoa(btoa(btoa(btoa(musicItem.id)))))}`} href={'/' + btoa(btoa(musicItem.id))}>{musicItem.title}</Link>
</h2>
<MusicMenu key={`music-menu-${musicItem.id}`} music={musicItem} />
</div>
);
});
}
}
return (
<>
{musicFrame}
</>
);
}
export default MusicList;