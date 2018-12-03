import styled from 'styled-components';

export const PostWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    hr {
        max-width: 800px;
    }
    .postwrapper__title {
        font-size: 4rem;
    }
    .postwrapper__inner {
        max-width: 800px;
        font-size: 125%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1rem 0;
        &--content {
            margin-top: 2rem;
        }
        @media (max-width: 767px) {
        width: 90vw;
        }
        img {
            border-radius: 3px;
            width: 100%;
            object-fit: cover;
            @media (max-width: 767px) {
            width: 90vw;
            }
        }
    }
    .postwrapper__home-link {
        margin: 2.25rem 0 0;
    }
`;