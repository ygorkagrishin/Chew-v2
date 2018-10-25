const heroTimeline = new TimelineMax()

heroTimeline
  .fromTo('header', 2, {
    opacity: 0,
    y: -35 
  }, {
    opacity: 1,
    y: 0
  }).fromTo('.hero__inf', 1, {
    opacity: 0,
    y: 35
  }, {
    opacity: 1,
    y: 0
  }).fromTo('.hero__title', 1, {
    opacity: 0
  }, {
    opacity: 1
  })