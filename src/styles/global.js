import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        box-sizing: border-box;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, input {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: 'Montserrat', sans-serif;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        min-height: 100vh;
        min-width: 100%;
    }

    details {
        cursor: pointer;
    }


    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        color: #fff;
        background-color: blue;
        text-transform: uppercase;
        font-weight: 600;
        padding: 8px;
        border-radius: 100px;
        transition: 300ms background-color;

        :hover {
            background-color: #3532ff;
        }
    }
    a{
        cursor: pointer;
      &:hover{
        text-decoration: underline;

      }
    }

`;
