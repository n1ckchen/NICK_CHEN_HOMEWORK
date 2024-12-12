import './App.css'
import { Form } from './Forms'
import { Todos } from './Todos'
import { fetchUsers } from './Users'
// import UsersList from './Users'
// import { fetchUsers } from './Users'

function App() {
  fetchUsers();
  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <Todos />
      </div>
{/*       <div>
        <fetchUsers />
      </div> */}
{/*       <div>
        <UsersList />
      </div> */}
    </>
  )
}

export default App
