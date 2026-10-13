export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function formatNumber(num) {
  return num < 10 ? `0${num}` : `${num}`
}
