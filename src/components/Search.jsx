import React from "react";

class Search extends React.Component {
    state = {
        searchField: ""
    }

    handleInput = (event) => {
        this.setState( {searchField: event.target.value});
    }

    handleSearch = () => {
        this.props.getResult(this.state.searchField);
        // this.setState( {searchField: ""});
    }

    handleKey = (e) => {
        if ( e.key === 'Enter') {
            this.props.getResult(this.state.searchField);
        }
    }

    render() {
        return (

            // <form action="#">
            //     <div class="file-field input-field">
            //     <div class="btn">
            //         <span>File</span>
            //         <input type="file">
            //     </div>
            //     <div class="file-path-wrapper">
            //         <input class="file-path validate" type="text">
            //     </div>
            //     </div>
            // </form>





            <div className="row">
                <div className="col s9">
                    <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input placeholder="search" id="icon_prefix" type="text" className="validate" value={this.state.searchField}
                                    onChange={this.handleInput}
                                    onKeyDown={this.handleKey} />
                            {/* <label for="icon_prefix">Search</label> */}
                    </div>   
                </div>
                <div className="col s3 button-search" >
                    <a href="#!" className="waves-effect waves-light btn" onClick={this.handleSearch}>Search</a>
                </div>
            </div>

        );
    }
}

export default Search;