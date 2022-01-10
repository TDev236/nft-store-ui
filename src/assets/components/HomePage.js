import styled from 'styled-components';
import { Colors } from '../Theme';
import SearchBar from './styled/SearchBar.styled';
import FeaturedTab from './FeaturedTab';
import MyBidsList from './MyBidsList';
import Tabs from './styled/Tabs.styled';
import PageContainer from './styled/PageContainer.styled';

const tabs = [
    { id: 1, title:'Destacado', content:<FeaturedTab/>},
    { id: 2, title:'Colecciones', content:<div>Tab2</div>},
    { id: 3, title:'Artistas', content:<div>Tab3</div>},
    { id: 4, title:'Etiquetas', content:<div>Tab4</div>},
];


const Title = styled.h1`
    font-family: 'DM Mono';
    font-weight: normal;
    font-size: 1.5rem;
    text-align:center;
    margin-bottom: 2rem;
`;
export default function HomePage() {
    return (
        <PageContainer>
            <Title>Polygon</Title>
            <SearchBar/>
            <Tabs tabs={tabs}/>
            <MyBidsList/>
        </PageContainer>
    )
}