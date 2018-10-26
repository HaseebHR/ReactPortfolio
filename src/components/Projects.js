import Project from './Project';
import React, { Component } from 'react';

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            imgName: [],
            description: []
        }
    }
    componentDidMount() {
        this.setState({
            imgName: ['gambit', 'iron-man', 'phoenix', 'storm'],
            description: ['School Management System']
        })
    }
    render() {
        const imgName = this.state.imgName
        return (
            imgName.map((e, i) => {
                return <Project imgName={e} key={i} description={this.state.description} />
            })
        )
    }
}
