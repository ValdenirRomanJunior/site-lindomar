import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
   
  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    

`

export const LogoWrapper = styled.div`
    width:140px;
    height:50px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;

    }
`

export const TextWrapper = styled.div`
    width:280px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  

    .copy-nameBusiness{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding:0 2.3rem;

    }

    span{
        font-family: ${({theme}) => theme.fonts.font_primary};
        font-size:16px;
        font-weight:200;
        
    }

`

export const SocialWrapper = styled.div`
    width: 100px;
    margin-top:18px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .icon-social-footer{
        color: #4c4c4c;
        font-size: 1.375rem;
    }

`