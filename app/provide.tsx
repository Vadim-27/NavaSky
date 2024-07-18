'use client';

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from '../i18n/i18n';

interface AppProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
};
export default AppProvider;
