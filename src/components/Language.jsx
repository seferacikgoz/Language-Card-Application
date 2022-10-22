import { useState } from "react";
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"


const Language = ({name, img, options}) => {
    const [showDesc, setShowDesc] = useState(false);

/*  console.log(name, img, options)  */

console.log(showDesc)


  return (
   <Container style={{background: "peachpuff"}}
    className="p-4 rounded-4" 
    onClick={() => setShowDesc(!showDesc)}>

    <Container>
    <Image src={img} width="70%"></Image>
    <h3 className="display-6">{name}</h3>
    </Container>
    <ol>
        {options.map((item) => {
            return(
                <li className="h5 text-start">{item}</li>
            )
        })}

    </ol>  
  
   </Container>
  )
}

export default Language