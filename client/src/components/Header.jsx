


import {AppBar, Toolbar,styled} from '@mui/material';
import { Link } from 'react-router-dom';
import { routhPath } from '../routes/route';

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *':{
        textDecoration: 'none',
        color: 'inherit',
        marginRight: 20,
        fontSize: 16
    }
})
const Header = () => {
    const logo = "https://logos-world.net/wp-content/uploads/2021/02/Indeed-Logo.png";
    return (
        <StyledAppBar>
            <Toolbar>
                <Link to = {routhPath.home}>
                    <img src={logo} alt="logo" style = {{ width: 95}} />
                </Link>
                <Link to = {routhPath.create}>Post a job</Link>
                <Link to = {routhPath.posts}>Find Jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}


export default Header;