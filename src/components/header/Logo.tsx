import styled from 'styled-components';
import LogoImage from '@assets/logo.png';

interface logoProps {
	imageWidth: number,
	imageHeight: number,
}

export const Logo = (props: logoProps) => {

	const { imageHeight, imageWidth } = props;

	return (
		<Container className='flex-center'>
			<img src={LogoImage} alt={'logo'} width={imageWidth} height={imageHeight}/>
		</Container>
	)
}

const Container = styled.div`
`