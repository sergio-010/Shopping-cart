import { ReactNode } from 'react';
import { NavBar } from './layouts/NavBar';

interface Props {
    children?: ReactNode;
}

export const LayoutRoot = ({ children }: Props) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};