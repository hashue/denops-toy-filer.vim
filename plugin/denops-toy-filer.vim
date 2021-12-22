command! -buffer  -nargs=* Dpiler call denops#plugin#wait_async('toy-filer', {->denops#notify('toy-filer', 'show', [<f-args>] )})

