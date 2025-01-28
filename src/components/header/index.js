import { Link } from "react-router-dom";
import Logo from "../../assets/images/milogo.png";
import CountryDropdown from "../CoutryDropdown/paises";
import Button from '@mui/material/Button';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import SearchBox from "./SearchBox/caja";
import Navigation from "./Navigation/navigation";
import { MyContext } from "../../App";
import { useContext } from "react";

const Header = () => {
    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, fugit!</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-1">
                                <Link to={'/'}>
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                           
                                {
                                    context.countryList.lenght!==0 && <CountryDropdown /> 
                                }

                                <SearchBox />

                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className="circle mr-3"><FaRegUserCircle /></Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$3.29</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle"><MdOutlineShoppingCart /></Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
            </div>

        </>
    )
}

export default Header;