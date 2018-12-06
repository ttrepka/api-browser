/**
 * Get all keys in an object, sorted alphabetically
 * Nested keys are returned in dotted notation (eg. 'address.street')
 */
export const getObjectKeys = obj => {
  let keys = [];

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      const subkeys = getObjectKeys(obj[key]);
      keys = [...keys, ...subkeys.map(subkey => `${key}.${subkey}`)];
    } else {
      keys.push(key);
    }
  }

  return keys.sort();
};
