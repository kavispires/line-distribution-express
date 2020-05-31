export const getBackgroundColor = (hex = '#585818', luminance = 100) => {
  return {
    backgroundColor: hex,
    color: luminance > 55 ? '#000000' : '#FFFFFF',
  };
};

export const getForegroundColor = (hex = '#585818') => {
  return {
    color: hex,
  };
};
