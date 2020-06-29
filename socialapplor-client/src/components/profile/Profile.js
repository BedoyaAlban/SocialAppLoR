//MUI stuff
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";
//Icons
import LinkIcon from "@material-ui/icons/Link";
import LocationOn from "@material-ui/icons/LocationOn";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
//  Redux stuff
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";
import BilgewaterIcon from "../../regionIcons/bilgewater";
import DemaciaIcon from "../../regionIcons/demacia";
import FreljordIcon from "../../regionIcons/freljord";
import IoniaIcon from "../../regionIcons/ionia";
import NoxusIcon from "../../regionIcons/noxus";
import PiltoverAndZaunIcon from "../../regionIcons/piltoverandzaun";
import ShadowIlsesIcon from "../../regionIcons/shadowilses";
import MyButton from "../../util/MyButton";
import ProfileSkeleton from "../../util/ProfileSkeleton";
import EditDetails from "./EditDetails";

const styles = theme => ({
  ...theme.spreadThis
});

class Profile extends Component {
  handleImageChange = event => {
    const image = event.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <img src={imageUrl} alt="profile" className="profile-image" />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon className={classes.svgColor} />
              </MyButton>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink component={Link} to={`/users/${handle}`} variant="h5">
                @{handle}
              </MuiLink>
              <hr />
              {(bio && location === "Ionia" && (
                <Typography variant="body2" className={classes.locationIonia}>
                  {bio}
                </Typography>
              )) ||
                (bio && location === "Freljord" && (
                  <Typography
                    variant="body2"
                    className={classes.locationFreljord}
                  >
                    {bio}
                  </Typography>
                )) ||
                (bio && location === "Bilgewater" && (
                  <Typography
                    variant="body2"
                    className={classes.locationBilgewater}
                  >
                    {bio}
                  </Typography>
                )) ||
                (bio && location === "Piltover & Zaun" && (
                  <Typography
                    variant="body2"
                    className={classes.locationPiltoverAndZaun}
                  >
                    {bio}
                  </Typography>
                )) ||
                (bio && location === "Noxus" && (
                  <Typography variant="body2" className={classes.locationNoxus}>
                    {bio}
                  </Typography>
                )) ||
                (bio && location === "Demacia" && (
                  <Typography
                    variant="body2"
                    className={classes.locationDemacia}
                  >
                    {bio}
                  </Typography>
                )) ||
                (bio && location === "Shadow Ilses" && (
                  <Typography
                    variant="body2"
                    className={classes.locationShadowIlses}
                  >
                    {bio}
                  </Typography>
                )) || (
                  <Typography variant="body2" className={classes.bioUser}>
                    {bio}
                  </Typography>
                )}
              <hr />
              {(location === "Ionia" && (
                <Fragment>
                  <IoniaIcon className={classes.locationIonia} />{" "}
                  <span className={classes.locationIonia}>{location}</span>
                  <hr />
                </Fragment>
              )) ||
                (location === "Freljord" && (
                  <Fragment>
                    <FreljordIcon className={classes.locationFreljord} />{" "}
                    <span className={classes.locationFreljord}>{location}</span>
                    <hr />
                  </Fragment>
                )) ||
                (location === "Bilgewater" && (
                  <Fragment>
                    <BilgewaterIcon className={classes.locationBilgewater} />{" "}
                    <span className={classes.locationBilgewater}>
                      {location}
                    </span>
                    <hr />
                  </Fragment>
                )) ||
                (location === "Piltover & Zaun" && (
                  <Fragment>
                    <PiltoverAndZaunIcon
                      className={classes.locationPiltoverAndZaun}
                    />{" "}
                    <span className={classes.locationPiltoverAndZaun}>
                      {location}
                    </span>
                    <hr />
                  </Fragment>
                )) ||
                (location === "Noxus" && (
                  <Fragment>
                    <NoxusIcon className={classes.locationNoxus} />{" "}
                    <span className={classes.locationNoxus}>{location}</span>
                    <hr />
                  </Fragment>
                )) ||
                (location === "Demacia" && (
                  <Fragment>
                    <DemaciaIcon className={classes.locationDemacia} />{" "}
                    <span className={classes.locationDemacia}>{location}</span>
                    <hr />
                  </Fragment>
                )) ||
                (location === "Shadow Ilses" && (
                  <Fragment>
                    <ShadowIlsesIcon className={classes.locationShadowIlses} />{" "}
                    <span className={classes.locationShadowIlses}>
                      {location}
                    </span>
                    <hr />
                  </Fragment>
                )) ||
                (location && (
                  <Fragment>
                    <LocationOn className={classes.svgColor} />{" "}
                    <span className={classes.lightColor}>{location}</span>
                    <hr />
                  </Fragment>
                ))}
              {website && (
                <Fragment>
                  <LinkIcon className={classes.svgColor} />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday className={classes.svgColor} />{" "}
              <span className={classes.lightColor}>
                Joined {dayjs(createdAt).format("MMM YYYY")}
              </span>
            </div>
            <MyButton tip="Logout" onClick={this.handleLogout}>
              <KeyboardReturn className={classes.svgColor} />
            </MyButton>
            <EditDetails className={classes.svgColor} />
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography
            variant="body2"
            align="center"
            className={classes.lightColor}
          >
            No profile found, please login again
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <ProfileSkeleton />
    );

    return profileMarkup;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = { uploadImage, logoutUser };

Profile.propTypes = {
  uploadImage: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
