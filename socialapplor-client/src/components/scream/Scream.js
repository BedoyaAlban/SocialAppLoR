import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';
import DeleteScream from './DeleteScream';
import ScreamDialog from './ScreamDialog';
import LikeButton from './LikeButton';
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// Redux
import { connect } from 'react-redux';
import CommentOnScream from './CommentOnScream';

const styles = (theme) => ({
  ...theme.spreadThis,
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
    backgroundColor: '#28242A',
    '& svg' : {
      color: '#D5D2CA'
    },
    '& a' : {
      color: '#E1B662'
    }
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },

});
  

class Scream extends Component {
  
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        credentials: { handle }
      }
    } = this.props;

    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteScream screamId={screamId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            className={classes.userCard}
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" className={classes.lightColor}>
            {dayjs(createdAt).fromNow()}
          </Typography>
          {
            ((userHandle === "Yasuo") && (<Typography variant="body1" className={classes.locationIonia}>{body}</Typography>))
            || ((userHandle === "Braum") && (<Typography variant="body1" className={classes.locationFreljord}>{body}</Typography>))
            || ((userHandle === "MissFortune") && (<Typography variant="body1" className={classes.locationBilgewater}>{body}</Typography>))
            || ((userHandle === "Jinx") && (<Typography variant="body1" className={classes.locationPiltoverAndZaun}>{body}</Typography>))
            || ((userHandle === "Darius") && (<Typography variant="body1" className={classes.locationNoxus}>{body}</Typography>))
            || ((userHandle === "Lux") && (<Typography variant="body1" className={classes.locationDemacia}>{body}</Typography>))
            || ((userHandle === "Thresh") && (<Typography variant="body1" className={classes.locationShadowIlses}>{body}</Typography>))
            || (<Typography variant="body1" className={classes.bodyCard}>{body}</Typography>)
          }
          <LikeButton screamId={screamId} />
          <span className={classes.likeCard}>{likeCount} Likes</span>
          <CommentOnScream screamId={screamId}
            userHandle={userHandle}
            openComment={this.props.openComment}
          />
          <span className={classes.commentCard}>{commentCount} comments</span>
          <ScreamDialog
            screamId={screamId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Scream.propTypes = {
  user: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Scream));
