import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function _historyManager(historyState, where){
    let history = historyState
    history[where].go = true
    return { history }
}

class HistoryPush extends Component {
    constructor(prop) {
        super(prop)

    }

    _onClick(){
        if ('go' in this.props) {
            if (this.props.go) {
                document.querySelector('#history-push').click()
            }
        }
    }

    render() {
        this._onClick()
        return (
            <Link to={this.props.path} id='history-push'/>
        )
    }
}

export {
    HistoryPush,
    _historyManager
}