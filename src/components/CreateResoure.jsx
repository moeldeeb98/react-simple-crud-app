import React from 'react'

const CreateResource = (props) =>{
    return(
        <form onSubmit={props.addCourse}>
            <input type="text" value={props.current} onChange={props.editCourse} />
            <input type="submit" value="Add Course"/>
        </form>
    )
}

export default CreateResource