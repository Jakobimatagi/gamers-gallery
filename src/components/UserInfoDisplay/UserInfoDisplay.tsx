import { Avatar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from './userInfoDisplay.module.css'

const mockData = {
  userName: 'Kobi Matagi',
  userTitle: 'Project Manager',
  followers: 282,
  viewedAccount: 12,
}

function UserInfoDisplay() {
  return (
    <div className={styles.userInfo}>
      <Box
        sx={{
          width: 300,
          height: 250,
          backgroundColor: '#ffff',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            height: '4rem',
            backgroundImage: `url('https://images.unsplash.com/photo-1515705576963-95cad62945b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div className={styles.userBanner}></div>
        <div className={styles.userAvatar}>
          <Avatar
            alt={mockData.userName}
            src="https://avatars.githubusercontent.com/u/72160375?s=400&u=42768bce014bc14e81b7f183916c4bc359c642bc&v=4"
            className={styles.userAvatarImg}
          />
          <div className={styles.userName}>
            <h3>{mockData.userName}</h3>
            <p className={styles.userTitle}>{mockData.userTitle}</p>
          </div>
        </div>
        <div className={styles.accountStats}>
          <div className={styles.statTitles}>
            <p>Followers </p>
            <p>Viewed your account</p>
          </div>
          <div className={styles.statNumbers}>
            <p>{mockData.followers}</p>
            <p>{mockData.viewedAccount}</p>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default UserInfoDisplay
