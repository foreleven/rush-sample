import type { AppRouter } from 'server';

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import './polyfill';

//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
