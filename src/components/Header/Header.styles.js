import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

/*
*	If we would like to have a block css we can
* can create a const like below
*/
const OptionsContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: auto;
	width: 70px;
	padding: 25px 0;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionContainer = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
