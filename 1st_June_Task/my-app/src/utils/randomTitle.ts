const titles = [
    'Super Gadget',
    'Cool Device',
    'Awesome Tool',
    'Fantastic Product',
    'Incredible Item'
  ];
  
  export const getRandomTitle = (): string => {
    const index = Math.floor(Math.random() * titles.length);
    return titles[index];
  };
  