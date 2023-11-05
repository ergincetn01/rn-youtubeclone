import { View, StyleSheet, Text, Image } from 'react-native';
import * as Icon from 'react-native-feather';

function VideoCard({ video }: { video: any }) {
  return (
    <View style={{ marginVertical: 10 }}>
      <Image source={video.thumbnail} style={styles.img} />
      <View style={styles.imgContainer}>
        <View style={styles.durationContainer}>
          <Text style={styles.duration}>{video.duration} </Text>
        </View>
      </View>
  
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
          <Image source={video.avatar} style={styles.avatar} />
          <View style={{flex: 1,marginVertical: 8,  marginLeft: 10 }}>
            <Text style={styles.title}>{video.title}</Text>

            <Text style={styles.sub}>
              {video.channelTitle} • {video.viewCount} • {video.publishedText}{' '}
            </Text>
          </View>
          <View
            style={{  alignSelf: 'flex-start',marginTop:8, justifyContent: "flex-end" }}
          >
            <Icon.MoreVertical stroke='white' />
          </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sub: { color: 'lightgray', fontSize: 13 },
  avatar: { borderRadius: 20, width: 40, height: 40 },
  duration: { color: 'white', fontWeight: '900' },
  title: { color: '#FFFFFF', fontSize: 16 },
  durationContainer: {
    backgroundColor: 'black',
    opacity: 0.8,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  imgContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 10,
    marginRight: 6,
    marginTop: -25,
  },
  titleContainer: {
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    paddingHorizontal: 4,
    paddingVertical: 10,
  },
  img: { height: 300, width: '100%' },
});
export default VideoCard;
