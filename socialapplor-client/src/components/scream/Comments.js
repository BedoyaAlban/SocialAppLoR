import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  ...theme.spreadThis,
  commentImage: {
    maxWidth: '100%',
    height: 100,
    objectFit: 'cover',
    borderRadius: '50%'
  },
  commentData: {
    marginLeft: 20
  }
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h5"
                        component={Link}
                        to={`/users/${userHandle}`}
                        className={classes.userColor}
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" className={classes.lightColor}>
                        {dayjs(createdAt).format('h:mm a, MMMM DD YYYY')}
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
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
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length - 1 && (
                <hr className={classes.visibleSeparator} />
              )}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withStyles(styles)(Comments);