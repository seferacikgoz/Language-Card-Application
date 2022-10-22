import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
const Language = ({name, img, options}) => {
console.log(name, img, options)
  return (
   <Container>
    <Container>
    <Image src={img} width="70%"></Image>
    </Container>
   </Container>
  )
}

export default Language