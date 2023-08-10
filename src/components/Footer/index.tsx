import { FooterContainer, LogoWrapper, SocialWrapper, TextWrapper } from "./styles";
import Logo from '../../assets/images/logo-site.png';
import {SlSocialInstagram} from 'react-icons/sl';
import {FaFacebookF} from 'react-icons/fa';
import {MdWhatsapp} from 'react-icons/md'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Footer = () => {
    return (
       <FooterContainer>
        <LogoWrapper>
        <LazyLoadImage effect="opacity" src={Logo} alt=""/>
        </LogoWrapper>
        <TextWrapper>
            <div className="copy-nameBusiness">
            <span> © 2023</span>
            <span> Imobiliaria Optimus</span>
            </div>
            <span>CRECI 27645</span>
        </TextWrapper>
        <SocialWrapper>
             <a href="#" ><FaFacebookF className="icon-social-footer"/></a>
             <a href="#"><SlSocialInstagram className="icon-social-footer"/></a>
             <a href="#"> <MdWhatsapp className="icon-social-footer"/></a>
        </SocialWrapper>
       </FooterContainer>
    )
}

export default Footer;