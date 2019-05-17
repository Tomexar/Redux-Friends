import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getFriends } from '../actions';
import Friend from './Friend'

class Friends extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
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
        console.log(this.props.friends)
        return (
            <div className='friends'>
                <h1>this is the friends page</h1>
                {/* {this.props.friends.map(friend =>{
                        return <Friend key = {friend.name} friend = {friend}/>
                    }
                )} */}
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