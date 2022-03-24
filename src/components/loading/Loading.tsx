import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const Loading = () => {

	return (
		<Container className='flex-center'>
			<ReactLoading type={'bars'} color={'#aab6fe'} width={'10rem'} height={'10rem'}/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 40rem;
`