import React, { Component } from "react";
class ReactFormCompo extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            dept: '',
            rating: '',
            stuData: []
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = () => {
        const tempObj = {
            name: this.state.name,
            dept: this.state.dept,
            rating: this.state.rating
        }
        this.state.stuData.push(tempObj)
        this.setState({
            name: '',
            dept: '',
            rating: '',
            stuData: this.state.stuData 
        })
        console.log(this.state.stuData)
    }
    render() {
        return (
            <>
            
            <form className="form" onSubmit={(e)=>e.preventDefault()}>
                <h1>EMPLOYEE FEEDBACK FORM </h1>
                <div>
                    <label>Name : </label>
                    <input type='text' name='name' value={this.state.name} placeholder="Enter Your Name" onChange={this.handleChange} /> <br />
                </div>
                <div>
                    <label>Department : </label>
                    <input type='text' name='dept' value={this.state.dept} placeholder="Enter your Department" onChange={this.handleChange} /> <br />
                </div>
                <div>
                    <label>Rating : </label>
                    <input type='number' name='rating' value={this.state.rating} placeholder="Enter your rating" onChange={this.handleChange} /> <br /> <br />
                </div>
                <button id="btn" onClick={this.handleSubmit}>Submit</button>

                <div id="box">
                    {this.state.stuData.map((item, index) => {
                        console.log(item)
                        return (
                            <div id="data" key={index}>
                                <span>Name : {item.name}</span>
                                <span>Department : {item.dept}</span>
                                <span>Rating : {item.rating}</span>
                            </div>
                        )
                    })}
                </div>
            </form>
            </>
        )
    }
}
export default ReactFormCompo
