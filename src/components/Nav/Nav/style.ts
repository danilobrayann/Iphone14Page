import styled from 'styled-components';

export const NavBarMenu = styled.nav`
display:flex;
height:50px;
align-items:center;
justify-content:center;
border-bottom: 1px solid white ;


`

export const ImgLogo = styled.img`
height:20px;


`

export const ListaNav = styled.ul`
display:flex;
gap:100px;
list-style:none;
margin-left:100px;
color:white;

`
export const LinhaNav = styled.li`
font-size:12px;
font-weight:400;
cursor: pointer;

&:hover{
    color:red;
}
`

