import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import Feed from './components/Feed'
const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))
const App = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  )
}

export default App
