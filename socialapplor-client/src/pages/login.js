import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import AppIcon from '../images/lor-logo.png';
import { Link } from 'react-router-dom';
import MissFortuneImg from '../images/miss-fortune-hero.png';
import LeeSinImg from '../images/lee-sin.png';

//MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//Redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

const styles = (theme) => ({
    ...theme.spreadThis,
    
});


class login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors) {
            this.setState({ errors: nextProps.UI.errors});
        }
    }
    handleSubmit = (event) => {
       event.preventDefault();
       const userData = {
           email: this.state.email,
           password: this.state.password
       };
       this.props.loginUser(userData, this.props.history);
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        const { classes, UI: { loading }} = this.props;
        const { errors } = this.state;
        return (
            <Fragment>
                <Grid container className={classes.form}>
                    <Grid item sm />
                    <Grid item sm>
                        <img src={AppIcon} alt="logo Legends of Runeterra" className={classes.image}/>
                    <Typography variant="h2" className={classes.lightColor}>
                        Login
                    </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                className={classes.textField}
                                helperText={errors.email}
                                error={errors.email ? true : false}
                                value={this.state.email}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <TextField
                                id="password"
                                name="password"
                                type="password"
                                label="Password"
                                className={classes.textField}
                                helperText={errors.password}
                                error={errors.password ? true : false}
                                value={this.state.password}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            {errors.general && (
                                <Typography variant="body2" className={classes.customError}>
                                    {errors.general}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Login
                                {loading && (
                                    <CircularProgress size={30} className={classes.progress} />
                                )}
                            </Button>
                            <br />
                            <small className={classes.lightColor}>
                                dont have an account ? sign up <Link to="/signup">here</Link>
                            </small>
                        </form>
                    </Grid>
                    <Grid item sm />
                </Grid>
                <Grid container className={classes.containerImg}>
                    <Grid item xs={6}>
                        <img src={MissFortuneImg} alt="MissFortune shooting Lee Sin" className={classes.imgSize1}/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={LeeSinImg} alt="Lee Sin" className={classes.imgSize2}/>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionToProps) (withStyles(styles)(login));