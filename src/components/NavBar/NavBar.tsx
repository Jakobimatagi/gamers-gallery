import { Container } from "@chakra-ui/react";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import styles from './navBar.module.css';
function NavBar() {
  return (
    <div>
      <Container maxW="lg" mx="auto" px="4" py="4" bg={"#0C002A"}>
        {/* user section */}
        <div className={styles.userSection}>
          <div className={styles.userAvatar}>
            <Avatar alt="Kobi Matagi" src="https://avatars.githubusercontent.com/u/72160375?s=400&u=42768bce014bc14e81b7f183916c4bc359c642bc&v=4" className={styles.userAvatarImg}/>
            <div className={styles.userName}>
              <h3>Kobi Matagi</h3>
              <p className={styles.userTitle}>Project Manager</p>
            </div>
            <KeyboardArrowDownOutlinedIcon sx={{color: '#CACED3'}}/>
          </div>
          <div className={styles.userIcons}>
            <NotificationsNoneOutlinedIcon className={styles.notificationsIcon} sx={{color: '#CACED3'}} />
            <EmailOutlinedIcon className={styles.emailIcon} sx={{color: '#CACED3'}} />
          </div>
        </div>
        {/* search and icons */}
        <div className="search">Search</div>
      </Container>
    </div>
  );
}

export default NavBar;
