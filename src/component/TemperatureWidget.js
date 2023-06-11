
import { StyleSheet, View } from 'react-native';
import {Heading, Image, Text} from "native-base";
import images from "../utils/images";

const TemperatureWidget = ({temperature, humidity}) => {

    return (
        <View style={styles.container}>
            <Image source={images.temperature} alt={'temperature'} size={'sm'} />
            <View style={styles.data}>
                <Heading fontSize="md">Temperatura i wilgotność</Heading>
                <Text>{temperature}°C {humidity}%</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 5
    },
    data: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    }
})

export default TemperatureWidget;