import Card from '@/components/Card';
import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>罐头博客</title>
      </Head>
      <Header />
      <div className="max-w-7xl mt-4 relative m-auto">
        <Card height={100}>ss</Card>
      </div>
    </>
  );
}
