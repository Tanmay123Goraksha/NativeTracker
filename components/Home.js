import { View,Text,Button,StyleSheet } from "react-native";

const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
        <Text style={styles.para}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</Text>
        <Button
        title="Get Started"
        onPress={() => navigation.navigate('Menu')}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin:20,
      },
      text: {
        fontSize: 24,
        textAlign:"center",
        fontWeight: "bold",
        marginBottom: 16,
      },
      para:{
        fontSize: 15,
        textAlign:"center",
        justifyContent:"center",
        marginBottom:20,

      }
})

export default Home;