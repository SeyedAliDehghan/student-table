import { Component } from "react";
import users from "./UsersData";

class UsersTable extends Component {
  state = {
    users: users,
  };
  handleDeleteUser = (id) => {
    this.setState({ users: this.state.users.filter((user) => user.id !== id) });
  };
  handleAddUser = () => {
    const name = prompt("enter name");
    const status = prompt("enter status");
    const email = prompt("enter email");
    this.setState({
      users: [
        ...this.state.users,
        { id: Math.random() * 1000, name, status, email },
      ],
    });
  };
  handleUpdateUser = (oldUser) => {
    const name = prompt("enter name", oldUser.name);
    const status = prompt("enter status", oldUser.status);
    const email = prompt("enter email", oldUser.email);
    this.setState({
        users:this.state.users.map(user=>user.id===oldUser.id?{
            ...oldUser,
            name,
            status,
            email
        }:user)
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleAddUser}>Add new user</button>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>full name</td>
              <td>status</td>
              <td>email</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.status}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.handleUpdateUser(user)}>
                    update
                  </button>
                  <button onClick={() => this.handleDeleteUser(user.id)}>
                    {"delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul>
            {this.state.users.map(user=>(
                <li>{user.name}</li>
            ))}
        </ul>
      </div>
    );
  }
}
export default UsersTable;
