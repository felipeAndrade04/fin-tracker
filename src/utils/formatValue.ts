const commaBoundary = /\B(?=(\d{3})+(?!\d))/g;

export default function formatPrice(value: number, numDecimalPlaces = 0) {
  const stringValue = (value / 100).toFixed(numDecimalPlaces);
  return `R$ ${stringValue.replace(commaBoundary, ',')}`;
}
// export const {format: formatPrice} = new Intl.NumberFormat('pt-BR', {
//   style: 'currency',
//   currency: 'BRL',
// });
