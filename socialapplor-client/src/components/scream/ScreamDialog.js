import CircularProgress from "@material-ui/core/CircularProgress";
// MUI Stuff
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";
// Icons
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
// Redux stuff
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, getScream } from "../../redux/actions/dataActions";
import MyButton from "../../util/MyButton";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import LikeButton from "./LikeButton";

const styles = theme => ({
  ...theme.spreadThis,
  gridContainer: {
    backgroundColor: "#28242A",
    "& svg": {
      color: "#D5D2CA"
    }
  },
  invisibleSeparator: {
    border: "none",
    margin: 4
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover"
  },
  dialogContent: {
    padding: 20
  },
  closeButton: {
    position: "absolute",
    left: "90%",
    color: "#D5D2CA"
  },
  expandButton: {
    position: "absolute",
    left: "90%"
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  }
});

class ScreamDialog extends Component {
  state = {
    open: false,
    oldPath: "",
    newPath: ""
  };
  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }
  handleOpen = () => {
    let oldPath = window.location.pathname;

    const { userHandle, screamId } = this.props;
    const newPath = `/users/${userHandle}/scream/${screamId}`;

    if (oldPath === newPath) oldPath = `/users/${userHandle}`;

    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getScream(this.props.screamId);
  };
  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
    this.props.clearErrors();
  };

  render() {
    const {
      classes,
      scream: {
        screamId,
        body,
        createdAt,
        likeCount,
        commentCount,
        userImage,
        userHandle,
        comments
      },
      UI: { loading }
    } = this.props;

    const dialogMarkup = loading ? (
      <div className={classes.spinnerDiv}>
        <CircularProgress
          size={200}
          thickness={2}
          style={{ color: "#D5D2CA" }}
        />
      </div>
    ) : (
      <Grid container spacing={10} className={classes.gridContainer}>
        <Grid item sm={5}>
          <img src={userImage} alt="Profile" className={classes.profileImage} />
        </Grid>
        <Grid item sm={7}>
          <Typography
            component={Link}
            variant="h5"
            to={`/users/${userHandle}`}
            className={classes.userColor}
          >
            @{userHandle}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          <Typography variant="body2" className={classes.lightColor}>
            {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
          </Typography>
          <hr className={classes.invisibleSeparator} />
          {(userHandle === "Yasuo" && (
            <Typography variant="body1" className={classes.locationIonia}>
              {body}
            </Typography>
          )) ||
            (userHandle === "Braum" && (
              <Typography variant="body1" className={classes.locationFreljord}>
                {body}
              </Typography>
            )) ||
            (userHandle === "MissFortune" && (
              <Typography
                variant="body1"
                className={classes.locationBilgewater}
              >
                {body}
              </Typography>
            )) ||
            (userHandle === "Jinx" && (
              <Typography
                variant="body1"
                className={classes.locationPiltoverAndZaun}
              >
                {body}
              </Typography>
            )) ||
            (userHandle === "Darius" && (
              <Typography variant="body1" className={classes.locationNoxus}>
                {body}
              </Typography>
            )) ||
            (userHandle === "Lux" && (
              <Typography variant="body1" className={classes.locationDemacia}>
                {body}
              </Typography>
            )) ||
            (userHandle === "Thresh" && (
              <Typography
                variant="body1"
                className={classes.locationShadowIlses}
              >
                {body}
              </Typography>
            )) || (
              <Typography variant="body1" className={classes.bodyCard}>
                {body}
              </Typography>
            )}
          <LikeButton screamId={screamId} />
          <span className={classes.likeCard}>{likeCount} likes</span>
          <MyButton tip="comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span className={classes.commentCard2}>{commentCount} comments</span>
        </Grid>
        <hr className={classes.visibleSeparator} />
        <CommentForm screamId={screamId} />
        <Comments comments={comments} />
      </Grid>
    );
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand scream"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ScreamDialog.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getScream: PropTypes.func.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  scream: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});

const mapActionsToProps = {
  getScream,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));
