export const convertIntegerToCurrency = (value: number): string => 
  new Intl.NumberFormat('pl-Pl', { style: 'currency', currency: 'PLN' }).format(value);