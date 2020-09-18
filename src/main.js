const Hexo = require('hexo');
const path= require('path');

const baseDir = path.join(process.cwd());
const configOptions = {
    debug: true
}

const hexo = new Hexo(baseDir, configOptions);

hexo.init().then(function(){
  console.log('hexo init success.')
});