const tweenFadeOut = (
    root,
    sel,
    duration = 1.5,
    fromVars = {opacity: 0},
    toVars = {opacity: 1},
  ) => {return TweenMax.fromTo(`${root} ${sel}`, 2, {opacity: 0}, {opacity: 1}) }

const tweenGrid = (
    root,
    child,
    duration = 1,
    fromVars = {opacity: 0},
    toVars = {opacity: 1},
    stagger = .2
  ) => { return TweenMax.staggerFromTo(`${root} > ${child}`, duration, fromVars, toVars, stagger) } 

const tweenSection = (
    sect, 
    duration = .7, 
    fromVars = {opacity: 0}, 
    toVars = {opacity: 1}
  ) => { return TweenMax.fromTo(`${sect}`, duration, fromVars, toVars) }

const tweenTabs = (
    root,
    duration = 1.5,
    fromVars = {opacity: 0, y: 35},
    toVars = {opacity: 1, y: 0},
    stagger = .3
  ) => { return TweenMax.staggerFromTo(`${root}.tabs>.tabs__tab`, 1, fromVars, toVars, stagger) }

const tweenPaginator = (
    root = '',
    duration = 2,
    fromVars = {opacity: 0, y: 35},
    toVars = {opacity: 1, y: 0},
    stagger = .3
  ) => { return TweenMax.staggerFromTo(`${root}.paginator > a`, duration, fromVars, toVars, stagger) }


