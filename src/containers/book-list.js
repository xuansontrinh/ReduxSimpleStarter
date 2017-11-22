import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          onClick={() => this.props.selectBook(book)} 
          key={book.title} 
          className="list-group-item"
        >
          {book.title}
        </li>
      )
    })
  }
}

function mapStateToProps(state) {
  // whatever returned from here will show up as 
  // props inside BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);