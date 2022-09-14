import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../res/Header'

const Home = ({ navigation }) => {
    const [crypto, setCrypto] = useState([])
    useEffect(() => {
        fetchAPI()
    }, [])

    const fetchAPI = () => {
        axios.get("https://api.buyucoin.com/ticker/v1.0/liveData")
            .then(res => {
                if (res?.data?.data) {
                    setCrypto(res?.data?.data);
                }
            })
            .catch(err => console.log("err", err))
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => { navigation.navigate("Details", { item: item }) }}
                style={styles.card}
            >
                <Text style={[styles.cardValues, { color: "gray" }]}>{item.currToName}</Text>
                <Text style={[styles.cardValues, { color: "gray" }]}>{parseFloat(item.v24).toFixed(2)}</Text>
                <Text style={[styles.cardValues, { color: "green" }]}>{parseFloat(item.tp24).toFixed(2)}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <Header title={"CryptoCurrency"} navigation={() => { console.log("nowhere"); }} />
            <View style={{ padding: 20 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titles}>Coins</Text>
                    <Text style={styles.titles}>Price</Text>
                    <Text style={styles.titles}>24 hrs</Text>
                </View>
                <FlatList
                    data={crypto}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    card: { backgroundColor: "white", padding: 20, borderRadius: 10, elevation: 6, margin: 5, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    cardValues: { fontSize: 15, fontWeight: "500" },
    titleContainer: { marginBottom: 15, marginHorizontal: 15, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    titles: { color: "gray", fontSize: 20, fontWeight: "bold" },
})