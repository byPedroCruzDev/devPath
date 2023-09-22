import styled from "styled-components";

export const ContainerPost = styled.li`
  display: flex;
  flex-direction: column;

  min-height: max-content;
  height: 200px;
  width: 34%;
  min-width: 400px;
  margin: 0 auto;
  background: #ffffff;
  border: 5px solid #051866;
  border-radius: 8px;
  padding: 8px;
  color: rgba(0, 0, 0, 1);
  gap: 5px;

  main {
    display: flex;

    padding: 5px;
    width: 100%;
    height: 100%;
    gap: 15px;
    margin: 0 auto;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 80px;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: start;
      width: 90%;
    }
  }

  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 21px;
    text-align: start;
  }

  @media (max-width: 500px) {
    min-width: 90%;
  }
`;

export const SectionPost = styled.section`
  background-color: #f9f9f9;
  border-radius: 8px;

  margin-top: 5px;

  width: 100%;
  height: 95%;
  max-height: 105px;

  text-align: start;
  padding: 2px 5px;
  overflow: auto;
  p {
    display: flex;
    align-items: start;
    font-size: 14px;
  }
`;

export const EditPost = styled.div`
  width: 100%;
  height: 12%;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;

  span {
    width: auto;
    height: auto;
    transition: 0.5s;

    border-radius: 5px;

    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }
  }

  .editPost {
    background: #fac817;
  }

  .deletePost {
    background: #ea2444;
  }

  svg {
    width: 15px;
    margin: 0 15px;
    height: 15px;
  }
`;
