import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Map from '../Map';

const Style = styled.div`
    display: flex;
    margin: 3rem 0;
    padding: 0;
    flex-direction: row-reverse;
    @media (max-width: 767px) {
        flex-direction: column-reverse;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
        @media (max-width: 767px) {
            margin-top: 3rem;
            height: auto;
            width: 100%;
        }
    }
    h1 {
        font-size: 4rem;
        @media (max-width: 767px) {
            width: 100%
        }
    }
    h4 {
        width: 85%;
        margin: 0;
        
        text-align: left;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
        @media (max-width: 767px) {
            width: 100%
        }
    }
    a {
        &:hover {
            cursor: pointer;
        }
    }
`;

const FormatMap = styled.div`
    display: flex;
    align-items: flex-end;
    padding-top: 4rem;
    img {
    width: 80%;
    border: 2px solid white;
    border-radius: 200px;
    @media (max-width: 767px) {
            width: 100%
        }
    }
`;

const Imgcont = styled.div`
    object-fit: cover;
    width: 75%;
    img {
    border-radius: 3px;
    }
    @media(max-width: 767px){
        width: 100%;
        margin: auto;
    }
`;

const PostListing = ({post}) => (
<Style>
    <div className="content">
    <h1><Link to='/featured'>{post.title}</Link></h1>
    <p>
        {post.createdAt}
    </p>
    <h4>{post.body.childMarkdownRemark.excerpt}</h4>
    <br/>
    <h4><Link to="/featured"><strong>See More..</strong></Link><span>{post.tags}</span></h4>
    <FormatMap>
    <Map/>
    </FormatMap>
    </div>
    <Imgcont>
    <img src={post.featuredImage.fluid.src} />
    </Imgcont>
</Style>
);

export default PostListing;