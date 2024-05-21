import React, { useEffect } from 'react'
import styles from "./Profile.module.css"
import { useAppDispatch, useAppSelector } from '../../helpers/types'
import { getOneUser } from '../../Store/Users/User.action'

const ProfilePage = () => {

  const dispatch = useAppDispatch()
  const id = localStorage.getItem('currentUser')
  const {user} = useAppSelector(state => state.users)

  useEffect(() => {
    if(id){
     dispatch(getOneUser(id))
    }
  }, [])

  const emailWithoutDomain = user?.email.split('@')[0];

  return (
    <div className='mainContent'>
        <div className={`${styles.profu} flex gap-5 `}>
          <img className={styles.avatar} src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png" alt="avatar" />
          <div className='flex gap-y-2 flex-col'>
            <h2 className='text-4xl font-semibold'>Name Surname</h2>
            <p className='text-neutral-400'>{emailWithoutDomain} / subsribes</p> {/* Показываем часть адреса без домена */}
            <span className='text-neutral-400'>Подробнее о канале {'>'}</span>
            <section className={`${styles.buttons} mt-1 `}><button className='text-sm'>Настроить вид канала</button><button>Управление канала</button></section>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage
