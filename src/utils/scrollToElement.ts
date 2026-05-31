const scrollToElement = (id: string) => {
  const header = document.getElementById('header');
  const element = document.getElementById(id);
  const isMobile = window.innerWidth < 768;

  if (element) {
    let scrollOffset = 0;

    if (header) {
      const headerComputedStyle = getComputedStyle(header);

      if (headerComputedStyle.position === 'sticky') {
        if (isMobile) {
          scrollOffset = header.offsetHeight;
        } else {
          scrollOffset = header.offsetHeight - 48;
        }
      }
    }

    window.scrollTo({
      top: element.offsetTop - scrollOffset,
      behavior: 'smooth',
    });
  }
};

export default scrollToElement;
