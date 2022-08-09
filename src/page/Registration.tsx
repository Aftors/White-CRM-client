import { userAPI } from '../service/UserService'
import classes from './registration.module.scss'
import UserItem from './UserItem'

const Registration = () => {
  const { data: users } = userAPI.useFetchAllUsersQuery(5, {
    /*  pollingInterval: 10000, */
  })
  return (
    <div className={classes.registration}>
      <h1>Registration</h1>
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default Registration
