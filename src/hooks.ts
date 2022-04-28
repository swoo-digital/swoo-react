import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Rootstate, AppDispatch } from './store';

export const useAppDispather = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;