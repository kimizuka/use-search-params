'use client';

import { useSearchParams } from 'next/navigation';

export function ClientComponent() {
  const searchParams = useSearchParams();

  return (
    <div>
      <p>timestamp: { searchParams.get('timestamp') }</p>
    </div>
  );
}