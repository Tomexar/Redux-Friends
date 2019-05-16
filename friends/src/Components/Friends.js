import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getFriends } from '../actions';

class Friends extends React.Component {

  componentDidMount(){
      this.props.getFriends();
  }
    // state = {
    //     newFriend: ''
    // }

    // handleChanges = e =>{
    //     this.setState({newFriend: e.target.value});
    // };

    // addMember = e => {
    //     e.preventDefault();
    //     this.props.addMember(this.state.newFriend);
    //     this.setState({ newFriend: ''})
    // };

    render() {
        return (
            <div className='friends'>
                <h1>this is the friends page</h1>
                {props.isLoading &&(
                    <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                )}
                {props.friends &&(
                    <h1>{this.props.friends}</h1>
                )}
                })}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    error: state.error,
    isLoading: state.isLoading
})
export default connect(
    mapStateToProps,
    { getFriends }
)(Friends);