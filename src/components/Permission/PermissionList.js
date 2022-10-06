import React, { useContext } from 'react'
import { appContext } from '../../context/appContext'
import { PermissionItem } from './PermissionItem'

export const PermissionList = () => {
  const {user} = useContext(appContext)
  return (
    <div className='mt-4'>
      {user?.visits?.map(item => <PermissionItem permissionState='verify' {...item} />)}
        
    </div>
  )
}
