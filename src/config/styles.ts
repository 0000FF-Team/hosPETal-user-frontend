import { css, keyframes } from '@emotion/react';

export const COLORS = {
  PRIMARY: '#1A8DE9',
  PRIMARY300: '#68BCFF',
  PRIMARY200: '#A5D7FF',
  PRIMARY100: '#E0EFFB',
  GRAY100: '#FAFAFA',
  GRAY200: '#F5F5F5',
  GRAY300: '#EEE',
  GRAY400: '#E0E0E0',
  GRAY500: '#BDBDBD',
  ERROR: '#FF3F4C',
  DARK: '#1E2630',
};

export const ANIMATIONS = {
  fadeIn: keyframes`0% { opacity: 0; } 100% { opacity: 1; }`,
  fadeOut: keyframes`0% { opacity: 1; } 100% { opacity: 0; }`,
  fadeOutIn: keyframes`0% { opacity: 1;} 50% { opacity: 0;} 100% { opacity: 1 }`,
  bounceDown: keyframes`0% { transform: translateY(0) } 50% { transform: translateY(8px) } 100% { transform: translateY(0) }`,
};

export const media = {
  mobile: '@media only screen and (max-width: 767px)',
  tablet: '@media only screen and (min-width: 768px) and (max-width: 1024px)',
  desktop: '@media only screen and (min-width: 1025px)',
};
