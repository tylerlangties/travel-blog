import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    margin: 3rem auto;
    max-width: 90vw;
    padding: 0px 1.0875rem 1.45rem;
    @media (max-width: 767px) {
        max-width: 100vw;
    }
    a {
        color: #dd5039;
        transition: color 200ms ease;
        &:hover {
            text-decoration: none;
            color: #F57460; 
            cursor: pointer;
        }
    }
    @media (max-width: 767px) {
        align-items: center;
    }
`;