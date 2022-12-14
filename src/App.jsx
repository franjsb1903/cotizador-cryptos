import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImageCrypto from './img/imagen-criptos.png'

import Form from './components/Form'
import Quote from './components/Quote'
import Spinner from './components/Spinner'

import { getQuoteInfo } from './services/quoteServices'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [selected, setSelected] = useState({})
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(selected).length > 0) {
      const { crypto, currency } = selected
      const quoteCrypto = async () => {
        setLoading(true)
        setQuote({})

        const data = await getQuoteInfo(crypto, currency)

        setQuote(data[crypto][currency])
        setLoading(false)
      }

      quoteCrypto()
    }
  }, [selected])

  return (
    <Container>
      <Image src={ImageCrypto} alt="Image Crypto" />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Form setSelected={setSelected} />
        {loading && <Spinner />}
        {quote.PRICE && <Quote quote={quote} />}
      </div>
    </Container>
  )
}

export default App
