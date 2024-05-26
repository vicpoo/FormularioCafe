import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #49281f; 
    border-radius: 15px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: #564334;
    }
`;

function Button(){
    return(
        <ButtonStyled>Agregar Cafe</ButtonStyled>
    )
}

export default Button;