import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'

const Style = styled.div`
    display: flex;
    margin: 3rem 0;
    padding: 0;
    flex-direction: row-reverse;
    @media (max-width: 960px) {
        flex-direction: column-reverse;
    }
    
    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 75%;
        height: 75vh;
        text-align: center;
        @media (max-width: 960px) {
            margin-top: 3rem;
            height: auto;
            width: 100%;
        }
    }
    h1{
        font-size: 4rem;
    }
    h5{
        width: 60%;
        margin: 0;
        font-weight: 400;
    }
    }
`;

const Imgcont = styled.div`
    width: 100%;
    margin: 0;
    border-radius: 3px;
    @media(max-width: 960px){
        width: 75%;
        margin: auto;
    }
`;

const PostListing = ({post}) => (
<Style>
    <div className="content">
    <h1><Link to={post.slug}>{post.title}</Link></h1>
    <p>
        {post.createdAt}
    </p>
    <h5>{post.body.childMarkdownRemark.excerpt}</h5>
    <img src="http://image.maps.api.here.com/mia/1.6/?app_code=N_0IfIire5APTLyDGImpEQ&app_id=FX7zKNt3qZxRE3QO99vU"></img>
    </div>
    <Imgcont>
    <img src={post.featuredImage.fluid.src} />
    </Imgcont>
</Style>
);

export default PostListing;