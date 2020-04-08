import React, { Component, useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios';



class Home extends Component {
 
    constructor(props){

        super(props)

        this.state={

            email: "",
            password: " "
        }

    }
 
    render(){
    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">LOGIN</Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="PSU PASSPORT"
                            name="email"
                            autoComplete="text"
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleChange}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <div className="text-center">
                            <button className="btn btn-primary my-1" type="submit" onClick={this.login}>Login</button>
                            <button className="btn btn-primary my-1" type="submit" onClick={this.signup}>Signup</button>
                            <div className="row my-3 d-flex justify-content-center">
                            </div>
                        </div>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

}



export default Home;