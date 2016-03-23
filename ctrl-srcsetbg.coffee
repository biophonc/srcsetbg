#
# set backgrounds based on the browser width
#

((root, factory) ->
  if typeof define is 'function' and define.amd
    define([], factory)
  else if typeof module is 'object' and module.exports
    module.exports = factory()
  else
    root.ctrlSrcSetBg = factory()

)(this, () ->
  return (cssklass) ->
    c = if (typeof cssklass is 'undefined') then 'srcsetbg' else cssklass
    w = window.innerWidth
    col = document.getElementsByClassName(c)

    # sorting fn
    cmp = (a, b) ->
      if a.w < b.w
        return -1
      else if a.w > b.w
        return 1
      else
        return 0

    # prepare for sorting and make data easier accessible
    prp = (e) ->
      a = e.split(' ')
      bw = parseInt(a[1].slice(0, -1), 10)
      return w: bw, src: a[0]

    # set background image
    set = (e) ->
      if w > e.w
        i.style.backgroundImage = 'url('+e.src+')'

      if w < e.w
        i.style.backgroundImage = 'url('+e.src+')'

    # loop over found elements
    for i in col
      srcset = i.getAttribute('data-srcset')
      .split(',')
      .map(Function.prototype.call, String.prototype.trim)
      .map((e) -> prp(e))

      srcset.sort(cmp)
      .some((e) -> set(e))
)
