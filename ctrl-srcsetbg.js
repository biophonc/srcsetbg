(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    return define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    return module.exports = factory();
  } else {
    return root.ctrlSrcSetBg = factory();
  }
})(this, function() {
  return function(cssklass) {
    var c, cmp, col, i, j, len, prp, results, set, srcset, w;
    c = typeof cssklass === 'undefined' ? 'srcsetbg' : cssklass;
    w = window.innerWidth;
    col = document.getElementsByClassName(c);
    cmp = function(a, b) {
      if (a.w < b.w) {
        return -1;
      } else if (a.w > b.w) {
        return 1;
      } else {
        return 0;
      }
    };
    prp = function(e) {
      var a, bw;
      a = e.split(' ');
      bw = parseInt(a[1].slice(0, -1), 10);
      return {
        w: bw,
        src: a[0]
      };
    };
    set = function(e) {
      if (w > e.w) {
        i.style.backgroundImage = 'url(' + e.src + ')';
      }
      if (w < e.w) {
        return i.style.backgroundImage = 'url(' + e.src + ')';
      }
    };
    results = [];
    for (j = 0, len = col.length; j < len; j++) {
      i = col[j];
      srcset = i.getAttribute('data-srcset').split(',').map(Function.prototype.call, String.prototype.trim).map(function(e) {
        return prp(e);
      });
      results.push(srcset.sort(cmp).some(function(e) {
        return set(e);
      }));
    }
    return results;
  };
});
