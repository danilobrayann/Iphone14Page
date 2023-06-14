import styled from "styled-components";

// declarando a variavel classname?
interface StyledComponentProps {
    ClassName?: string;
}

export const TextoPrincipal = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:50px;

`

export const H1 = styled.h1`
font-size:25px;
color:white;
`

export const H2 = styled.h2`
font-size:35px;
margin-top:10px;
margin-bottom:20px;
color:white;
`

export const Paragrafo = styled.p <StyledComponentProps>`
font-size: 16px;
margin-bottom: 25px;
color:white;
&.Escolher-Cor{
    font-size:16px;
    font-weight:700;
    margin-top:30px;
    margin-bottom:10px;
    
}
`

export const Preco = styled.p`
font-size:19px;
font-weight:300;
margin-bottom:30px;
color:white;

`

export const BottaoCompra = styled.button`
 background-color: #0071e3;
 color:#fff;
 padding:10px 20px;
 border:none;
 border-radius:20px;
 font-size:20px;
 cursor: pointer;
 &:hover{
    background-color: #77a8da;
    color: #062d55;
    transition: 0.5s;
 }
`




export const BottaoTrocarCor = styled.button<StyledComponentProps >`
width:40px;
height:40px;
border-radius:50px;
cursor: pointer;

&.Azul{
    background-color:#81A5C4;
}
&.Amarelo{
    background-color:#F7DA47;
}
&.Branco{
    background-color:#C1C1C1;
}
&.Preto{
    background-color:#272D33;
}
&.Vermelho{
    background-color:#B50012;
}
&.Roxo{
    background-color:#d5a8fa;
}
`
export const Circulo = styled.div <StyledComponentProps>`
width:100%;
height:100%;
background-color:#81A5C4;
position:absolute;
top:0;
left:0;
clip-path:circle(600px at right 1000px );
`

export const ImagemIphone = styled.img <StyledComponentProps> `
width:300px;
margin-top:80px;
background-color:transparent;
z-index:8;
`


