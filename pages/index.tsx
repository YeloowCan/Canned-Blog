import Content from '@/components/Content';
import Header from '@/components/Header';
import SideBar from '@/components/SiderBar';
import Head from 'next/head';
import { getSortedPostsData, getPostData } from '../lib/posts';

export default function Home({ postData }) {
  console.log(postData);

  return (
    <>
      <Head>
        <title>罐头博客</title>
      </Head>
      <Header />
      <div className="mt-4 flex justify-center gap-3">
        <Content>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Content>
        <SideBar />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(1);

  return {
    props: {
      postData,
    },
  };
}
