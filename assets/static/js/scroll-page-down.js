(function () {

const trigger = document.body.querySelector('#js-scroll-down');

return trigger !== (undefined || null) ? trigger.addEventListener('click', function (e) {
  e.preventDefault();
    
  const viewPort = window;
  const viewPortHeight = viewPort.innerHeight;
    
  const scrolled = viewPort.pageYOffset;  
  const scrollTo = viewPortHeight - scrolled;
    
  const wrapper = document.body.querySelector('#js-scroll-content');
    
  const duration = 700;
    
  const styleProperety = wrapper.style;
    
  if (!wrapper.classList.contains('active')) {
    wrapper.classList.add('active');
    
    styleProperety.transform = `translateY(-${scrollTo}px)`;
    styleProperety.transition = `${duration}ms`;
  } else return;
    
  setTimeout(() => {
    if (wrapper.classList.contains('active')) 
    wrapper.classList.remove('active');
    
    wrapper.removeAttribute('style');
    viewPort.scrollTo(0, viewPortHeight);
    
  }, duration);
}) : false;

})()