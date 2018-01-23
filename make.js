#!/user/bin/env nodejs
'use strict';

const fs = require('fs');
require('shelljs/make');

let pnotify_src = {
  'core': 'PNotify.html',
  'animate': 'PNotifyAnimate.html',
  'buttons': 'PNotifyButtons.html',
  'callbacks': 'PNotifyCallbacks.html',
  // 'confirm': 'PNotifyConfirm.?',
  // 'desktop': 'PNotifyDesktop.?',
  // 'history': 'PNotifyHistory.?',
  // 'mobile': 'PNotifyMobile.?',
  // 'nonblock': 'PNotifyNonBlock.?',
  'stylematerial': 'PNotifyStyleMaterial.html',
  'reference': 'PNotifyReference.html',
};

let pnotify_js = {
  'core': 'PNotify.js',
  'animate': 'PNotifyAnimate.js',
  'buttons': 'PNotifyButtons.js',
  'callbacks': 'PNotifyCallbacks.js',
  // 'confirm': 'PNotifyConfirm.js',
  // 'desktop': 'PNotifyDesktop.js',
  // 'history': 'PNotifyHistory.js',
  // 'mobile': 'PNotifyMobile.js',
  // 'nonblock': 'PNotifyNonBlock.js',
  'stylematerial': 'PNotifyStyleMaterial.js',
  'reference': 'PNotifyReference.js',
};

let pnotify_css = {
  'brighttheme': 'PNotifyBrightTheme.css',
  // 'history': 'PNotifyHistory.css',
  // 'mobile': 'PNotifyMobile.css',
  // 'nonblock': 'PNotifyNonBlock.css',
};

let root = __dirname + '/';

for (let module in pnotify_src) {
  target[module+'_lib'] = (args) => compile_js(module, pnotify_src[module], args);

  ((target) => {
    const existing = target[module];

    target[module] = (args) => {
      existing && existing(args);
      target[module+'_lib'](args);
    };
  })(target);
}

for (let module in pnotify_js) {
  target[module+'_js'] = (args) => compress_js(module, pnotify_js[module], args);

  ((target) => {
    const existing = target[module];

    target[module] = (args) => {
      existing && existing(args);
      target[module+'_js'](args);
    };
  })(target);
}

for (let module in pnotify_css) {
  target[module+'_css'] = () => compress_css(module, pnotify_css[module]);

  ((target) => {
    const existing = target[module];

    target[module] = (args) => {
      existing && existing(args);
      target[module+'_css'](args);
    };
  })(target);
}

target.dist = (args) => {
  for (let module in pnotify_src) {
    target[module+'_lib'](args);
  }
  for (let module in pnotify_js) {
    target[module+'_js'](args);
  }
  for (let module in pnotify_css) {
    target[module+'_css'](args);
  }
};


// Functions

let compile_js = (module, filename, args) => {
  let format = setup(args);
  const src_filename = 'src/' + filename;
  const dst_filename = 'lib/' + format + '/' + filename.replace(/\.html$/, '.js');
  echo('Compiling JavaScript '+module+' from '+src_filename+' to '+dst_filename);
  echo('Generating source map for '+dst_filename+' in '+dst_filename+'.map');

  let inputCode, inputMap, isSvelte = filename.slice(-4) === 'html';
  if (isSvelte) {
    // Use Svelte to compile the code first.
    const svelte = require('svelte');
    const {code, map} = svelte.compile(fs.readFileSync(src_filename, "utf8"), {
    	format: format === 'iife' ? 'iife' : 'es',
    	filename: src_filename,
    	name: filename.replace(/\.html$/, ''),
    	onerror: err => {
    		console.error(err);
    	},
    	onwarn: warning => {
    		console.warn(warning);
    	},
      cascade: false
    });
    [inputCode, inputMap] = [code, map];
    inputMap.file = filename.replace(/\.html$/, '.js');
    inputCode += '\n//# sourceMappingURL='+filename.replace(/\.html$/, '.js')+'.map';
  } else {
    inputCode = fs.readFileSync(src_filename, "utf8");
    inputMap = null;
  }
  const babel = require('babel-core');
  const plugins = ["transform-class-properties", "transform-object-assign"];
  if (['iife', 'es'].indexOf(format) === -1) {
    plugins.push('transform-es2015-modules-'+format);
  }
  const {code, map} = babel.transform(inputCode, {
    inputSourceMap: inputMap,
    moduleId: filename.replace(/\.(html|js)$/, ''),
    filename: filename.replace(/\.html$/, '.js'),
    filenameRelative: src_filename,
    sourceMapTarget: src_filename,
    moduleRoot: '',
    sourceMaps: 'both',
    sourceRoot: '../',
    presets: [
      'env',
      'stage-3'
    ],
    plugins: plugins,
    sourceType: (format === 'iife' && isSvelte) ? 'script' : 'module'
  });

  code.to(dst_filename);
  JSON.stringify(map).to(dst_filename+'.map');
};

let compress_js = (module, filename, args) => {
  let format = setup(args);
  const src_filename = 'lib/' + format + '/' + filename;
  const dst_filename = 'dist/' + format + '/' + filename;
  echo('Compressing JavaScript '+module+' from '+src_filename+' to '+dst_filename);
  echo('Generating source map for '+dst_filename+' in '+dst_filename+'.map');

  const UglifyJS = require('uglify-js');
  const options = {
    sourceMap: {
      root: '../',
      filename: filename,
      url: filename+'.map'
    }
  };
  const {code, map} = UglifyJS.minify({
    [filename]: fs.readFileSync(src_filename, "utf8")
  }, options);
  code.to(dst_filename);
  map.to(dst_filename+'.map');
};

let compress_css = (module, filename) => {
  setup();
  const src_filename = 'src/' + filename;
  const dst_filename = 'dist/' + filename;
  echo('Compressing CSS '+module+' from '+src_filename+' to '+dst_filename);

  const CleanCSS = require('clean-css');
  const options = {
    rebase: false
  };
  (new CleanCSS(options).minify(fs.readFileSync(src_filename, "utf8"))).styles.to(dst_filename);
};

let setup = (args) => {
  let format = 'iife';
  (args || []).filter(arg => arg.match(/^--format=/)).map(arg => format = arg.slice(9));
  cd(__dirname);
  mkdir('-p', 'lib/'+(args ? format : ''));
  mkdir('-p', 'dist/'+(args ? format : ''));
  return format;
};

let get_intro = (filename) => {
  let code = fs.readFileSync(filename, "utf8");
  if (code.slice(0, 2) == '//') {
    return code.slice(0, code.indexOf('\n') + 1);
  } else if (code.slice(0, 2) == '/*') {
    return code.slice(0, code.indexOf('*/\n') + 3);
  } else {
    return '';
  }
};
