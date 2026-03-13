const parseArray = (value: string | undefined) => {
  if (!value) return [];

  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
};

export { parseArray };
