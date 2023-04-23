import Content from '@/components/Content';
import Header from '@/components/Header';
import SideBar from '@/components/SiderBar';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>罐头博客</title>
      </Head>
      <Header />
      <div className="mt-4 flex justify-center gap-3">
        <Content />
        <SideBar />
      </div>
    </>
  );
}
