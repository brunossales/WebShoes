function windowButton(sHeight: Number) {
    return sHeight > window.innerHeight;
  }
  
export function windowScroll() {
    const isWindow = windowButton(document.documentElement.scrollHeight)
    if (isWindow)
      return scrollY > 50;
    return true;
  } 