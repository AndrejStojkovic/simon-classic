export const getHighScoreLocalStorage = () => {
  return localStorage.getItem('high-score');
}

export const setHighScoreLocalStorage = (val: string) => {
  localStorage.setItem('high-score', val);
}

export const getSimonSizeLocalStorage = () => {
  return localStorage.getItem('size');
}

export const setSimonSizeLocalStorage = (val: string) => {
  localStorage.setItem('size', val);
}

export const getSimonSpeedLocalStorage = () => {
  return localStorage.getItem('speed');
}

export const setSimonSpeedLocalStorage = (val: string) => {
  localStorage.setItem('speed', val);
}