import { useRouter } from "next/router";

export default function Detail() {
  const movie = useRouter().query;
  return (
    <div>
      {movie.title ? (
        <>
          <img src={`${movie.poster}`} />
          <h4>{movie.title}</h4>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
