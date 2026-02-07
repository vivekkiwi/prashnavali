export const chunkButtons = (values, size) => {
  const rows = [];
  for (let i = 0; i < values.length; i += size) {
    rows.push(values.slice(i, i + size));
  }
  return rows;
};