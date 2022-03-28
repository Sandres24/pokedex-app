export const typesFormat = (types, index) => {
   if (types[index + 1]) return [types[index].type.name + ' / '];
   return types[index].type.name;
};
