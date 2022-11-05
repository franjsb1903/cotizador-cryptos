import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelect from '../hooks/useSelect'
import { currencyList } from '../data/currency'

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    background-color: #7a7dfe;
  }
`

const Form = ({ setSelected }) => {
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)

  const [currency, SelectCurrency] = useSelect('Elige tu Moneda', currencyList)
  const [crypto, SelectCrypto] = useSelect('Elige tu Criptomoneda', cryptos)

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

      const response = await fetch(url)
      const { Data: data } = await response.json()

      const arrayCryptos = data.map(crypto => {
        const { Name: id, FullName: name } = crypto.CoinInfo

        return { id, name }
      })
      setCryptos(arrayCryptos)
    }
    fetchData()
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    if ([currency, crypto].includes('')) {
      setError(true)
      return
    }

    setError(false)
    setSelected({
      currency,
      crypto,
    })
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form>
        <SelectCurrency />
        <SelectCrypto />
        <InputSubmit type="submit" value={'Cotizar'} onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Form
