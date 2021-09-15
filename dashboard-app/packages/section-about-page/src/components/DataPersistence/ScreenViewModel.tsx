import React, { useContext } from 'react';
import { Actions } from '../../module/actions';
import * as selectors from '../../module/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { AboutPage } from '../AboutPage';
import { AboutPageContextContract } from './AboutPageContextContract';

interface ScreenViewModelProps {}

export const ViewContext = React.createContext<AboutPageContextContract | null>(null);

export const useViewContext = () => {
    return useContext<AboutPageContextContract | null>(ViewContext);
};

export const ViewContextProvider: React.FunctionComponent<AboutPageContextContract> = (
    props: React.PropsWithChildren<AboutPageContextContract>,
) => {
    const { children, ...rest } = props;
    return <ViewContext.Provider value={{ ...rest }}>{children}</ViewContext.Provider>;
};

export const ScreenViewModel: React.FunctionComponent<ScreenViewModelProps> = (
    props: React.PropsWithChildren<ScreenViewModelProps>,
) => {
    const dispatch = useDispatch();
    const textColor = useSelector(selectors.aboutPageTextColor);
    const backGroundColor = useSelector(selectors.aboutPageTextBackground);

    const handleChangeTextColor = (param: string): void => {
        dispatch(Actions.changeAboutPageTextColor(param));
    };

    const handleChangeBackGroundColor = (param: string): void => {};

    return (
        <ViewContextProvider
            textColor={textColor}
            backGroundColor={backGroundColor}
            handleChangeBackGroundColor={handleChangeBackGroundColor}
            handleChangeTextColor={handleChangeTextColor}
        >
            <AboutPage />
        </ViewContextProvider>
    );
};
