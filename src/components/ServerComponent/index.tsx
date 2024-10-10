import { Suspense } from 'react';
import { ClientComponent } from '@/components/ClientComponent';

export function ServerComponent() {
  return (
    <Suspense>
      <ClientComponent />
    </Suspense>
  );
}