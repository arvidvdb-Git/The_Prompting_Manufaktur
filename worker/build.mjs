import {mkdir,copyFile,cp,rm} from 'node:fs/promises';
await rm('public',{recursive:true,force:true});await mkdir('public');
for(const name of ['index.html','styles.css','content.js','tools.js','app.js','library.js','site-config.js','The-Prompt-Cheat-Sheet.pdf'])await copyFile(name,'public/'+name);
await cp('assets','public/assets',{recursive:true});
