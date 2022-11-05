import styled from '@emotion/styled'
import '../styles/Spinner.css'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = styled.div`
  border: 5px solid #fff;
  border-top: 5px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const Spinner = () => {
  return (
    <Container>
      <Loading className="loader" />
    </Container>
  )
}

export default Spinner
