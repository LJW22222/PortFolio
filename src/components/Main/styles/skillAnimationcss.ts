import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    
  }

  100%{
    opacity: 1;
    
  }
`;
const skillAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`

  &.frame-in {
    animation: ${frameInAnimation} 3s forwards;
  }
`;

export const FrontEndSkill = styled.div`

&.frame-in {
  animation: ${frameInAnimation} 3s forwards;
}

.front-skill {
  animation: ${skillAnimation} 5s forwards;
}
`;


export const BackEndSkill = styled.div`
  /* Add your BackEnd styles here */
`;

export const ServerSkill = styled.div`
  /* Add your Server styles here */
`;

export const ToolSkill = styled.div`
  /* Add your Tool styles here */
`;