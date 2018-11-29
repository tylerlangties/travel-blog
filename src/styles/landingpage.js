import styled from 'styled-components'

export const LandingPage = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
@media (max-width: 767px) {
    align-items: center;
}
.landingpage__postlist {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
`;