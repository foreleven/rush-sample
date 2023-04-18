import { createHTTPServer } from '@trpc/server/adapters/standalone';

import type { AppRouter } from './trpc/router';
import { root } from './trpc/router';

const server = createHTTPServer({
  router: root,
});

server.listen(3000);

export type { AppRouter };
