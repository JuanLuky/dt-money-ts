import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #eeeeee;

        --blue:#5429CC;
        --blue-light:#6933ff;

        --green: #33CC95;
        --red: #E62E4D;

        --text-body: #969CB3;
        --text-title: #363F5F;

    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93,75%;
        }

        @media (max-width: 720px) {
            font-size: 87,5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    body, button , input , textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`