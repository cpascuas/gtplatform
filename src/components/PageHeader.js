import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    pageHeader: {
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom: theme.spacing(1)
    }
}))

function PageHeader(props) {

    const classes = useStyles();
    const { title } = props;

    return (
        <Paper elevation={0} square>
            <div className={classes.pageHeader}>
                <div>
                    <Typography 
                    variant='h5'
                    component='div'
                    >{ title }</Typography>
                </div>
            </div>
            
        </Paper>
    )
}

export default PageHeader
