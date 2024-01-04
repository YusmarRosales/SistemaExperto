import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authen/authContext';

export default function juridic() {

    const { setUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("cierre de sesión");
        localStorage.removeItem('token');
        setUser({});
        navigate('/user');
    };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#9a8cf9' }}>
                <Toolbar>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="logout"
                        onClick={handleLogout}
                    >
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <h1>hello Porfirio</h1>
        </>
    );
}