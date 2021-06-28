import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        overflow-x:hidden !important;
        //background-color:#fafafa;
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

    .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .lds-ellipsis div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #a71b20;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    .lds-ellipsis div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    .lds-ellipsis div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    .lds-ellipsis div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }

    :root{
        --primary:#a71b20;
        --mainblue:#003da5;
        --maingreen:#32CD32;
        --white:#fff;
        --secondary:#7e7e7e;

        --primaryhover:#fff;

        --primaryrgb:rgb(167,27,32);
    }
`;
