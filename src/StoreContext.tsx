import React from 'react';
import { StoreReduxType} from './redux/redux-store';


const StoreContext: any = React.createContext({} as StoreReduxType)

export type ProviderType = {
		store: StoreReduxType
		children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
		return <StoreContext.Provider value={props.store}>
				{props.children}
		</StoreContext.Provider>
}

export default StoreContext;