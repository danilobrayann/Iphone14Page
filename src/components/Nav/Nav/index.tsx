
import { ImgLogo, LinhaNav, ListaNav, NavBarMenu } from './style'
import logo from '../../../assets/logo.png'


function NavBar() {

    return (

        <div>
            <NavBarMenu>
                <ImgLogo src={logo} alt="" />
                <ListaNav>
                    <LinhaNav >Mac</LinhaNav >
                    <LinhaNav >iPhone</LinhaNav >
                    <LinhaNav >iPad</LinhaNav >
                    <LinhaNav >Watch</LinhaNav >
                    <LinhaNav >AirPods</LinhaNav >
                    <LinhaNav >Acessórios</LinhaNav >
                    <LinhaNav >Suporte</LinhaNav >
                </ListaNav>
            </NavBarMenu>
        </div>


    )

}

export default NavBar