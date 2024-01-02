import styled from 'styled-components'

const GlobalButton = styled.button`

    background-color: var(--primary-color);
    font-weight: 700;
    font-size: 16px;
    color: var(--font-color);
    border: none;

    &:hover {
      cursor: pointer;
      background-image: linear-gradient(to right, var(--secondary-color), var(--hover-font-color));
      color: white;
    }

`

export default GlobalButton;