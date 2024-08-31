import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  flex-grow: 1;
  width: auto;
  background: var(--color-cream);
  color: var(--color-deep-blue);
  padding: 0 20px;
  z-index: 1;

  a {
    color: var(--color-deep-blue);
    &:hover {
      color: var(--color-deep-blue);
      }
    &:active {
      color: var(--color-deep-blue);
    }
  }
  
  .box {
    z-index: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .wave {
    opacity: 0;
    position: absolute;
    width: 1500px;
    height: 1600px;
    margin-left: -150px;
    margin-top: -250px;
    left: -200%;
    top: -100%;
    border-radius: 43%;
  }

  @keyframes rotate {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .wave.-one {
    z-index: 0;
    animation: rotate 10000ms infinite linear;
    opacity: 0.5;
    background: var(--color-sunflower);
  }

  .wave.-two {
    z-index: 0;
    animation: rotate 6000ms infinite linear;
    opacity: 0.4;
    background: var(--color-sunflower);
  }
`;

export const ContactInfoContainer = styled.div`
  z-index: 4;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin:0 0 16px 0;
  }

  a, button {
    margin-bottom: 4px;
    color: var(--color-deep-blue);
    &:hover {
      color: var(--color-deep-blue);
      }
    &:active {
      color: var(--color-deep-blue);
    }
  }
  
  p {
    font-style: italic;
    margin: 0 0 16px 0;
  }
`;

export const ContactContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: auto;
  padding: 0;
  margin-bottom: 16px;

  .reference-card-header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: baseline;
    width: 100%;
    height: auto;

    span {
      margin: 0 12px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-weight: 800;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      a {
        margin-bottom: 8px;
        color: var(--color-cream);
        &:hover {
          color: var(--color-cream);
        }
        &:active {
          color: var(--color-cream);
        }
      }
    }
  }

  svg {
    margin-right: 8px;
    font-size: 16px;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0 0 12px 0;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
    text-decoration: underline;
  }

  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  button {
    background-color: transparent;
    font-size: 1rem;
    font-family: inherit !important;
    padding: 0;
    margin-bottom: 8px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .references-container {
    width: 98%;
    height: auto;
  }

  .reference-card {
    margin-bottom: 12px;
  }

  .info-reveal {
   flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`;