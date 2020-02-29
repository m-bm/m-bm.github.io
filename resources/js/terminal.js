require('terminal.js')
import hljs from 'highlight.js';
import Typed from 'typed.js';

$(document).ready(function(){
    // hljs.initHighlightingOnLoad();
    hljs.configure({useBR: true});

    document.querySelectorAll('.code').forEach((block) => {
      hljs.highlightBlock(block);
    });

    if ($('#typed').length != 0) {
      var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        backDelay: 3000,
        loop:true,
        typeSpeed:10
      });
    }
});
