import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#15141F',
        flex: 1,
        justifyContent: 'center'
    },
    subContainer:{
        height: 550,
        marginHorizontal: 20,
        marginTop: 20
    },
    containerTitle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    containerInput: {
        height: 130,
        marginTop: 25,
    },
    textInput: {
        color: 'white',
        borderWidth: 1,
        borderColor: '#9D9D9D',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontWeight: '500',
        height: 50
    },
    icon:{
        bottom: 35,
        left: 310,
        opacity: 0.8
    },
    forgotPassword: {
        color: '#FFF',
        textDecorationLine: 'underline',
        fontSize: 12
    },
    btnLogin: {
        borderColor: '#FFF',
        borderRadius: 25,
        fontWeight: '500',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    register:{
        color: '#FFF',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 50
    },
    registerLink: {
        textDecorationLine: 'underline'
    },
    media: {
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },

});

export default styles