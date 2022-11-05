import { BASE_QUOTE_URL } from '../config/constants'

export const getQuoteInfo = async (crypto, currency) => {
  const url = `${BASE_QUOTE_URL}?fsyms=${crypto}&tsyms=${currency}`

  const response = await fetch(url)
  const { DISPLAY: data } = await response.json()

  return data
}
