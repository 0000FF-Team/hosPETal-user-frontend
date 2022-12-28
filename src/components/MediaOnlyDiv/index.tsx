import styled from '@emotion/styled';
import { media } from 'config/styles';

interface Props {
  media: 'desktop' | 'mobile' | 'tablet';
}

const MediaOnlyDiv = styled.div<Props>`
  ${media.desktop} {
    display: ${({ media }) => (media === 'desktop' ? 'initial' : 'none')};
  }
  ${media.tablet} {
    display: ${({ media }) => (media === 'tablet' ? 'initial' : 'none')};
  }
  ${media.mobile} {
    display: ${({ media }) => (media === 'mobile' ? 'initial' : 'none')};
  }
`;

export default MediaOnlyDiv;
