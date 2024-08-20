import styled from "styled-components";

export const AboutContainer = styled.div`
  display: none;
  position: fixed;
  color: #47167d;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  

  .about-text {
    font-size: 1.3em;
    letter-spacing: 1px;
    font-kerning: none;
    margin-bottom: 0;
  }

  .p-1 {
    text-align: right;
    margin-right: -20%;
  }
  .p-2 {
    text-align: left;
    margin-left: -20%;
  }
  .p-3 {
    text-align: right;
    margin-right: -20%;
  }
  .p-4 {
    text-align: left;
    margin-left: -20%;
  }
`;