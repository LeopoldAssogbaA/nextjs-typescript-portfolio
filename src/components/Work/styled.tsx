import styled from 'styled-components';


export const WorkContainer = styled.div`
    display: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
`;

export const WorkElement = styled.div`
    position: relative;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    width: 72vw;
    height: 75vh;
    border-radius: 8px;
    padding: 16px;
    z-index: 3;

    &:nth-child(1) {
      border: 2px solid #3f0e6f;
      background-color: #47167d;
    }
    &:nth-child(2) {
      border: 2px solid #8b2f6e;
      background-color: #97397a;
    }
`;


export const WorkTextContainer = styled.div`
  color: #f1e8e2;
  display: flex;
  flex-direction: column;

  
  .title-container {
    display: flex;
    justify-content: end;
 
    h3 {
      font-size: 24px;
      margin: 0 0 16px 0;
    }
  }

  .description-container {
    p {
      font-size: 1.1em;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #47167d;
  width: 100%;
  justify-content: space-between;

  .project-container {
    margin: 0 0 8px 0;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right top, #d9b8ff, #f1e8e2);
    border-radius: 8px;
    padding: 8px;
    width: 50%;
    justify-content: space-between;
    
    &:nth-child(odd) {
      margin-right: 8px;
    }
  }

  .project-title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0 0 16px 0;
  }

  .project-description {
    font-size: 1em;
    margin: 0 0 16px 0;
  }

  .project-infos-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .space {
    width: 80px;
  }

  .project-technologies {
    svg {
      width: 40px;
      height: 40px;
      margin-left: 8px;
    }
  }
  
  .project-link {
    display: flex;
    align-items: center;
    justify-content: end;
    text-decoration: none;
    font-weight: bold;

    svg {
      margin-right: 8px;
    }
  }
    

   img {
      margin-right: 8px;
      border-radius: 8px;
      width: 75px;
      height: 75px;
      object-fit: cover;
      object-position: center;
    }
`;