import Link from 'next/link';

interface IProps {
  props: {
    id: string;
    title: string;
    date: string;
    categories: string;
    tag: string[];
  };
}

export default function PostItem({ props }: IProps) {
  const { id, title, date, categories, tag } = props;

  return (
    <div key={id} className="mb-6 border-solid border-b-2 border-gray-50 p-4">
      <Link href={`/posts/${id}`} className="text-xl">
        {title}
      </Link>
      <div className="mt-4 text-gray-500 text-sm">
        <span>{date}</span>
      </div>
    </div>
  );
}
