import React from 'react';

// STYLE
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.style';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
        return isLoading ? 
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
        :
        <WrappedComponent {...otherProps} />
    }
    return Spinner;
}

export default WithSpinner;