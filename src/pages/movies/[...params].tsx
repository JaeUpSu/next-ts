import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Seo from "../seo";

interface Props {
  params: {
    params: [title: string, id: string];
  };
}

export default function Detail({ params }: Props) {
  const [title] = params.params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({
  params,
}: Props): Promise<GetServerSidePropsResult<Props>> {
  return {
    props: {
      params,
    },
  };
}
