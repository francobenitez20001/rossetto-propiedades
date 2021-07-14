const isMobile = ()=>{
  if(typeof window !== "undefined"){
      if(window.innerWidth>860) return false;
      return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))||
        window.innerWidth<=860
      );
  }
}

export {isMobile}
