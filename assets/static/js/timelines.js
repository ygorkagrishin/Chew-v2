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