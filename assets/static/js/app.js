const tweenFadeOut = (
  root,
  sel,
  duration = 1.5,
  fromVars = {opacity: 0},
  toVars = {opacity: 1},
) => { return TweenMax.fromTo(`${root} ${sel}`, 2, {opacity: 0}, {opacity: 1}) }

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
  duration = 1,
  fromVars = {opacity: 0, y: 35},
  toVars = {opacity: 1, y: 0},
  stagger = .3
) => { return TweenMax.fromTo(`${root}.paginator`, duration, fromVars, toVars) }

const timelineHero = (root='.hero') => {
  return new TimelineMax()
    .fromTo(`${root}`, 2, {opacity: 0}, {opacity: 1})
    .fromTo(`${root} .header`, 1.5, {opacity: 0, y: -35}, {opacity: 1, y: 0}).call((targetObj) => {
        document.querySelector(`${root} ${targetObj}`).removeAttribute('style') 
      }, ['.header'])
    .fromTo(`${root} .hero__inf`, 1, {opacity: 0, y: 35}, {opacity: 1, y: 0})
    .fromTo(`${root} .hero__title`, 1, {opacity: 0}, {opacity: 1})
    .fromTo(`${root} .btn-scroll`, 1.5, {opacity: 0}, {opacity: 1})
}

const timelineHeading = (root= '') => {
  return new TimelineMax()
    .fromTo(`${root} .heading__title`, .7, {opacity: 0, y: -35}, {opacity: 1, y: 0})
    .fromTo(`${root} .heading__subtitle`, .5, {opacity: 0}, {opacity: 1})
    .fromTo(`${root} .heading__title + p`, 1, {opacity: 0, y: 35}, {opacity: 1, y: 0})
}

const timelineReservation = (root='') => {
  return new TimelineMax()
    .add(tweenFadeOut(root, '.res'))
}

const controller = new ScrollMagic.Controller()

/************************************************************* */
// NB Первые секции после секции hero устанавливаем в offset = 0
/************************************************************ */

window.addEventListener('load', () => {

const options = (obj = null, num = -250, bool = false) => {
  return {
    triggerElement: obj,
    offset: num,
    reverse: bool
  }
}

  /********* Page hero section *********/
new ScrollMagic.Scene(
  options('.hero', 0)
)
.setTween( 
  new TimelineMax()
    .add( timelineHero() )
  )
.addTo(controller)

/********** Homepage about section **********/
new ScrollMagic.Scene( 
  options('.home-about-sect', 0)
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.home-about-sect'))
    .add(timelineHeading('.home-about-sect'))
    .fromTo('.home-about-text', 1, {opacity: 0, x: -35}, {opacity: 1, x: 0})
    .fromTo('.home-about-text + .btn', 1, {opacity: 0, x: -35}, {opacity: 1, x: 0})
    .fromTo('.home-about-pic-container', 1, {opacity: 0, x: 35}, {opacity: 1, x: 0})
    .add(tweenFadeOut('.home-about-sect', '.home-view'))
)
.addTo(controller)

new ScrollMagic.Scene( // Home page menu section
  options('.home-menu-sect')
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.home-menu-sect'))
    .add(timelineHeading('.home-menu-sect'))
    .add(tweenTabs('.home-menu-tabs'))
    .add(tweenGrid('.home-menu-row', '.home-menu-col'))
    .add(tweenFadeOut('.home-menu-sect', '.home-view'))
)
.addTo(controller)

new ScrollMagic.Scene( // Home page reservation
  options('.home-res-sect')
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.home-res-sect'))
    .add(timelineHeading('.home-res-sect'))
    .add(timelineReservation())
)
.addTo(controller)

new ScrollMagic.Scene( // Home page blog section
  options('.home-blog-sect')
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.home-blog-sect'))
    .add(timelineHeading('.home-blog-sect'))
    .add(tweenGrid('.home-blog-row', '.home-blog-col'))
    .add(tweenFadeOut('.home-blog-sect', '.home-view'))
)
.addTo(controller)

/******* About page ***********/
new ScrollMagic.Scene(
  options('.about-us-sect', 0)
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.about-us-sect'))
    .add(timelineHeading('.about-us-sect'))
    .add(tweenGrid('.about-us-row', '.about-us-col'))
)
.addTo(controller)

new ScrollMagic.Scene(
  options('.about-food-sect')
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.about-food-sect'))
    .fromTo('.about-food-title', 1, {opacity: 0}, {opacity: 1})
    .fromTo('.about-food-title > span', 1, {opacity: 0, y: -35}, {opacity: 1, y: 0})
    .fromTo('.about-food-title + p', .5, {opacity: 0, y: 35}, {opacity: 1, y: 0})
    .fromTo('.about-food-sect .btn', 1, {opacity: 0}, {opacity: 1})
)
.addTo(controller)

/******* Menu page ***********/
new ScrollMagic.Scene(
  options('.our-menu', 0)
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.our-menu'))
    .add(timelineHeading('.our-menu'))
    .staggerFromTo('.our-menu-item', 1, {opacity: 0}, {opacity: 1}, 1)
)
.addTo(controller)

/******* page reservation table ***************/
new ScrollMagic.Scene(
  options('.res-table', 0)
)
.setTween(
  new TimelineMax()
    .add(tweenSection('.res-table-sect'))
    .add(timelineHeading('.res-table-sect'))
    .add(timelineReservation())
)
.addTo(controller)

/******* page team **********************/
new ScrollMagic.Scene(
  options('.team', 0)
)
.setTween(
  new TimelineMax()
    .add(timelineHeading('.team'))
    .add(tweenTabs('.team-tabs'))
    .add(tweenGrid('.team-row', '.team-col'))
    .add(tweenPaginator('.team-paginator'))
)
.addTo(controller)

/******* page contact  ***********/
new ScrollMagic.Scene(
  options('.cont', 0)
)
.setTween(
  new TimelineMax()
    .fromTo('.cont-connect-desc', 1, {opacity: 0, x: -35}, {opacity: 1, x: 0})
    .add(tweenFadeOut('.cont', '.cont-connect-form'))
)
.addTo(controller)

new ScrollMagic.Scene(
  options('.cont-info', -100
  )
)
.setTween(
  new TimelineMax()
    .add(tweenFadeOut('.cont', '.cont-info'))
    .staggerFromTo('.cont-info-col', .5, {opacity: 0}, {opacity: 1},.5)
)
.addTo(controller)
});