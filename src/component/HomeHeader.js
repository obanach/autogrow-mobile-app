import {View, StyleSheet} from "react-native";
import {Image, Text} from "native-base";
import {Heading} from "native-base";
import images from "../utils/images";


const homeHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Heading>Witaj, Oliwer</Heading>
                <Text mt="0" fontWeight={'normal'}>Zarządzaj swoim namiotem uprawowym</Text>
            </View>
            <Image style={styles.image} source={images.logout} alt={'logout'}/>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginTop: 75,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image:{
        width: 35,
        height: 35,
    }

});

export default homeHeader;