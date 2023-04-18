import { z } from 'zod';

import { procedure, router } from './instance';

export const root = router({
  hello: procedure.input(z.string()).query<string>(async (opts) => {
    const input = opts.input;
    return 'Hello, ' + input + ' !!!';
  }),
});
export type AppRouter = typeof root;
