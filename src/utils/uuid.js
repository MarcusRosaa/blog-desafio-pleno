/* eslint-disable no-bitwise */
/* eslint-disable no-mixed-operators */
export default function uuidGenerator() {
  let date = new Date().getTime();

  return new Promise((resolve) => {
    resolve(
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        (char) => {
          const r = (date + Math.random() * 16) % 16 | 0;
          date = Math.floor(date / 16);
          // eslint-disable-next-line space-infix-ops
          return (char === 'x' ? r : (r&0x3|0x8)).toString(16);
        },
      ),
    );
  });
}
