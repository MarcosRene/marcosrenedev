import styled, { keyframes } from 'styled-components';
import Img from 'gatsby-image';

import * as c from '../../styles/constants';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
`;

const morphing = keyframes`
  0% {
			border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
			box-shadow: 15px 15px 50px  ${c.colors.darkRgba};
		}
		25% { 
			border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
		}
		50% {
			border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
			box-shadow: -10px -5px 50px  ${c.colors.darkRgba};
		}
		75% {
			border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
		}
`;

export const Hero = styled.div`
  display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	width: 200px;
	height: 200px;
	margin: auto;
	background-color: ${c.colors.cyanPrimary};
	background-image: linear-gradient(20deg, ${c.colors.bluePrimary} 0%, ${c.colors.greenPrimary} 100%);
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
	box-shadow: 15px 15px 50px ${c.colors.darkRgba};
	animation: ${morphing} 10s infinite;
	overflow: hidden;
`;