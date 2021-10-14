export const getDates = (text: string): string =>
  [
    ...new Set(text?.match(/([1-9]|[12]\d|3[01])\/([1-9]|1[0-2])\/[12]\d{3}/g)),
  ]?.join(', ');

export const getCreatedDate = (): string =>
  `${new Date().toLocaleString('en', {
    month: 'long',
    day: '2-digit',
  })}, ${new Date().getFullYear()} `;
