import { GetServerSidePropsResult } from "next";
import {
  useQuery,
  QueryClient,
  dehydrate,
  DehydratedState,
} from "@tanstack/react-query";
import { getAllMovies } from "@/api";
import Seo from "./seo";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home() {
  const { data, isLoading } = useQuery(["movies"], getAllMovies);

  return (
    <div className="container">
      <Seo title="Home" />
      {!isLoading ? (
        <>
          {data?.results.map((movie: Movie) => {
            return (
              <div className="movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <h4>{movie.original_title}</h4>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          max-height: 300px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

interface Props {
  dehydratedState: DehydratedState | null;
  data: Movie[] | null | undefined;
}

export async function getServerSideProps(): Promise<
  GetServerSidePropsResult<Props>
> {
  try {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["movies"], getAllMovies);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        data: queryClient.getQueryData(["movies"]),
      },
    };
  } catch (e) {
    console.log("Error in ssr fun", e);

    return {
      props: {
        dehydratedState: null,
        data: null,
      },
    };
  }
}
