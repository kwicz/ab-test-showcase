import Link from 'next/link';
import { abTests } from '@/app/data/abTests';

export default function TestsPage() {
  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>A/B Tests</h1>
      <ul className='mt-4 space-y-4'>
        {abTests.map((test) => (
          <li key={test.id} className='p-4 border rounded-lg shadow'>
            <h2 className='text-lg font-semibold'>{test.name}</h2>
            <p>{test.description}</p>
            <Link
              href={`/tests/${test.id}`}
              className='text-blue-500 hover:underline'
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
