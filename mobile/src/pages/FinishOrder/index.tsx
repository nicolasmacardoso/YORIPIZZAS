import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

export function FinishOrder() {
    <View style={styles.container}>
        <Text style={styles.alert}>Você deseja finalizar o pedido?</Text>
        <Text style={styles.title}>Mesa 30</Text>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Finalizar pedido</Text>
            <Feather name='shopping-cart' size={20} color='#1D1D2E'/>
        </TouchableOpacity>
    </View>
}
