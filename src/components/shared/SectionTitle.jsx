import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='w-2/6 mx-auto text-center my-8'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;