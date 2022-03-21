import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import useDebounce from '@hooks/useDebounce';
import { searchWordState } from '@atom/repoAtom';
import { useEffect } from 'react';

export const SearchInput = () => {
	
	const [inputValue, setInputValue] = useState('');
	const setSearchWord = useSetRecoilState(searchWordState);
	const debounceInput = useDebounce(inputValue, 700);

	const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}

	useEffect(() => {
		setSearchWord(debounceInput)
	}, [debounceInput])

	return (
		<Container className='flex-center'>
			<Input 
				value={inputValue} 
				placeholder={'검색어를 입력하세요'} 
				onChange={(e) => handleInputValue(e)}
			/>
			<SearchIcon>
				<BiSearch/>
			</SearchIcon>
		</Container>
	)
}

const Container = styled.div`
	width: 20rem;
	height: 2.3rem;
	border-radius: 1rem;
	background-color: #fff;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

const Input = styled.input`
	width: 80%;
	height: 80%;
	border: none;
	
	&:focus {
		outline: none;
	}
`

const SearchIcon = styled.div`
	width: 1rem;
	height: 1rem;
	margin-left: .7rem;
	cursor: pointer;
`