import Content from '@/components/Content';
import Header from '@/components/Header';
import SideBar from '@/components/SiderBar';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

interface IProps {
  postList: any[];
}

export default function Home({ postList }: IProps) {
  console.log(postList);

  return (
    <>
      <Head>
        <title>罐头博客</title>
      </Head>
      <div className="mt-4 flex justify-center gap-3">
        <Content>
          {postList.map((item) => (
            <div key={item.id} className="mt-6">
              <Link href={`/posts/${item.id}`}> {item.title}</Link>
            </div>
          ))}
          {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        </Content>
        <SideBar />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const postList = getSortedPostsData();

  return {
    props: {
      postList,
    },
  };
}
