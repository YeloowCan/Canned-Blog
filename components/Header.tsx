import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex h-12 bg-sky-600 overflow-hidden">
      <Image src="/logo.jpg" alt="罐头博客" width={60} height={30} />
      <span className="ml-2">罐头音乐</span>
    </header>
  );
}
