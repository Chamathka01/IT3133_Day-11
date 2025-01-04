import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export default function ContactUs() {
    const [name, setName] = useState();
    const navigation = useNavigation();
    return(
        <PaperProvider>
            <View style={styles.container}>
                 <View style={styles.header}>
                     <Text variant="headlineLarge">Contact Us</Text>
                    <Divider />
                 </View>
        </PaperProvider>
        
    );
}