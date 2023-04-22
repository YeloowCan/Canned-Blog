import Image from 'next/image';
import Head from 'next/head';

export default function Header() {
  return (
    <header className="flex h-12 bg-sky-600 overflow-hidden items-center">
      <Head>
        <title>罐头博客</title>
      </Head>
      <Image
        src="/logo.png"
        alt="罐头博客"
        width={50}
        height={30}
        className="ml-4"
      />
      <span className="ml-2">罐头博客</span>
    </header>
  );
}
