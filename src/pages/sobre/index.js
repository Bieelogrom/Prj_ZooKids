import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './style';

export default function(){
    return(
        <View style={styles.container}>
            <Text>Pagina de sobre</Text>
            <StatusBar style="auto" />
        </View>
    );
}