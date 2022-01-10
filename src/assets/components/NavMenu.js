import styled from 'styled-components';
import { FiHome } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { Colors } from "../Theme.js";
import { useLocation, useNavigate } from 'react-router-dom';
import StorePage from './StorePage.js';

const NavMenuEl=styled.nav`
    display: flex;
    background-color:rgba(255,255,255,0.01);
    position: absolute;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 10%;
    backdrop-filter: blur(50px);
    padding: 40px;
`;

const Link = styled.a`
    font-size: 1.7rem;
    ${p=>p.active?`color:${Colors.Primary};`:''};
    position: relative;
    cursor: pointer;

    ::before {
            ${(p) => (!p.active ? 'display:none;': '')};
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0.3rem;
        border-radius: 50%;
        height: 0.3rem;
        background-color: ${ Colors.Primary };
    }
`;
export default function NavMenu() {
    const nav = useNavigate();
    return (
        <NavMenuEl>
            <Link >
                <FiHome onClick={() => {
                    nav('./')
                }}/>
            </Link>
            
            <Link active>
                <BiStore onClick={() => {
                    nav('./store');
                }}/>
            </Link>
            
            <Link>
                <AiOutlineUser/>
            </Link>
            
            
        </NavMenuEl>
    )
}