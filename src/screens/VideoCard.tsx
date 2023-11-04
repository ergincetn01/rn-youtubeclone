import { View, StyleSheet, Text, Image } from 'react-native';

function VideoCard({ video }: { video: any }) {
  return (
    <View>
      <Image source={video.thumbnail} style={styles.img} />
      <View style={styles.imgContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.duration}>{video.duration} </Text>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{ color: 'white' }}>{video.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    duration: {color: "white"},
    textContainer: {backgroundColor: "black",paddingHorizontal: 10, borderRadius: 4},
  imgContainer: {display:"flex", alignItems: "flex-end", marginBottom: 10,marginRight: 6, marginTop: -25},
  channel: {},
  titleContainer: { alignItems: 'flex-start', paddingVertical: 10 },
  img: { height: 300, width: '100%' },
});
export default VideoCard;
