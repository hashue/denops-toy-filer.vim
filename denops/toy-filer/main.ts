import { Denops, ensureString } from './deps.ts';

export async function main(denops: Denops): Promise<void>{
  denops.dispatcher={
    async show(path: unknown): Promise<void> {
      ensureString(path);

      await denops.cmd("enew");

      for await (const entry of Deno.readDir(path)) {
        if( entry.isDirectory) {
          entry.name = entry.name+'/';
        }

        await denops.call("append", "line('$')", entry.name);
      }
    }
  } 
};

