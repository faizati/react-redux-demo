import React from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
const UserContainer = ({users, fetchUsersRequest}) => {
    return (
        <div>
            <button onClick={() => fetchUsersRequest()}>Fetch Users</button>
            {
                users.loading ? (<h2>Loading</h2>)
                : users.error ? (<h2>{users.error}</h2>) : (
                    <div>
                        <h2>User List</h2>
                        <div>
                            {
                                users && users.users && users.users.map(user => (<p>{user.name}</p>))
                            }
                        </div>
                    </div>
                )
                        
            }
        </div>
    )
}

const mapStateToProps = state => (
    {
        users: state.user
    }
);

// nice

const mapDispatchToProps = dispatch => (
    {
        fetchUsersRequest: () => dispatch(fetchUsers()),
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
