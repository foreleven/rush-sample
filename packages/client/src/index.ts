import { trpc } from './trpc';

async function main() {
  const result = await trpc.hello.query('test!!');
  console.log(result);
}

main().catch(console.error);
