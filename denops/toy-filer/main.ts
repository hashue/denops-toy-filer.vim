import { Denops, ensureString } from './deps.ts';

export async function main(denops: Denops): Promise<void>{
  denops.dispatcher={
    async show(path: unknown): Promise<void> {
      path = await denops.call("expand",path);
      ensureString(path);

      await denops.cmd("enew");
      await denops.cmd("setlocal buftype=nofile") // set scrap buffer

      for await (const entry of Deno.readDir(path)) {
        if( entry.isDirectory) {
          entry.name = entry.name+'/';
        }

        await denops.call("append", "line('$')", entry.name);
      }
    }
  } 
};

