import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'sticky',
        bottom: 0,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const renderMenu = (text) => {
        switch (text) {
            case 'Dashboard':
                return <DashboardIcon />;
            case 'Card':
                return <CreditCardIcon />;
            case 'Transaction':
                return <CompareArrowsIcon />;

            default:
                break;
        }
    };

    const renderLink = (text) => {
        switch (text) {
            case 'Dashboard':
                return "/dashboard";
            case 'Card':
                return "/err";
            case 'Transaction':
                return "/transaction";

            default:
                return "/";
        }
    };

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            {['Dashboard', 'Card', 'Transaction'].map((text, index) => (
                <Link to={renderLink(text)} style={{ textDecoration: 'none' }}>
                    <BottomNavigationAction label={text} icon={renderMenu(text)}></BottomNavigationAction>
                </Link>
            ))}
        </BottomNavigation>
    );
}