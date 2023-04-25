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
      <Content>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Content>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);

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
