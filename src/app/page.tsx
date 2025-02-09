import Link from 'next/link';
import { abTests } from './data/abTests';

export default function Home() {
  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold'>A/B Test Showcase</h1>
      <p className='mt-2 text-gray-600'>
        A collection of A/B tests showcasing real-world experiments in UI/UX
        optimization.
      </p>

      <h2 className='mt-6 text-xl font-semibold'>Featured Tests</h2>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        {abTests.slice(0, 3).map((test) => (
          <div key={test.id} className='p-4 border rounded-lg shadow'>
            <h3 className='text-lg font-semibold'>{test.name}</h3>
            <p className='text-sm text-gray-500'>{test.description}</p>
            <Link
              href={`/tests/${test.id}`}
              className='text-blue-500 hover:underline'
            >
              View Test →
            </Link>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <Link
          href='/tests'
          className='inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          View All Tests
        </Link>
      </div>
    </div>
  );
}
