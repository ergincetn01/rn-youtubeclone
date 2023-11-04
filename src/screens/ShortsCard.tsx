import { Image, StyleSheet, Text, View } from "react-native";
import * as Icon from "react-native-feather"
function ShortsCard({item}: {item: any}) {
    return (
        <View style={styles.main}>
            <Image source={item.image} style={styles.img} />
            <View style={styles.more}>
                <Icon.MoreVertical stroke="white" height="30" strokeWidth={1.4}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{item.title} </Text>
            <Text style={styles.count}>{item.viewCount} views </Text>

            </View>
            
        </View>
      );
}


const styles = StyleSheet.create({
    count: {fontWeight: "900", color: "white"},
    title: {color: "white", fontWeight: "bold"},
    titleContainer: {paddingLeft: 5},
    more: {paddingTop: 4, justifyContent: "flex-end", flexDirection: "row", paddingRight: 0},
    img: {position: "absolute", borderRadius: 8, height: "100%", width: "100%"},
    main: {flex: 1, height:256, width: 160, marginRight: 15, justifyContent: "space-between", position: "relative"}
})

export default ShortsCard;