const validatePositiveInteger = (number) => {
  return Number.isInteger(number) && number > 0
}

export {
  validatePositiveInteger
}
