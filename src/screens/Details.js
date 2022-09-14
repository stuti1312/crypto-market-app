import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../res/Header';

const Details = ({ route, navigation }) => {
    const [cryptoInfo, setCryptoInfo] = useState(null)
    const { item } = route.params;
    console.log("ITEM DETAIL", item);

    useEffect(() => {
        fetchCryptoDetails()
    }, [])

    const fetchCryptoDetails = () => {
        axios.get(`https://api.buyucoin.com/ticker/v1.0/liveData?symbol=${item.marketName}`)
            .then(res => {
                if (res?.data?.data) {
                    setCryptoInfo(res?.data?.data)
                }
            }
            )
            .catch(err => console.log("ERR", err))
    }
    return (
        <View>
            <Header title={"back"} navigation={() => { navigation.goBack("Home") }} />
            <View style={styles.mainContainer}>
                <View style={[styles.card, { alignItems: "center", marginBottom: 20 }]}>
                    <Text style={styles.smallText}>{item.baseCurrency}</Text>
                    <Text style={styles.largeText}>{item.currToName}</Text>
                    <Text style={styles.smallText}>{item.quoteCurrency}</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.smallText}>Price Value:</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.largeText}>{item.h24}</Text>
                        <Text style={styles.lowPrice}>{item.l24}</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Details

const styles = StyleSheet.create({
    mainContainer: { paddingVertical: 20, paddingHorizontal: 30 },
    card: { backgroundColor: "white", padding: 20, borderRadius: 30, elevation: 20, justifyContent: "center", },
    largeText: { color: "black", fontSize: 35, fontWeight: "600" },
    smallText: { fontSize: 18, fontWeight: "600" },
    priceContainer: { marginTop: 30, marginBottom: 10, alignItems: "center" }
})