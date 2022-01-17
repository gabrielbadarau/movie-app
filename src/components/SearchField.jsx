import React from 'react'
import { connect } from 'react-redux';
import {getSearch} from '../redux/actions/search'

class SearchField extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText:""
        }
    }

    updateSearchText(event){
        this.setState({searchText:event.target.value})
    }

    submitSearch(event){
        event.preventDefault();
        this.props.getSearch(this.state.searchText)
    }

    render() {
        return (
            <form
                onSubmit={(event)=>this.submitSearch(event)}
            >
                <label htmlFor="search"></label>
                <input
                    type="text"
                    id="search"
                    onChange={(event) => this.updateSearchText(event)}
                />
                <input type="submit" value="Search" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        getSearch:(text)=>dispatch(getSearch(text))
    }
}

export default connect(null,mapDispatchToProps)(SearchField)