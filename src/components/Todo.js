import { useState } from 'react';

import Box from '/Box';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false); //React Hook, can only be called in React function

    function deleteHandler(){
        setModalIsOpen(true);
    }

    function closeModalHandler(){
        setModalIsOpen(false);
    }
    
    return (
        <div className='temp'>  
            { modalIsOpen && <Box onCancel={closeModalHandler} onConfirm={closeModalHandler} />} 
        </div>
    );
}

export default Todo;
