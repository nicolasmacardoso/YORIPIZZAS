import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'

import { useRoute, RouteProp } from '@react-navigation/native'

import { Feather } from '@expo/vector-icons'

type RouteDetailParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export default function Order() {
    const route = useRoute<OrderRouteProps>();

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.title}> Mesa {route.params.number}</Text>
                <TouchableOpacity>
                    <Feather name="trash-2" size={28} color="#FF3F4B" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'white '}}>Pizzas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.input}>
                <Text style={{ color: 'white '}}>Pizza de calabresa</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D2E',
        paddingVertical: '5%',
        paddingEnd: '4%',
        paddingStart: '4%',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
        marginTop: '30%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 14,
    },
    input: {
        backgroundColor: '#101026'
    }
})
