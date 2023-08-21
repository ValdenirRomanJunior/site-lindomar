import { useState } from "react";
import { AnswerWrapper, ModalLinkQuestion, QuestionContainer, QuestionWrapper } from "./styles"
import {BsPlus} from 'react-icons/bs';
import {GrFormClose} from 'react-icons/gr';

const About = () => {

    const [openAnswer,setOpenAnswer]= useState(false);
    const handleOpenAnswer = () => {
        setOpenAnswer(openAnswer => !openAnswer);
    }

    const [openModalLink,setOpenModalLink]= useState(false);
    const handleOpenModalLink = () => {
        setOpenModalLink(openModalLink => !openModalLink);
    }

    return(
        <QuestionContainer>
            <QuestionWrapper onClick={handleOpenAnswer}>
             <span>Sobre nós</span>
             <BsPlus className="icon-plus-question"/>
            </QuestionWrapper>
            <AnswerWrapper open={openAnswer} onClick={handleOpenModalLink}>
                <h2>Ajudamos você a encontrar o seu lar em Caucaia e região!</h2>
                <p>Atuante no ramo imobiliário há alguns anos, somos uma empresa
                   especializada na locação e venda de imóveis em Caucaia e região,
                   100% dedicados à credibilidade e transparência. Com alto rigor profissional, 
                   contamos com colaboradores competentes e qualificados para melhor atendê-los.
                   Levamos aos nossos clientes toda
                   praticidade para organizar e agilizar todos os processos imobiliários.
                   Todas as nossas visitas são acompanhadas, 
                   trazendo assim segurança do início ao fim, tanto no aluguel, quanto na venda.</p>

                   <span>lindomarnogueiracorretor@gmail.com</span>
                   <span>Rua Ananias Alexandre 147, Mestre Antônio</span>
               
                   <span>Caucaia - CE</span>
                   <span>(85) 9999-6895</span>
            </AnswerWrapper>
   
           
        </QuestionContainer>
        
    )

}

export default About;