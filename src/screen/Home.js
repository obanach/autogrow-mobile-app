import {ScrollView} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "../component/HomeHeader";
import {StyleSheet} from "react-native";
import TemperatureWidget from "../component/TemperatureWidget";
import ModulesWidget from "../component/FansWidget";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader/>

            <ScrollView>
                <TemperatureWidget temperature={23} humidity={43}/>
                <ModulesWidget fan1={1} fan2={0}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
       paddingHorizontal: 20,
       backgroundColor: '#F4F6FA',
       height: '100%'
   }
});

export default Home;