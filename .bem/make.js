/* jshint node:true */
/* global MAKE */

var environ = require('bem-environ')(__dirname);
environ.extendMake(MAKE);

//process.env.YENV = 'production';
//process.env.XJST_ASYNCIFY = 'yes';

MAKE.decl('Arch', {

  bundlesLevelsRegexp: /^(pages.*|.+?\.pages|bundles.*|.+?\.bundles)/i,
  blocksLevelsRegexp: /^(blocks.*|.+?\.blocks)/i,

  libraries: [
    'bem-core @ 8c712ef38922847fc71d37da0a419aa92a1acaad',
    'bem-components @ 82301a8af6c15c2849d1f755a24f594de6522251'
  ]

});


MAKE.decl('BundleNode', {

  getTechs: function () {

    return [
      'bemjson.js',
      'bemdecl.js',
      'deps.js',
      'bemhtml',
      'browser.js+bemhtml',
      'css',
      'ie.css',
      'html'
    ];

  },

  'create-browser.js+bemhtml-optimizer-node': function (tech, sourceNode, bundleNode) {
    sourceNode.getFiles().forEach(function (f) {
      this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
    }, this);
  }

});
