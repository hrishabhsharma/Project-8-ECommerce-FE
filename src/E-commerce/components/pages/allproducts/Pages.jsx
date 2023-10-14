import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from 'axios'

const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2em;
`;

const Card = styled.div`
  padding:1em;
  height: 20em;
  width: 12em;
  display:flex;
  flex-direction:column;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align:center;
`

const Image = styled.img`
  height: 120px;
  width: 110px;
  margin: 0 auto;
`
const Pages = ({ category }) => {
  const [Data, setData] = useState("")
  useEffect(() => {
    axios(`http://localhost:4000/${category}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, [category])

  return (
    <Wrapper>
      {
        Data && Data.map((item, index) =>
          <Card key={index}>
            <Image src={item.image} alt='not found' />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button>add to cart</button>
          </Card>
        )
      }
    </Wrapper>
  )
}

export default Pages