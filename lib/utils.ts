export const cn = (...classes: (undefined | null | string | false)[]) => {
  return classes.filter(Boolean).join(' ');
};
