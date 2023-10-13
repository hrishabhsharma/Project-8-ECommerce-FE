import styled from "@emotion/styled";

const mobiles = [
  {
    id: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_6xL_LNY9cGT7vCvN4FDSs3o14lQv7WB5vsakMafONTFtLDb",
    title: "Apple iPhone 14",
    price: "67999"
  },
  {
    id: "2",
    image: "https://m.media-amazon.com/images/I/31AUcMGV1jL._SY445_SX342_QL70_FMwebp_.jpg",
    title: "Apple iPhone SE",
    price: "49900"
  },
  {
    id: "3",
    image: "https://rukminim2.flixcart.com/image/416/416/j9d3bm80/mobile/f/y/v/apple-iphone-x-mqa92hn-a-original-imaeyysgqbg8qmhn.jpeg?q=70",
    title: "APPLE iPhone X",
    price: "91900"
  },
  {
    id: "4",
    image: "https://rukminim2.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    title: "Apple iPhone 11",
    price: "42999"
  },
  {
    id: "5",
    image: "https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/m/t/r/iphone-13-pro-mlvv3hn-a-apple-original-imag6vpb7zg6bnvb.jpeg?q=70",
    title: "APPLE iPhone 13 Pro",
    price: "125999"
  },
  {
    id: "6",
    image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UY327_QL65_.jpg",
    title: "OnePlus Nord CE 2 Lite 5G",
    price: "17999"
  },
  {
    id: "7",
    image: "https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UY327_FMwebp_QL65_.jpg",
    title: "OnePlus 11R 5G",
    price: "39999"
  },
  {
    id: "8",
    image: "https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UY327_FMwebp_QL65_.jpg",
    title: "OnePlus Nord CE 3 Lite 5G",
    price: "19999"
  },
  {
    id: "9",
    image: "https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UY327_FMwebp_QL65_.jpg",
    title: "OnePlus Nord CE 2 Lite 5G",
    price: "34999"
  },
  {
    id: "10",
    image: "https://m.media-amazon.com/images/I/6175SlKKECL._AC_UY327_FMwebp_QL65_.jpg",
    title: "OnePlus Nord CE 3 5G",
    price: "26999"
  },
  {
    id: "11",
    image: "https://m.media-amazon.com/images/I/716CAI7WX1L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy Z Flip5 5G",
    price: "99999"
  },
  {
    id: "12",
    image: "https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy S20 FE 5G",
    price: "26999"
  },
  {
    id: "13",
    image: "https://m.media-amazon.com/images/I/71F4jU7MRUS._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy M32",
    price: "16999"
  },
  {
    id: "14",
    image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy M04 Dark Blue",
    price: "8999"
  },
  {
    id: "15",
    image: "https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung Galaxy S20 FE 5G",
    price: "26999"
  },
]

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
const Pages = ({category}) => {
  return (
    <Wrapper>
      {
        mobiles && mobiles.map((item,index)=>
        <Card key={index}>
          <Image src={item.image} alt='not found'/>
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