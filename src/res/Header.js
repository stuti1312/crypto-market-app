import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={navigation}>
                <Image source={require("../assets/icons/back.png")} />
            </TouchableOpacity>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: { backgroundColor: "white", flexDirection: "row", padding: 13, alignItems: "center" },
    headingContainer: { justifyContent: "center", width: "90%" },
    heading: { textAlign: "center", fontSize: 22, fontWeight: "bold" }
})