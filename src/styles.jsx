import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    textField: {
        margin: '15px',
    },
    button: {
        marginTop: '15px',
    },
    appBar: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: 'flex',
        position: 'fixed',
        top: '0px',
    },
    appBarTitle: {
        color: '#000000',
        margin: '10px 10px 10px 10px',
    },
    appBarButton: {
        margin: '10px 10px 10px 10px',
    },
    appBarLogin: {
        backgroundColor: '#7caabf',
        margin: '10px 10px 10px 10px',
    },
    appBarRight: {
        marginLeft: '100px',
    },
    container: {},
}))

export default useStyles
