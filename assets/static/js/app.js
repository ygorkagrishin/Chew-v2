const controller = new ScrollMagic.Controller()

const optional = (

    obj = null,
    num = -250,
    bool = false

  ) => {
    return {
      triggerElement: obj,
      offset: num,
      reverse: bool
    }
}

/************************************************************* */
// NB Первые секции после секции hero устанавливаем в offset = 0
/************************************************************ */

/********* Page hero section *********/
new ScrollMagic.Scene(optional('.hero', 0))
  .setTween( 
    new TimelineMax()
      .add( timelineHero() )
    )
  .addTo(controller)

/********** Home page about section **********/
new ScrollMagic.Scene( 
    optional('.home-about-sect', 0)
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
    optional('.home-menu-sect')
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
    optional('.home-res-sect')
  )
  .setTween(
    new TimelineMax()
      .add(tweenSection('.home-res-sect'))
      .add(timelineHeading('.home-res-sect'))
      .add(timelineReservation())
  )
  .addTo(controller)

new ScrollMagic.Scene( // Home page blog section
    optional('.home-blog-sect')
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
    optional('.about-us-sect', 0)
  )
  .setTween(
    new TimelineMax()
      .add(tweenSection('.about-us-sect'))
      .add(timelineHeading('.about-us-sect'))
      .add(tweenGrid('.about-us-row', '.about-us-col'))
  )
  .addTo(controller)

new ScrollMagic.Scene(
    optional('.about-food-sect')
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
    optional('.our-menu', 0)
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
    optional('.res-table', 0)
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
    optional('.team', 0)
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
    optional('.cont', 0)
  )
  .setTween(
    new TimelineMax()
      .fromTo('.cont-connect-desc', 1, {opacity: 0, x: -35}, {opacity: 1, x: 0})
      .add(tweenFadeOut('.cont', '.cont-connect-form'))
  )
  .addTo(controller)

new ScrollMagic.Scene(
    optional('.cont-info', -100
    )
  )
  .setTween(
    new TimelineMax()
      .add(tweenFadeOut('.cont', '.cont-info'))
      .staggerFromTo('.cont-info-col', .5, {opacity: 0}, {opacity: 1},.5)
  )
  .addTo(controller)