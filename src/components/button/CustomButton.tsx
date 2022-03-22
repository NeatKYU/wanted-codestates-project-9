import styled from 'styled-components';

interface CustomButtonProps {
	buttonWidth?: string,
	buttonHeight?: string,
	backgroundColor?: string,
	title?: string,
	onClick: () => void,
}

export const CustomButton = (props: CustomButtonProps) => {

	const {
		buttonHeight,
		buttonWidth,
		backgroundColor,
		title,
		onClick,
	} = props;

	return (
		<Container 
			className='flex-center'
			backColor={backgroundColor}
			buttonHeight={buttonHeight}
			buttonWidth={buttonWidth}
			onClick={onClick}
		>
			{title}
		</Container>
	)
}

const Container = styled.div<{
	backColor: string | undefined,
	buttonHeight: string | undefined,
	buttonWidth: string | undefined,
}>`
	width: ${({buttonWidth}) => buttonWidth ? buttonWidth : '5rem'};
	height: ${({buttonHeight}) => buttonHeight ? buttonHeight : '1.5rem'};
	border-radius: 10px;
	background-color: ${({backColor}) => backColor ? backColor : '#fff'};
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	cursor: pointer;
	color: ${({backColor}) => backColor ? '#fff' : 'black'};
`