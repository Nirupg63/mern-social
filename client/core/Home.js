import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import seashellImg from './../assets/images/seashell.jpg'

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        color: theme.palette.text.secondary
    },
    media: {
        minHeight: 330
    }
})

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Card className={classes.card}>
                <Typography type="headline" component="h2" className={classes.title}>
                    Home Page
          </Typography>
            </Card>
        )
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
