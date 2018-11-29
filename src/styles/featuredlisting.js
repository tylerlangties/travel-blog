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
        align-items: center;
        width: 45%;
        text-align: center;
        @media (max-width: 767px) {
            margin-top: 3rem;
            height: auto;
            width: 100%;
        }
    }
    .featuredlisting__title {
        font-size: 4rem;
        @media (max-width: 767px) {
            width: 100%;
        }
    }
    .featuredlisting__excerpt {
        margin: .2rem 0 1rem;
        letter-spacing: .5px;
        text-align: left;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
    }
    .featuredlisting__link {
        width: 85%;
        margin: 0;
        font-weight: 400;
        font-size: 1.15rem;
        text-align: left;
        line-height: 2rem;
        display: flex;
    }
    .featuredlisting__image {
            width: 50%;
                img {
                object-fit: cover;
                width: 100%;
                border-radius: 3px;
                height: 500px;
                }
                @media(max-width: 767px){
                    width: 100%;
                    margin: auto;
                }
            }
`;