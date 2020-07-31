import React, {Component, Fragment} from 'react'

class ListResource extends Component{

    state = {
        isEditState: false
    }

    // toggle the current state
    toggleState = () =>{
        this.setState({
            isEditState: !this.state.isEditState
        })
    }

    // render course item
    renderCourse = () =>{
        return(
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={this.toggleState}>Edit</button>
                <button onClick={ () => this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
        )
    }

    updateForm = (e) =>{
        e.preventDefault()
        this.props.updateCourse(this.props.index, e.target.name.value)
        this.toggleState()
    }

    // render update form
    renderUpdateForm = () =>{
        return(
            <form onSubmit={this.updateForm}>
                <input name="name" type="text" defaultValue={this.props.course.name} />
                <input type="submit" value="Update" />
            </form>
        )
    }

    render(){
        let {isEditState} = this.state
        return(
            <Fragment>
                {(isEditState) ? (this.renderUpdateForm()) : (this.renderCourse())}
            </Fragment>
        )
    }
}

export default ListResource