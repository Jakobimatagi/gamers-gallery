import { Container } from "@chakra-ui/react";
import Avatar from "@mui/material/Avatar";
import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import styles from './navBar.module.css';
function NavBar() {
  return (
    <div>
      <Container maxW="lg" mx="auto" px="4" py="4" bg={"#0C002A"}>
        {/* user section */}
        <div className={styles.userSection}>
          <div className={styles.userAvatar}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className={styles.userName}>
              <h3>Rick James</h3>
            </div>
          </div>
          <div className={styles.userIcons}>
            <BellIcon marginLeft={24} w={24} h={24} color="#CACED3" />
            <EmailIcon marginLeft={24} w={24} h={24} color="#CACED3" />
          </div>
        </div>
        {/* search and icons */}
        <div className="search">Search</div>
      </Container>
    </div>
  );
}

export default NavBar;
