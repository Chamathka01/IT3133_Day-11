export default function AboutUs() {
    return(
        <PaperProvider>
            <Text variant="headlineLarge">History</Text>
            <Divider />
            <View style={styles.imagepad}>
                <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
            </View>
        </PaperProvider>
    );
}