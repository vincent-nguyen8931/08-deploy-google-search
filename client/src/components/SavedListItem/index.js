import React from "react";
import { Component } from "react";
import Saved from "../../pages/Saved";
import API from "../../utils/API";

class SavedListItem extends Component {
    onClickFunction = () => {
        API.delete(this.props)

    }

    render() {
        return (
            <div class="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: "lightyellow" }}>
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.authors}</p>
                            <p className="card-text">{this.props.description}</p>
                            <img src={this.props.image} className="card-text" />
                            <a href={this.props.link} className="btn btn-primary">View</a>
                            <a href={this.onClickFunction} className="btn btn-primary">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedListItem;