import React , {Component} from 'react'
import CreateResource from './components/CreateResoure'
import ListResource from './components/ListResource'


class App extends Component {

  state = {
    courses: [
      {name: "C++"},
      {name: "Java"},
      {name: "javascript"},
      {name: "python"},
    ],
    current: ''
  }

  editCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  updateCourse = (index, value) => {
    let {courses} = this.state
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })
  }

  addCourse = (e) => {
    e.preventDefault()
    let {courses, current} = this.state
      if(current !== ''){
        courses.push({name: current})
        this.setState({
        courses,
        current: ''
      })
    }
    
  }

  deleteCourse = (index) => {
    let courses = this.state.courses.filter((course, idx)  => {return idx !== index} )
    this.setState({courses})
  }

  render(){
    const {courses} = this.state
    let length = courses.length
    const courseList = (length) ? (
      courses.map((course, index) => {
        return <ListResource course={course} updateCourse={this.updateCourse} deleteCourse={this.deleteCourse} index={index}  key={index} />
      })
    ):(
      <p>There are no courses to show</p>
    )

    return (
      <section className="App">
        <h2>Add Course</h2>
        <CreateResource current={this.state.current} editCourse={this.editCourse} addCourse={this.addCourse} />
        <ul>
          {courseList}
        </ul>
      </section>
    )
  }
}

export default App;
