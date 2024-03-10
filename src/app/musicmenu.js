"use client";
import { useRef, useEffect } from 'react';
let MusicMenu = ({ music }) => {
let copyBtn = useRef(null);
let shareBtn = useRef(null);
let downloadBtn = useRef(null);
let handleCopyLink = () => {
let musicLink = `http://localhost:3000/${btoa(btoa(music.id))}`;
navigator.clipboard.writeText(musicLink)
.then(() => {
console.log('Link copied to clipboard:', musicLink);
})
.catch((error) => {
console.error('Error copying link to clipboard:', error);
});
};
let handleShare = () => {
let musicLink = `http://localhost:3000/${btoa(btoa(music.id))}`;
navigator.share({
title: music.title,
url: musicLink
})
.then(() => {
console.log('Share:', musicLink);
})
.catch((err) => {
console.log("Sharing Failed. Error: " + err);
});
};
let handleDownload = () => {
let downloadLink = `http://localhost:3000/${btoa(btoa(music.id))}`;
let tmpdwn = document.createElement("a");
tmpdwn.setAttribute("href", downloadLink);
tmpdwn.setAttribute("download", `${music.title}.mp3`);
document.body.appendChild(tmpdwn);
tmpdwn.click();
document.body.removeChild(tmpdwn);
console.log('Download:', downloadLink);
};
useEffect(() => {
if (copyBtn.current) {
copyBtn.current.addEventListener('data-click', handleCopyLink);
}
if (shareBtn.current) {
shareBtn.current.addEventListener('data-click', handleShare);
}
if (downloadBtn.current) {
downloadBtn.current.addEventListener('data-click', handleDownload);
}
return () => {
if (copyBtn.current) {
copyBtn.current.removeEventListener('data-click', handleCopyLink);
}
if (shareBtn.current) {
shareBtn.current.removeEventListener('data-click', handleShare);
}
if (downloadBtn.current) {
downloadBtn.current.removeEventListener('data-click', handleDownload);
}
}
}, []);
return (
<>
<div className="menu-container">
<ul role="menu" tabIndex="-1">
<li onClick={handleCopyLink} role="menuitem" id={'copy-link' + music.id} ref={copyBtn}>Copy Link</li>
<li onClick={handleShare} role="menuitem" id={'share' + music.id} ref={shareBtn}>Share</li>
<li onClick={handleDownload} role="menuitem" id={'download' + music.id} ref={downloadBtn}>Download</li>
</ul>
</div>
</>
);
};
export default MusicMenu;