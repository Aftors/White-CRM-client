import React, { FC } from 'react'
import { IUser } from '../models/IUser'

interface PropsItem {
  user: IUser
}

const UserItem: FC<PropsItem> = ({ user }) => {
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.name}</div>
    </div>
  )
}

export default UserItem
