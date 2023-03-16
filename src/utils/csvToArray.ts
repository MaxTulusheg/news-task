/**
 * Converts CSV text into Array of objects.
 */
export const csvToArray = (csvText: string): { [key: string]: string }[] => {
  let results: { [key: string]: string }[] = [];

  const rows = csvText.split('\n').map((row) => row.split(';'));
  // Get keys for future entities
  const keys = rows.splice(0, 1)[0].map((key) => key.trim());

  results = rows
    .map((data) => {
      const item: { [key: string]: string } = {};

      keys.forEach((key, index) => {
        if (data[index]) {
          // It seems there are some text converting issues in csv file
          item[key] = data[index]?.replaceAll('�', "'");
        }
      });

      return item;
    })
    // Remove empty entities
    .filter((item) => Object.keys(item).length);

  return results;
};
