export default {
    palette: {
        primary: {
          light: '#332F35',
          main: '#28242A',
          dark: '#232025',
          contrastText: '#936851'
        },
        secondary: {
          light: '#3B383B',
          main: '#936851',
          dark: '#E8BC65',
          contrastText: '#28242A'
        },
        info: {
          light: '#644931',
          main: '#151415',
          dark: '#121212',
          contrastText: '#95864D'
        },
        error: {
          main: '#b71c1c'
        }
      },
      spreadThis: {
        typography: {
          userNextVariants: true,
        },
        fieldForm: {
          color: '#28242A'
        },
        form: {
          backgroundColor: '#28242A',
          paddingBottom: 20,
          textAlign: 'center',
          '& a': {
            color: '#BE945B'
          }
        },
        containerImg: {
          flexGrow: 1
        },
        image: {
            margin: '20px auto 20px auto'
        },
        imgSize1: {
          maxWidth: 600,
          paddingTop: 50
        },
        imgSize2: {
          maxWidth: 600
        },
        pageTitle: {
            margin: '10px auto 10px auto',
        },
        textField: {
            margin: '10px auto 10px auto',
            '& label': {
              color: '#28242A'
            }
        },
        button: {
            marginTop: 30,
            position: 'relative'
        },
        customError: {
            color: 'red',
            fontSize: '0.8rem',
            marginTop: 10
        },
        progress: {
            position: 'absolute'
        },
        invisibleSeparator: {
          border: 'none',
          margin: 4
        },
        visibleSeparator: {
          width: '100%',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          marginBottom: 20,
          color: '#D5D2CA'
        },
        paper: {
          padding: 20,
          backgroundColor: '#28242A'
        },
        profile: {
          '& .image-wrapper': {
            textAlign: 'center',
            position: 'relative',
            '& button': {
              position: 'absolute',
              top: '80%',
              left: '70%'
            }
          },
          '& .profile-image': {
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
          },
          '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
              verticalAlign: 'middle'
            },
            '& a': {
              color: '#D5D2CA'
            }
          },
          '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
          },
          '& svg.button': {
            '&:hover': {
              cursor: 'pointer'
            }
          }
        },
        buttons: {
          textAlign: 'center',
          '& a': {
            margin: '20px 10px'
          }
        },
        userColor: {
          color: '#E1B662'
        },
        bioUSer: {
          color: '#D5D2CA'
        },
        bodyCard: {
          fontSize: 25,
          color: '#644931'
        }, 
        likeCard: {
          color: '#936851'
        },
        commentCard: {
          color: '#936851',
          paddingLeft: 63
        },
        commentCard2: {
          color: '#936851',
        },
        locationIonia: {
          color: '#C5869B'
        },
        locationFreljord: {
          color: '#9DD6F0'
        },
        locationBilgewater: {
          color: '#A54B32'
        },
        locationPiltoverAndZaun: {
          color: '#D39C74'
        },
        locationNoxus: {
          color: '#A24F44'
        },
        locationDemacia: {
          color: '#EEEEE9'
        },
        locationShadowIlses: {
          color: '#66B7A3'
        },
        lightColor: {
          color: '#D5D2CA'
        },
        svgColor: {
          color: '#D5D2CA'
        }
      }
};