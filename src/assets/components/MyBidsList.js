import styled from 'styled-components';
import bidImage from '../images/bidImage.png';
import { Colors } from '../Theme';
import Img from './styled/Img.styled';

const MyBidsListEl = styled.div`
    padding: 0 1rem;
    margin-top: 1rem;
`;

const Title = styled.h3`
    font-weight: 500;
    margin-bottom: 1rem;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const BidItemEl = styled.span`
    display: flex;
    padding: 0.5rem;
    cursor: pointer;
    width: 100%;
    align-items: center;
    transition-property: background-color, border-radius;
    transition-duration: 0.5s;

    &:hover {
        background-color: ${ Colors.Gray };
        border-radius: 12px;
    }
`;

const BidData = styled.span`
    margin-left: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 0.5rem;
    justify-content: center;
`;

const BidTitle = styled.span`
    font-weight: 500;
`;

const BDes = styled.span`
    color: ${ Colors.Gray };
`;

const BidAmount = styled.span`
    font-weight: 500;
`;

function BidItem() {
    return (
        <BidItemEl>
            <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage}/>
            <BidData>
                <BidTitle>Clay boyz 174</BidTitle>
                <BDes>Waldo</BDes>
            </BidData>
            <BidAmount>1.4 ETH</BidAmount>
        </BidItemEl>
    )
};


export default function MyBidsList () {
    return (
        <MyBidsListEl>
            <Title>Tus Lanzamientos</Title>
            <ItemList>
                <BidItem/>
                <BidItem/>
                <BidItem/>
            </ItemList>
        </MyBidsListEl>
    )
}