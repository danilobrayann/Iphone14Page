import { BottaoCompra, BottaoTrocarCor, Circulo, H1, H2, ImagemIphone, Paragrafo, Preco, TextoPrincipal, } from "./style"

import IphoneAzul from "../../../assets/iphone-azul.png"
import IphoneAmarelo from "../../../assets/iphone-amarelo.png"
import IphoneBranco from "../../../assets/iphone-branco.png"
import IphonePreto from "../../../assets/iphone-preto.png"
import IphoneVermelho from "../../../assets/iphone-vemelho.png"
import IphoneRoxo from "../../../assets/iphone-roxo.png"


function TextMain() {

    const trocaCor = (cor: string) => {
        const circulo = document.querySelector(".Circulo1") as HTMLDivElement;
        circulo.style.background = cor;
    };

    const trocaImagem = (imagem: string) => {
        const imgIphone = document.querySelector(".Iphone1") as HTMLImageElement;
        imgIphone.src = imagem;
    };

    return (
        <div>
            <TextoPrincipal>
                <div>
                    <H1 > Iphone 14</H1 >
                    <H2>Tão poderoso com seu alcance</H2>
                    <Paragrafo>Em dois tamanho perfeito Agora com o toque de amarelo</Paragrafo>
                    <Preco>A partir de R$633,25/mês ou R$7.599*</Preco>
                    <BottaoCompra>Comprar</BottaoCompra>
                    <Paragrafo className="Escolher-Cor">Escolha sua cor</Paragrafo>

                    <div>
                        <BottaoTrocarCor onClick={() => { trocaCor('#81A5C4'); trocaImagem(IphoneAzul); }} className="Azul"></BottaoTrocarCor>
                        <BottaoTrocarCor onClick={() => { trocaCor('#F7DA47'); trocaImagem(IphoneAmarelo); }} className="Amarelo"></BottaoTrocarCor>
                        <BottaoTrocarCor onClick={() => { trocaCor('#C1C1C1'); trocaImagem(IphoneBranco); }} className="Branco"></BottaoTrocarCor>
                        <BottaoTrocarCor onClick={() => { trocaCor('#272D33'); trocaImagem(IphonePreto) }} className="Preto"></BottaoTrocarCor>
                        <BottaoTrocarCor onClick={() => { trocaCor('#B50012'); trocaImagem(IphoneVermelho) }} className="Vermelho" ></BottaoTrocarCor>
                        <BottaoTrocarCor onClick={() => { trocaCor('#d5a8fa'); trocaImagem(IphoneRoxo) }} className="Roxo"></BottaoTrocarCor>
                    </div>
                    <Circulo className="Circulo1"></Circulo>

                </div>
                <ImagemIphone src={IphoneAzul} alt="Foto do Iphone" className="Iphone1" />
            </TextoPrincipal>
        </div>
    )

}

export default TextMain