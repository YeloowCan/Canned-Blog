import Content from '@/components/Content';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';

interface IParam {
  params: {
    id: string;
  };
}

interface IProps {
  postData: any;
}

export default function Post({ postData }: IProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="mt-4 flex justify-center gap-3">
        <Content>
          {postData.title}
          <br />
          {postData.id}
          <br />
          {postData.date}
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Content>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: IParam) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
