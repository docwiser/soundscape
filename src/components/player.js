function Player({ url, autoPlay = false }) {
return (
<audio src={url} controls autoPlay={autoPlay}>
Your Browser Doesnot Support Audio Element.
</audio>
);
}
export default Player;