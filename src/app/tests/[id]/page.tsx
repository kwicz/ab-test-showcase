'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { abTests } from '@/app/data/abTests';

export default function TestDetailsPage() {
  const { id } = useParams();
  const test = abTests.find((t) => t.id === id);

  const [isVariantApplied, setIsVariantApplied] = useState(false);

  if (!test) return <p>Test not found</p>;

  const toggleVariant = () => {
    if (isVariantApplied) {
      window.location.reload();
    } else {
      if (test.buildCode) {
        test.buildCode();
      }
    }
    setIsVariantApplied(!isVariantApplied);
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <div className='mb-8'>
        <h1 className='text-3xl mb-6'>{test.name}</h1>
        <div className='space-y-4 text-lg'>
          <p>
            <span className='font-semibold text-navy'>Description:</span>{' '}
            {test.description}
          </p>
          <p>
            <span className='font-semibold text-navy'>Hypothesis:</span>{' '}
            {test.hypothesis}
          </p>
          <p>
            <span className='font-semibold text-navy'>Methodology:</span>{' '}
            {test.methodology}
          </p>
          <p>
            <span className='font-semibold text-navy'>Results:</span>{' '}
            {test.results}
          </p>
          <p>
            <span className='font-semibold text-navy'>Launch Date:</span>{' '}
            {test.date}
          </p>
        </div>
      </div>

      <div className='mb-8'>
        <button
          onClick={toggleVariant}
          className='px-6 py-3 rounded-lg font-semibold'
        >
          {isVariantApplied ? 'Return to Control' : 'Apply Variant'}
        </button>
      </div>

      {test.controlComponent && (
        <div className='w-[calc(100%+48px)] -mx-6 border-2 border-navy p-6 bg-white shadow-lg'>
          <test.controlComponent />
        </div>
      )}
    </div>
  );
}
