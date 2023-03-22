import React from 'react';

const Btn = (props) => {
    return (
        <div>
            <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-white hover:text-black hover:duration:500'>
                {props.children}
            </button>
        </div>
    );
};

export default Btn;