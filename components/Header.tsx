import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex h-12 bg-sky-600 overflow-hidden items-center">
      <Image
        src="/logo.png"
        alt="罐头博客"
        width={60}
        height={50}
        className="ml-12"
      />
      <span className="ml-2 text-2xl text-yellow-50">罐头博客</span>
    </header>
  );
}
