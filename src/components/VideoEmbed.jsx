export default function VideoEmbed({ videoId, title }) {
  return (
    <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-black my-4">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}