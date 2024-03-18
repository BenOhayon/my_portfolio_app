import React, { useContext } from 'react'
import Stack from '../utils/Stack'
import { withRouter } from 'react-router-dom';

const historyContext = React.createContext();

export function useHistoryContext() {
    return useContext(historyContext);
}


// Origin: https://stackoverflow.com/a/62178171
// 'onBackButton' is called when the back button is pressed.
/**
 * Providing an storeProperties context to all children components.
 */
class HistoryProvider extends React.Component {
    constructor(props) {
        super(props);
        this.stack = new Stack()
        this.props.history.listen(this.onHistoryEvent);
    }

    onHistoryEvent = (e) => {
        if (this.props.history.action === 'PUSH') {
        }
        else if (this.props.history.action === 'POP') {
            this.popAndPerform()
        }
    }

    popAndPerform() {
        let backHandler = this.popBackHandler()
        if (backHandler != null)
            backHandler()
    }

    popBackHandler() {
        return this.stack.pop()
    }

    goBack(step = null) {
        if (!step)
            this.props.history.goBack();
        else {
            this.props.history.go(-step)
            for (let i = 0; i < step; i++) {
                this.popAndPerform()
            }
        }
    }

    push(url, onBackClicked = () => { }) {
        this.stack.push(onBackClicked);
        this.props.history.push(url);
    }

    replace(url, onBackClicked = () => { }) {
        this.stack.pop()
        this.stack.push(onBackClicked);
        this.props.history.replace(url);
    }

    replaceBackHandler(onBackClicked = () => { }) {
        this.stack.pop()
        this.stack.push(onBackClicked);
    }
   
    addBackHandler(onBackClicked) {
        this.stack.push(onBackClicked);
        this.props.history.push(this.props.history.location.pathname + this.props.history.location.search)
    }

    render() {
        return (
            <historyContext.Provider value={this}>
                {this.props.children}
            </historyContext.Provider>
        )
    }
}

export default withRouter(HistoryProvider);