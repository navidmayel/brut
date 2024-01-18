import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', Arial;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: normal;
    }

    h1 {
        font-weight: 200;
    }
`;
