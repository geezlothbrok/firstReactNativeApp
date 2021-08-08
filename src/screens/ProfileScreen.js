import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function profileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/simpson.jpg')} />
            </View>

            <View style={styles.detailsContainer}>
                <View style={styles.details}>
                    <Text style={styles.detailLable}>School</Text>
                    <Text style={styles.detailContent}>Jara College Of Education</Text>
                </View>

                <View style={styles.email}>
                    <Text style={styles.emailLable}>Email Address</Text>
                    <Text style={styles.emailContent}>papat@email.com</Text>
                </View>

                <View style={styles.personal}>
                    <Text style={styles.personalLable}>Name </Text>
                    <Text style={styles.personalContent}>Papa Tony</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

                <View style={styles.nicky}>
                    <Text style={styles.personalLable}>Nick Name</Text>
                    <Text style={styles.personalContent}>Papa T</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

                <View style={styles.nicky}>
                    <Text style={styles.personalLable}>Emergency Contact</Text>
                    <Text style={styles.personalContent}>+233-243994488</Text>
                    <Text style={styles.personalLine}></Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>UPDATE PROFILE</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}



const styles= StyleSheet.create({
        container: {
            flex : 1,
            marginTop: 15,
            marginHorizontal: 30
        },

        imageContainer: {
            flex: 0.25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 100,
        },

        details: {
            marginVertical: 10,
        },

        detailsContainer: {
            flex: 0.55,
            
        },

        detailLable: {
            color: '#ABB2B9',
            marginBottom: 5,
        },

        detailContent: {
            fontWeight: 'bold',
            fontSize: 17,
        },

        emailLable: {
            color: '#ABB2B9',
            marginTop: 5,
        },

        emailContent: {
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 5,
        },

        

        personalLable: {
            color: '#3FC8F7',
            marginBottom: 10,
            fontWeight: 'bold',
            fontSize: 15
            
        },
        personalContent: {
            fontSize: 17,
            fontWeight: 'bold',
        },

        personalLine: {
            backgroundColor: '#ECF0F1',
            width: '100%',
            height: 3,
            marginTop: 10,
            marginBottom: 20,
        },

        buttonContainer: {
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 200
            
        },

        button: {
            width: '100%',
            height: 50,
            backgroundColor: '#3FC8F7',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            
        },

        buttonText: {
            color: 'white',
            fontSize: 20
        }

})