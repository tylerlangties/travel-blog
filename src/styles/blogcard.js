import styled from 'styled-components'

export const BlogCard = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin: 0 0 1em;
    border: 1px solid lightgrey;
    padding: 1rem;
    border-radius: 3px;
    width: 28vw;
    @media (max-width: 1000px) {
        width: 35vw;
        }
        @media (max-width: 767px) {
        width: 100%;
        text-align: center;
        }
    h1 {
        font-size: 2.25rem;
        text-transform: uppercase;
    }
    h1,
    p {
        width: 100%;
    }
    h3 {
        margin: 0.2rem 0 1rem;
        letter-spacing: 0.5px;
    }
    .blogcard__excerpt {
        font-size: 1.15rem;
        letter-spacing: 0.75px;
        width: 100%;
        display: flex;
        line-height: 18px;
        font-weight: 500;
    }
    .blogcard__links {
        font-size: 1.15rem;
        letter-spacing: 0.75px;
        width: 100%;
        display: flex;
        line-height: 18px;
        font-weight: 500;
        margin: 1rem 0 0;
        justify-content: space-between;
        &--tags {
            margin: 0 0 0 5px;
            padding: 5px;
            color: white;
            background-color: #dd5039;
        }
        .read-time {
            color: #3c6478;
            .fas {
            padding-right: 0.5rem;
            }
        }
    }
    img {
        object-fit: cover;
        width: 100%;
        border-radius: 3px;
        height: 300px;
        transition: filter ease 400ms;
        filter: brightness(100%);
        &:hover {
            filter: brightness(80%);
            transition: all 400ms ease;
            @media (max-width: 767px) {
            filter: none;
            }
        }
    }
`