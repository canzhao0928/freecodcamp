export default function Clip({ id, url, setState }) {
  const handleClick = (e, id) => {
    const url = e.target.querySelector(`#${id}`).src;
    const clips = url.split("/");
    const clip = clips[clips.length - 1];
    setState(clip);
    const audio = new Audio(url);
    audio.play();
  };
  return (
    <button
      className="drum-pad"
      onClick={(e) => handleClick(e, id)}
      id={`${id}clip`}
    >
      {id}
      <audio src={url} className="clip" id={id} />
    </button>
  );
}
