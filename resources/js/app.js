import hljs from 'highlight.js';
import Typed from 'typed.js';

require('./bootstrap')
require('terminal.js')
require('@fortawesome/fontawesome-free')

// hljs.initHighlightingOnLoad();
hljs.configure({useBR: true});


var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backDelay: 3000,
  loop:true,
  typeSpeed:10
});
