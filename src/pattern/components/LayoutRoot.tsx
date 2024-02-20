import { ReactNode } from 'react';
import { NavBar } from './layouts/NavBar';
import { Outlet } from 'react-router-dom';

interface Props {
    children?: ReactNode;
}

export const LayoutRoot = ({ children }: Props) => {
    return (
        <>
            <NavBar />
            <Outlet />
            {children}

        </>
    );
};