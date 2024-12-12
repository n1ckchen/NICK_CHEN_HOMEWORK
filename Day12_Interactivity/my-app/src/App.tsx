import './App.css'
import { Form } from './Forms'
import { Todos } from './todos'
// import UsersList from './Users'
import { fetchUsers } from './Users'

function App() {

  return (
    <>
      <div>
        <Form />
      </div>
      <div>
        <Todos />
      </div>
      <div>
        <fetchUsers />
      </div>
{/*       <div>
        <UsersList />
      </div> */}
    </>
  )
}

export default App
