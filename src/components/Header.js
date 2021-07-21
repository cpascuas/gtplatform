import React from 'react'
import { makeStyles, AppBar, Toolbar, Grid, InputBase, IconButton } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff'
    },
    logo: {
        height: '45px'
    },
    searchInput: {
        padding: `0px ${theme.spacing(1)}px`,
        borderRadius: '6px',
        height: '35px',
        fontSize: '1.2rem',
        backgroundColor: '#f1f3f4'
        },
    '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1),
            // find a way to change color of search icon
            // color: '#5f6368'
        }
}))

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    
                    <Grid item>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                    <img className={classes.logo} src='https://s3.amazonaws.com/assets.cce.cornell.edu/slides/36803/image/sized/giving_tuesday_for_cce.jpg' alt='' />
                    </Grid>
                    
                    <Grid item sm>
                    </Grid>
                    
                    <Grid item>
                        <InputBase 
                            placeholder="Search assets"
                            // this className is applied to the outermost root element
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                
                    
                    <Grid item>
                        <IconButton>
                            <CreateNewFolderIcon/>
                        </IconButton>
                        <IconButton>
                            <AddCircleIcon/>
                        </IconButton>
                        <IconButton>
                            <CloudUploadIcon/>
                        </IconButton>
                    </Grid>

                
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
