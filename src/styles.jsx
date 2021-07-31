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
        // position: 'fixed',
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
    container: {
        marginTop: '100px',
    },
    ull: {
        flexDirection: 'column',
    },
    h1: {
        marginTop: '0px',
        fontSize: '20px',
        marginLeft: '68px',
    },
    h11: {
        marginTop: '0px',
        fontSize: '20px',
        marginLeft: '300px',
    },
    h12: {
        marginTop: '20px',
        fontSize: '20px',
    },
    div: {
        border: '1px',
        display: 'inline-block',
        width: '45%',
        margin: '100px 0px 0px 45px',
    },
    div2: {
        textAlign: 'center',
    },
    upload: {
        margin: 'auto',
        marginLeft: '10px',
    },
    divTop: {
        display: 'flex',
        width: '100%',
    },
    input: {
        margin: 'auto',
        width: '80%',
        marginBottom: '20px',
    },
    input1: {
        width: '25%',
        margin: 'auto',
    },
    radio: {
        display: 'inline-block',
    },
    gender1: {
        marginLeft: '25px',
        textAlign: 'left',
    },
    bghome: {
        maxWidth: '500px',
        width: '100%',
        height: 'auto',
        margin: '-12px 0px 0px 100px',
    },
    form: {
        border: '1px solid',
        boxShadow: '0px 0px 3px black',
        backgroundColor: 'white',
        width: '80%',
        margin: 'auto',
        minHeight: '700px',
        borderRadius: '6px',
        textAlign: 'center',
    },
    submit: {
        marginTop: '25px',
        backgroundColor: '#7CAABF',
    },
}))

export default useStyles
