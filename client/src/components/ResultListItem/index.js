import React, { Component } from 'react';
import API from "../../utils/API";

class ResultListItem extends Component {

  // call books as prop and call new compnent by calling in probs of various variables. list for each of the props being handled.
  onClickFunction = () => {
    API.create(this.props)

}
  render() {
    return (
      <div class="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.authors}</p>
              <p className="card-text">{this.props.description}</p>
              <img src={this.props.image} className="card-text" />
              <a href={this.props.link} className="btn btn-primary">View</a>
              <a href={this.onClickFunction} className="btn btn-primary">Save</a>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default ResultListItem;