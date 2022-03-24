import { useEffect } from 'react';
import useDebounce from '@hooks/useDebounce';
import { useRecoilState } from 'recoil';
import { toastListState } from '@atom/toastAtom';

export const useToastState = () => {

	// 저번에 만든 useDebounce를 이용해서 toastlist를 관리
	// 이렇게 관리하면 바로바로 리스트가 지워지지 않는다.
	const [toastList, setToastList] = useRecoilState(toastListState);
	const debounceList = useDebounce(toastList, 3500)

  const handleToast = (message:string, success:boolean) => {
		//외부에서 이 함수를 호출하면 받은 매개변수로 스토어 값을 변경한다.
		setToastList([
			...toastList,
			{
				message: message,
				success: success,
			}
		])
  }

	// 토스트 리스트가 변경되면 (즉 버튼을 누르면) 토스트 리스트를 비우려는 목적으로 리스트 제거
	// 디바운스 때문에 바로 지워지진 않고 3.5초 뒤에 다음 명령이 없으면 지워진다.
	useEffect(() => {
		if(debounceList.length >= 1){
			setToastList([]);
		}
	}, [debounceList])

	return handleToast
}