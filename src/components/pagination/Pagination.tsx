import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { CustomButton } from '@components/button/CustomButton';

interface PaginationProps {
	totalCount: number,
	currentPage: number,
	perPage: number,
	setCurrentPage: any,
	setGoPage: any,
	loading: string | false,
}

export const Pagination = (props: PaginationProps) => {

	const { totalCount, currentPage, perPage, setCurrentPage, setGoPage, loading } = props;

	const showPage = 5;
	const totalPage = Math.ceil(totalCount / perPage || 0);
	const [startPage, setStartPage] = useState(1);
	const [endPage, setEndPage] = useState(0);
	const pageArray:Array<number> = [];

	useEffect(() => {
		if(totalPage !== 0){
			if(currentPage === 1){
				setStartPage(1);
				setEndPage(totalPage > showPage ? showPage : totalPage);
			} else {
				setEndPage(endPage === 0 ? showPage : totalPage > showPage ? endPage > showPage ? endPage : showPage : totalPage)
			}
		} else if(startPage > endPage){
			setEndPage(startPage + 4);
		} else if(totalCount === 0) {
			setStartPage(1);
			setEndPage(0);
		}
	}, [totalPage])

	for(let i=startPage; i<=endPage; i++){
		pageArray.push(i)
	}


	const handleNextPerPage = () => {
		if(!loading){
			const calcStart = startPage + showPage;
			setStartPage(calcStart);
			setCurrentPage(calcStart);
			setGoPage(calcStart);
			if(totalPage - endPage > showPage){
				setEndPage(endPage + showPage);
			} else {
				setEndPage(totalPage)
			}
		}
	}

	const handlePrevPerPage = () => {
		if(!loading){
			if(endPage === totalPage){
				const calcEndPage = startPage - 1;
				setEndPage(calcEndPage);
				setCurrentPage(calcEndPage);
				setGoPage(calcEndPage);
			} else {
				const calcEndPage = endPage - showPage;
				setCurrentPage(calcEndPage);
				setEndPage(calcEndPage);
				setGoPage(calcEndPage);
			}
			setStartPage(startPage - showPage);
		}
	}

	const handleGoToPage = (page:number) => {
		setCurrentPage(page);
		setGoPage(page);
	}

	return (
		<Container className='flex-center'>
			{
				startPage !== 1 &&
				<CustomButton
					buttonHeight='2rem'
					buttonWidth='2rem'
					onClick={handlePrevPerPage}
					icon={<IoIosArrowBack/>}
				/>
			}
			{
				pageArray.map((page, index) => (
					<PagiButton 
						className='flex-center'
						key={index}
						select={page === currentPage}
						onClick={() => handleGoToPage(page)}
					>
						{page}
					</PagiButton>
				))
			}
			{
				endPage !== totalPage && 
				<CustomButton
					buttonHeight='2rem'
					buttonWidth='2rem'
					onClick={handleNextPerPage}
					icon={<IoIosArrowForward/>}
				/>
			}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	gap: 4px;
	position: fixed;
	bottom: 2rem;
`

const PagiButton = styled.div<{select: boolean}>`
	width: 2rem;
	height: 2rem;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	background-color: ${({select}) => select ? '#aab6fe' : '#f3f3f3'};
	font-size: 1.2rem;
	border-radius: 2px;
	cursor: pointer;
`