const controller = new ScrollMagic.Controller()

const timelineHero = new TimelineMax()
  .fromTo('.hero', 2, {opacity: 0}, {opacity: 1})
  .fromTo('.header', 2, {opacity: 0, y: -35}, {opacity: 1, y: 0})
  .fromTo('.hero__inf', 1, {opacity: 0, y: 35}, {opacity: 1, y: 0})
  .fromTo('.hero__title', 1, {opacity: 0}, {opacity: 1})

const timelineHeading = new TimelineMax()
  .fromTo('.heading', 1.5, {opacity: 0, y: -35}, {opacity: 1, y: 0})
  .fromTo('.heading p', 1.5, {opacity: 0, y: 35}, {opacity: 1, y: 0})
  .fromTo('.heading__subtitle', 1, {opacity: 0}, {opacity: 1})

//TODO: What doesn't work this facking code
const tweenTabs =TweenMax.staggerFromTo('.tabs a', 1, {opacity: 0, x: -35}, {opacity: 1, x: -55}, 1)

const timelineFooter = new TimelineMax()
  .fromTo('.footer', 2, {opacity: 0}, {opacity: 1})
  .staggerFromTo('.footer__inf>li', 1, {opacity: 0}, {opacity: 1}, 0.3)
  .fromTo('.footer__logo, .footer__social', 2, {opacity: 0}, {opacity: 1})

const timelineReservation = new TimelineMax()
  .fromTo('.res-form-container', 1, {opacity: 0, x: -35}, {opacity: 1, x: 0})
  .fromTo('.res-loc', 1, {opacity: 0, x: 35}, {opacity: 1, x: 0})