import React from 'react';

// STYLE
import './FormInput.scss';

const FormInput = ({name, type, value, required, handleChange, label}) => {

    const renderLabel = () => {
        if(label){
            const shrinkLabel = value.length > 0 ? 'shrink' : ``; 
            return <label className={`form-input-label ${shrinkLabel}`}>{label}</label>
        }
        return null;
    }


    return (
        <div className="group">
            <input className="form-input" name={name} type={type} value={value} required={required} onChange={handleChange} />
            {renderLabel()}
        </div>
    );
};

export default FormInput;