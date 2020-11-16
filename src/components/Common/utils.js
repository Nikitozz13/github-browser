export const sortData = (data) => {
  if (!data.tree) return [];
  return data.tree
    .sort((a, b) => a.type === 'tree' ? -1 : 0)
    .sort((a, b) => {
      if (a.type !== 'tree') return 0
      return a.path < b.path ? -1 : 1
    });
};

export const remapData = data => {
  let result = [];
  let level = { result };

  data.forEach((item, index) => {
    const paths = item.path.split('/');
    paths.reduce((acc, path, i, a) => {
      if(!acc[path]) {
        acc[path] = {result: []};
        if (i === paths.length - 1 && item.type === 'blob') {
          acc.result.push({
            ...item,
            name: path
          });
        } else {
          acc.result.push({
            name: path,
            children: acc[path].result
          });
        }
      }
      
      return acc[path];
    }, level)
  });

  return result;
};
