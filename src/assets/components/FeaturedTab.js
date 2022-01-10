import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import { Colors } from '../Theme';
import Img from './styled/Img.styled';

const items = [
    {id:1,title:'Universo 34', subtitle:'Marketi',image:image1},
    {id:2,title:'Santo', subtitle:'Lea Koseva',image:image2},
    {id:3,title:'StrangeW', subtitle:'Pablo Mari',image:image3},
    {id:4,title:'Life strawberry', subtitle:'LNer',image:image4},
]

const FeaturedTabEl = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    position: relative;
    overflow-y: hidden;
    height: 400px;
`;

const Item = styled.div `
    background-color: ${ Colors.CardBackground };
    padding: 0.4rem;
    border-radius: 12px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
`;
const Title = styled.span`
    font-size: 1.1rem;
    margin-top: 0.5rem;
`;
const SubTitle = styled.span`
    color:${Colors.Gray};
    font-size: 1rem;
`;
const ShowMore = styled.span`
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    font-weight: 500;
    background-color:rgba(255,255,255,.32) ;
    padding: 1rem;
    border: 1px solid ${Colors.GrayBorder};
    backdrop-filter: blur(17px);
    border-radius: 12px;
`;
const BottomFade = styled.span`
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25%;
    background-image: linear-gradient(rgba(255,255,255,0), ${Colors.Background});;
`;

export default function FeaturedTab() {
        const nav = useNavigate();
     return (
         <FeaturedTabEl>
             {items.map((item) => {
                 return (
                     <Item onClick={() => {
                         nav("/product");
                     }}>
                        <Img src={item.image}/>
                         <Title>{item.title}</Title>
                         <SubTitle>{item.subtitle}</SubTitle>
                     </Item>
                 );
             })}
             <BottomFade/>
             <ShowMore>
                 <BiChevronDown/> Mostrar Mas
             </ShowMore>

         </FeaturedTabEl>
     )
}