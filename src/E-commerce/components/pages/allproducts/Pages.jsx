import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "./Pages.css"

const Wrapper = styled.section`
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5em;
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
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation().state
  const navigator = useNavigate()
  const [Data, setData] = useState([])
  useEffect(() => {
    axios(`http://localhost:4000/${category}`)
      .then((res) => {
        if (location) {
          return setData(res.data.data.filter((i) => i.brand === location.brand))
        }
        setIsLoading(true)
        return setData(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [category, location])

  return (
    <Wrapper>
      {isLoading
        ? (Data && Data.map((item, index) =>
          <Card key={index} onClick={() => navigator(`/${item.category}/${item.id}`)}>
            <Image src={item.image} alt='not found' />
            <span>{item.title}</span>
            <div className='cardBottom'>
              <p className='sellingPrice'>{item.sellingPrice}</p>
              <p className='costPrice'>{item.costPrice}</p>
              <p className='discount'>{item.discount}off</p>
            </div>
          </Card>
        ))
        : <div style={{ display: 'flex', justifyContent: 'center', width: '100%', height: "100%" }}>
          <CircularProgress />
        </div>
      }
    </Wrapper>
  )
}

export default Pages