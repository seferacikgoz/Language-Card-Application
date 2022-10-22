import Language from "./Language"
import Container from "react-bootstrap/esm/Container"


const Card = () => {
  return (
    <Container style={{ background: "#f48b29"}}>
    <h1>Language</h1>
    <Language/>
    </Container>
  )
}

export default Card