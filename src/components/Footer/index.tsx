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
            <span> Lindomar Nogueira - Corretor</span>
            </div>
            <span>CRECI 22278</span>
        </TextWrapper>
        <SocialWrapper>
             <a href="https://www.facebook.com/profile.php?id=100087584213048" ><FaFacebookF className="icon-social-footer"/></a>
             <a href="https://www.instagram.com/lindomar_corretor_imoveis_/"><SlSocialInstagram className="icon-social-footer"/></a>
             <a href="https://wa.me/558599996895?text=lindomarcorretordeimoveis"> <MdWhatsapp className="icon-social-footer"/></a>
        </SocialWrapper>
       </FooterContainer>
    )
}

export default Footer;