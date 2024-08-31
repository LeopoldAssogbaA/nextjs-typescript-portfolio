import styled from 'styled-components';


export const WorkContainer = styled.div`
    display: none;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 2;
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
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:nth-child(1) {
      border: 2px solid #000070;
      background-color: var(--color-deep-blue);
    }
    &:nth-child(2) {
      border: 2px solid var(--color-deep-blue);
      background-color: #0a02dd;
    }
`;


export const WorkTextContainer = styled.div`
  color: #f1e8e2;
  display: flex;
  flex-direction: column;
  z-index: 2;
  
  .title-container {
    display: flex;
    justify-content: end;
    margin: 0 0 8px 0;

    a {
      display: flex;
      justify-content: end;
      align-items: center;
      text-decoration: none;
      color: #f1e8e2;
      z-index: 5;
    }
    h3 {
      font-size: 24px;
      margin: 0;
    }
    svg {
      margin-right: 8px;
      font-size: 24px;
    }
  }

  .description-container-1, .description-container-2 {
    p {
      font-size: 1em;
      margin: 0 0 8px 0;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-deep-blue);
  width: 100%;
  justify-content: space-between;
  z-index: 2;

  .project-container-1, .project-container-2 {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to right top, var(--color-cream), #dbdaff);
    border-radius: 8px;
    padding: 8px;
    width: 50%;
    justify-content: space-between;
    z-index: 2;
    
    &:nth-child(odd) {
      margin-right: 8px;
    }
  }

  .project-1, .project-2 {
      margin-bottom: 8px;
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
      width: 25px;
      height: 25px;
      margin-left: 8px;
    }
  }
  
  .project-link {
    display: flex;
    align-items: center;
    justify-content: end;
    text-decoration: none;
    font-weight: bold;
    color: var(--color-deep-blue) !important;
    
      &:hover {
        color: var(--color-deep-blue) !important;
      }
      &:active {
        color: var(--color-deep-blue) !important;
      } 
    }

    
    svg {
      margin-right: 8px;
    }
  }
    .project-image {
      svg {
        font-size: 40px;
      }
    }
    
   img {
      margin-right: 8px;
      border-radius: 8px;
      width: auto;
      height: 40px;
      object-fit: cover;
      object-position: center;
    }
`;