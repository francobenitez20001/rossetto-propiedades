import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        overflow-x:hidden !important;
        background-color:var(#fafafa);
    }

    /*body::-webkit-scrollbar {
        width: 5px;  
    }

    body::-webkit-scrollbar-thumb {
        background: var(---primary);
        border-radius: 4px;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }*/

    h1,h2,h3,h4,h5,h6{
        font-family:'Open Sans',sans-serif;
    }

    button{
        outline:none;
    }

    a{
        text-decoration:none;
    }

    footer{
        border-top:3px solid #a71b20;
    }

    :root{
        --primary:#a71b20;
        --mainblue:#003da5;
        --white:#fff;
        --secondary:#7e7e7e;

        --primaryhover:#fff;
    }
`;