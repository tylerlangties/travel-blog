import styled from 'styled-components';

export const ButtonPrimary = styled.button`
    background-color: #dd5039; /* RED */
    border: none;
    box-sizing: border-box;
    color: white;
    text-align: center;
    width: 25vw;
    font-size: 16px;
    margin: 2rem auto 2rem;
    text-transform: uppercase;
    padding: 15px 32px;
    transition: background-color 200ms ease;
    @media (max-width: 767px) {
        width: 300px;
    }
    &:hover {
        cursor: pointer;
        background-color: #F57460;
        }
`;