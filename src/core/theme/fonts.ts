import { createGlobalStyle } from 'styled-components';
import { FontWeight } from '@brix-ui/types/typography';

const formatSrc = (url: string): string => {
  return `url(${url}) format('truetype')`;
};

const body = {
  black: formatSrc('/assets/fonts/SourceSansPro/SourceSansPro-Black.ttf'),
  bold: formatSrc('/assets/fonts/SourceSansPro/SourceSansPro-Bold.ttf'),
  semiBold: formatSrc('/assets/fonts/SourceSansPro/SourceSansPro-SemiBold.ttf'),
  regular: formatSrc('/assets/fonts/SourceSansPro/SourceSansPro-Regular.ttf'),
  light: formatSrc('/assets/fonts/SourceSansPro/SourceSansPro-Light.ttf'),
};

const article = {
  black: formatSrc('/assets/fonts/Merriweather/Merriweather-Black.ttf'),
  regular: formatSrc('/assets/fonts/Merriweather/Merriweather-Regular.ttf'),
  light: formatSrc('/assets/fonts/Merriweather/Merriweather-Light.ttf'),
};

const code = {
  extraBold: formatSrc('/assets/fonts/Inconsolata/Inconsolata-ExtraBold.ttf'),
  regular: formatSrc('/assets/fonts/Inconsolata/Inconsolata-Regular.ttf'),
  light: formatSrc('/assets/fonts/Inconsolata/Inconsolata-Light.ttf'),
};

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: ${FontWeight.Black};
    src: ${body.black};
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: ${FontWeight.Bold};
    src: ${body.bold};
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: ${FontWeight.SemiBold};
    src: ${body.semiBold};
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: ${FontWeight.Regular};
    src: ${body.regular};
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    font-weight: ${FontWeight.Light};
    src: ${body.light};
  }
  
  @font-face {
    font-family: Merriweather;
    font-weight: ${FontWeight.Black};
    src: ${article.black};
  }
  
  @font-face {
    font-family: Merriweather;
    font-weight: ${FontWeight.Regular};
    src: ${article.regular};
  }
  
  @font-face {
    font-family: Merriweather;
    font-weight: ${FontWeight.Light};
    src: ${article.light};
  }
  
  @font-face {
    font-family: Inconsolata;
    font-weight: ${FontWeight.ExtraBold};
    src: ${code.extraBold};
  }
  
  @font-face {
    font-family: Inconsolata;
    font-weight: ${FontWeight.Regular};
    src: ${code.regular};
  }
  
  @font-face {
    font-family: Inconsolata;
    font-weight: ${FontWeight.Light};
    src: ${code.light};
  }
`;
