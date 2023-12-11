export const isMobile = () => {
  if (window.screen.width < 768) {
    return true;
  }
  return false;
};

export const DateTime = () => {
  return new Date();
};
