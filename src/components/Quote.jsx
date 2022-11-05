import styled from '@emotion/styled'

import { BASE_CRYPTO_IMG_URL } from '../config/constants'

const Container = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Image = styled.img`
  display: block;
  width: 120px;
`

const Text = styled.p`
  font-size: 18px;

  span {
    font-weight: 700;
  }
`

const Price = styled.p`
  font-size: 24px;

  span {
    font-weight: 700;
  }
`

const Quote = ({ quote }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    quote

  return (
    <Container>
      <Image src={`${BASE_CRYPTO_IMG_URL}/${IMAGEURL}`} alt="Logo Crypto" />
      <div>
        <Price>
          Precio: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}%</span>
        </Text>
        <Text>
          Última actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  )
}

export default Quote
