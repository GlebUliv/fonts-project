import React, { Component } from 'react';
import './Tab.css'


class Tab extends Component {

    state = {
        tabs: {}
    }
    componentDidMount() {
        // fetch('http://test-issue.ssv-design.com/main/buyfonts')
        //     .then(function (response) {
        //         return response.json()
        //     })
        //     .catch(function (error) {
        //         //console.log('error', error)
        //     })

    }


    render() {
        const { title , active, onClick } = this.props
        const activeClass = active ? 'active' : ''

        return (
        <span className={activeClass} onClick={onClick}>{title}</span>
        )
    }
}

export default Tab;