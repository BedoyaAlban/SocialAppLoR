import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
// MUI
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import IoniaIcon from '../../regionIcons/ionia';
import FreljordIcon from '../../regionIcons/freljord';
import BilgewaterIcon from '../../regionIcons/bilgewater';
import PiltoverAndZaunIcon from '../../regionIcons/piltoverandzaun';
import NoxusIcon from '../../regionIcons/noxus';
import DemaciaIcon from '../../regionIcons/demacia';
import ShadowIlsesIcon from '../../regionIcons/shadowilses';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
  ...theme.spreadThis
});

const StaticProfile = (props) => {
  const {
    classes,
    profile: { handle, createdAt, imageUrl, bio, website, location }
  } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imageUrl} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            variant="h5"
          >
            @{handle}
          </MuiLink>
          <hr />
          {
            (
              ((bio && location === "Ionia" ) && (<Typography variant="body2" className={classes.locationIonia}>{bio}</Typography>)) 
              || ((bio && location === "Freljord" ) && (<Typography variant="body2" className={classes.locationFreljord}>{bio}</Typography>)) 
              || ((bio && location === "Bilgewater" ) && (<Typography variant="body2" className={classes.locationBilgewater}>{bio}</Typography>)) 
              || ((bio && location === "Piltover & Zaun" ) && (<Typography variant="body2" className={classes.locationPiltoverAndZaun}>{bio}</Typography>)) 
              || ((bio && location === "Noxus" ) && (<Typography variant="body2" className={classes.locationNoxus}>{bio}</Typography>)) 
              || ((bio && location === "Demacia" ) && (<Typography variant="body2" className={classes.locationDemacia}>{bio}</Typography>)) 
              || ((bio && location === "Shadow Ilses" ) && (<Typography variant="body2" className={classes.locationShadowIlses}>{bio}</Typography>)) 
              || ((bio) && (<Typography variant="body2" className={classes.lightColor}>{bio}</Typography>))
            )
          }
          <hr />
          {
                ((location === "Ionia") && (
                  <Fragment>
                    <IoniaIcon className={classes.locationIonia} /> <span className={classes.locationIonia}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Freljord") && (
                  <Fragment>
                    <FreljordIcon className={classes.locationFreljord} /> <span className={classes.locationFreljord}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Bilgewater") && (
                  <Fragment>
                    <BilgewaterIcon className={classes.locationBilgewater} /> <span className={classes.locationBilgewater}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Piltover & Zaun") && (
                  <Fragment>
                    <PiltoverAndZaunIcon className={classes.locationPiltoverAndZaun} /> <span className={classes.locationPiltoverAndZaun}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Noxus") && (
                  <Fragment>
                    <NoxusIcon className={classes.locationNoxus} /> <span className={classes.locationNoxus}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Demacia") && (
                  <Fragment>
                    <DemaciaIcon className={classes.locationDemacia} /> <span className={classes.locationDemacia}>{location}</span>
                    <hr />
                  </Fragment>
                )) 
                || ((location === "Shadow Ilses") && (
                  <Fragment>
                    <ShadowIlsesIcon className={classes.locationShadowIlses} /> <span className={classes.locationShadowIlses}>{location}</span>
                    <hr />
                  </Fragment>
                ))
                || ((location) && (
                  <Fragment>
                    <LocationOn className={classes.svgColor}/> <span className={classes.lightColor}>{location}</span>
                    <hr />
                  </Fragment>
                ))
              }
          {website && (
            <Fragment>
              <LinkIcon  className={classes.svgColor}/>
              <a href={website} target="_blank" rel="noopener noreferrer">
                {' '}
                {website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday  className={classes.svgColor}/>{' '}
          <span className={classes.lightColor}>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
        </div>
      </div>
    </Paper>
  );
};

StaticProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StaticProfile);