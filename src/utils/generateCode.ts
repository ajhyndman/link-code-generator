export const generateCode = () => {
  const value = Math.trunc(Math.random() * 10000);
  const string = value.toString();

  return string.padStart(4, '0')
};
