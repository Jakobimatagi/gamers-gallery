import Avatar from "@mui/material/Avatar";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

import styles from "./navBar.module.css";

const mockData = {
  userName: "Kobi Matagi",
  userTitle: "Project Manager",
}

function NavBar() {
  return (
    <div className={styles.navBar}>
        {/* user section */}
        <div className={styles.userSection}>
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
          <div className={styles.userIcons}>
            <NotificationsNoneOutlinedIcon
              className={styles.notificationsIcon}
              sx={{ color: "#CACED3" }}
            />
            <EmailOutlinedIcon
              className={styles.emailIcon}
              sx={{ color: "#CACED3" }}
            />
          </div>
        </div>
        {/* search and icons */}
        <div className={styles.searchAndIcons}>
          <div className={styles.search}>
            <InputBase
              className={styles.searchInput}
              placeholder='Search'
              sx={{ color: "#CACED3" }}
            />
            <SearchIcon
              className={styles.searchIcon}
              sx={{ color: "#CACED3" }}
            />
          </div>
          <div className={styles.rightIcons}>
            <AddBoxOutlinedIcon className={styles.addBox} sx={{ color: "#CACED3" }} />
            <Groups2OutlinedIcon className={styles.peopleGroup} sx={{ color: "#CACED3" }} />
            <MenuSharpIcon className={styles.menu} sx={{ color: "#CACED3" }} />
          </div>
        </div>

    </div>
  );
}

export default NavBar;
