import Image from 'next/image';
import Card from './Card';

export default function SideBar() {
  return (
    <Card height={200} classname="w-64 ">
      <div className="flex justify-center mt-9">
        <Image
          src="/avatar.jpg"
          width={100}
          height={100}
          alt="头像"
          className="rounded-full"
        />
      </div>
    </Card>
  );
}
