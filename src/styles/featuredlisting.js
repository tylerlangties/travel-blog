import styled from 'styled-components';

export const FeaturedListing = styled.div`
    display: flex;
    margin: 3rem 0;
    padding: 0;
    flex-direction: row-reverse;
    justify-content: space-between;
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
    .featuredlisting__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
        @media (max-width: 767px) {
            margin-top: 3rem;
            height: auto;
            width: 100%;
            text-align: center;
        }
    }
    .featuredlisting__title {
        font-size: 4rem;
        width: 300px;
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    .featuredlisting__authors {
        margin: 1rem 0;
    }
    .featuredlisting__excerpt {
        margin: .2rem 0 1rem;
        letter-spacing: .5px;
        text-align: left;
        font-weight: 400;
        line-height: 20px;
        @media (max-width: 767px) {
        text-align: center;
        }
    }
    .featuredlisting__link {
        font-size: 1.15rem;
        letter-spacing: 0.75px;
        width: 100%;
        text-align: left;
        display: flex;
        line-height: 18px;
        font-weight: 500;
        margin: .5rem 0 ;
        justify-content: space-between;
        &--tags {
            margin-left: 5px;
            padding: 5px;
            color: white;
            background-color: #dd5039;
        }
            @media (max-width: 767px) {
            width: 75vw;
            margin: .5rem auto;
        }
        &--read-time {
            color: #3c6478;
            .fas {
                padding-right: 0.5rem;
            }
        }
    }
    .featuredlisting__image {
            width: 50%;
                img {
                    object-fit: cover;
                    width: 100%;
                    border-radius: 3px;
                    height: 500px;
                    transition: filter ease 400ms;
                    filter: brightness(100%);
                    &:hover {
                        filter: brightness(80%);
                    }
                }
                @media(max-width: 767px){
                    width: 100%;
                    margin: auto;
                }
            }
`;