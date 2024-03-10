import Player from '../../components/player';
export const metadata = { title: "Playing...| Soundscape" };
function Play({ params }) {
let musicId = atob(atob(params.id));
return (
<>
<h1>Track: Playing</h1>
<div role="group" aria-label="Audio Player">
<Player url={'https://musicapi.x007.workers.dev/fetch?id=' + musicId} autoPlay="true" />
</div>
</>
);
}
export default Play;