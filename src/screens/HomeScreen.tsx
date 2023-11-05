import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from 'react-native-feather';
import { categories, shortVideos, videos } from '../constants';
import { useState } from 'react';
import ShortsCard from './ShortsCard';
import VideoCard from './VideoCard';

function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.header}>
        <View style={styles.imgText}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/youtubeIcon.png')}
          />
          <Text style={styles.youtube}>YouTube</Text>
        </View>
        <View style={styles.headerRight}>
          <Icon.Cast
            stroke='white'
            strokeWidth={1.2}
            width='30'
            height='40'
            style={styles.icons}
          />
          <Icon.Bell
            stroke='white'
            strokeWidth={1.2}
            width='30'
            height='40'
            style={styles.icons}
          />
          <Icon.Search
            stroke='white'
            strokeWidth={1.2}
            width='30'
            height='40'
            style={styles.icons}
          />
          <Image
            source={require('../../assets/images/ergin.jpg')}
            style={styles.avatar}
          />
        </View>
      </SafeAreaView>
      <ScrollView
        style={{ flex: 1, marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scrollView}>
          <ScrollView
            style={{ flexDirection: 'row' }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category: any, index: any) => {
              let isActive: boolean = category === activeCategory;
              let textColor: string = isActive ? 'black' : 'white';
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setActiveCategory(category)}
                  style={{
                    paddingVertical: 7,
                    marginHorizontal: 3,
                    paddingHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: isActive
                      ? 'white'
                      : 'rgba(255,255, 255, 0.1)',
                  }}
                >
                  <Text style={{ color: textColor, fontWeight: '700' }}>
                    {category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={{borderTopColor: "#5F6A6A", marginTop: 6, paddingBottom: 20, paddingTop: 12}}>
            <View style={styles.shortsContainer}>
                <Image source={require("../../assets/icons/shortsIcon.png")} style={styles.shortsIon} />
                <Text style={styles.shortsText}>Shorts</Text>
            </View>
            <ScrollView horizontal style={{paddingHorizontal: 20}} showsHorizontalScrollIndicator={false} >
                {shortVideos.map((short: any, index: any)=> {
                    return (
                        <ShortsCard item ={short} key={index}/>
                    )
                })}
            </ScrollView>
         </View>
    
            <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
                {videos.map((video:any, index: any)=> {
                    return (
                        <VideoCard video={video} key={index} />
                    )
                })}
            </ScrollView>
         
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   main: {
    backgroundColor: '#212121',
    flex: 1,
  },  
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 4,
    marginHorizontal: 10,
  },
  scrollView: { paddingVertical: 5, paddingHorizontal: 8 }, 
  imgText: { flexDirection: 'row', alignItems: 'center' },
  youtube: { color: 'white', marginLeft: 0, fontSize: 20, fontWeight: '600' },
  icon: { width: 60, height: 60 },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icons: { marginHorizontal: 4 },
  avatar: {
    borderWidth: 1,
    borderColor: '#212121',
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  shortsContainer: {marginBottom: 20, alignItems: "center", flexDirection: "row"},
  shortsIon: {width: 40, height: 40, marginLeft: 20, marginTop: 10},
  shortsText: {color: "#FFFFFF", fontSize: 20, marginLeft: 10},


});
export default HomeScreen;
