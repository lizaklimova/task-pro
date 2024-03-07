import styled from 'styled-components';

export const Text = styled.h2`
  position: absolute;
  top: 50vh;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  padding: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--lightgrey-text-color);

  @media screen and (min-width: 768px) {
    padding: 0;
    width: 486px;
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1440px) {
    left: calc(50% + 130px);
  }
`;

export const TextAccent = styled.button`
  padding: 0;
  background-color: transparent;
  color: var(--accent-color);

  &:hover {
    text-shadow: 0px 0px 1px var(--accent-color);
  }
`;
