import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-size: 62.5%;

    --font-rb: 'Roboto', sans-serif;
    --font-pop: 'Poppins', sans-serif;

    --lt-100: #ffffff;
    --lt-200: #FFFAF1;
    --lt-300: #E1E1E6;
    --lt-400: #C4C4CC;
    --lt-500: #7C7C8A;
    --lt-600: #76797B; 
    --lt-700: #4D585E; 

    --dk-100: #000405;
    --dk-200: #00070A;
    --dk-300: #000204;
    --dk-400: #000A0F;
    --dk-500: #000C12;
    --dk-600: #00111A;
    --dk-700: #001119;
    --dk-800: #0D161B;
    --dk-900: #0D1D25;
    --dk-1000: #192227;

    --gts-100: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
    --gts-200: linear-gradient(180deg, #091E26 0%, #00131C 100%);
 
    --tts-tto-100: #750310;
    --tts-tto-200: #92000E;
    --tts-tto-300: #AB222E;
    --tts-tto-400: #AB4D55;

    --tts-crt-100: #FBA94C;

    --tts-mt-100: #04D361;

    --tts-ck-200: #82F3FF;
    --tts-ck-100: #065E7C;
  }
  body {
    background-color: var(--dk-400);
    font-family: var(--font-rb);
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: var(--font-rb);
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
  }
  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  button:hover, a:hover {
    filter: brightness(.9)
  }
  img {
    width: 100%;
    max-width: max-content;
    height: auto;
  }
`;
