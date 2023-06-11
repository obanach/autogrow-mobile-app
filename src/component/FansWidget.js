
import { StyleSheet, View } from 'react-native';
import {Heading, Image, Text} from "native-base";
import images from "../utils/images";

const data = [
    {
        name: 'Świeże powietrze',
        icon: images.fan,
        status: true
    },
    {
        name: 'Brudne powietrze',
        icon: images.fan,
        status: false
    },
    {
        name: 'Światło',
        icon: images.light,
        status: true
    },
    {
        name: 'Nawożenie',
        icon: images.tube,
        status: true
    },
    {
        name: 'Światło',
        icon: images.light,
        status: true
    },
    {
        name: 'Nawożenie',
        icon: images.light,
        status: true
    },

]

const ModulesWidget = () => {
    const rows = [];
    for (let i = 0; i < data.length; i += 2) {
        const rowData = data.slice(i, i + 2);
        const row = (
            <View style={styles.row} key={i}>
                {rowData.map((item, index) => (
                    <View style={styles.card} key={index}>
                        <Image source={item.icon} alt={item.name} size={'sm'} alignItems={'center'} />
                        <View style={styles.data}>
                            <Heading fontSize="sm">{item.name}</Heading>
                            <Text fontSize="xs">{item.status ? 'Włączone' : 'Wyłączone'}</Text>
                        </View>
                    </View>
                ))}
            </View>
        );
        rows.push(row);
    }

    return (
        <View style={styles.container}>
            {rows}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    data: {
        flexDirection: 'column',
        width: '100%',
        marginTop: 18,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 18,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    }
})

export default ModulesWidget;