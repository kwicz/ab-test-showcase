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
    <div className='p-8'>
      <h1>{test.name}</h1>
      <p>{test.description}</p>

      <button
        onClick={toggleVariant}
        className='p-2 bg-blue-500 text-white rounded mb-4'
      >
        {isVariantApplied ? 'Return to Control' : 'Apply Variant'}
      </button>

      {test.controlComponent && (
        <test.controlComponent variant={isVariantApplied} />
      )}
    </div>
  );
}
