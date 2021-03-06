import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'left',
              justifyContent: 'space-evenly',
              marginBottom: 16,
            }}>
            Picasso's training under his father began before 1890. His progress can be traced in the collection of early works now held by the Museu Picasso in Barcelona, which provides one of the most comprehensive records extant of any major artist's beginnings. During 1893 the juvenile quality of his earliest work falls away, and by 1894 his career as a painter can be said to have begun. The academic realism apparent in the works of the mid-1890s is well displayed in The First Communion (1896), a large composition that depicts his sister, Lola. In the same year, at the age of 14, he painted Portrait of Aunt Pepa, a vigorous and dramatic portrait that Juan-Eduardo Cirlot has called "without a doubt one of the greatest in the whole history of Spanish painting."
In 1897, his realism began to show a Symbolist influence, for example, in a series of landscape paintings rendered in non-naturalistic violet and green tones. What some call his Modernist period (1899–1900) followed. His exposure to the work of Rossetti, Steinlen, Toulouse-Lautrec and Edvard Munch, combined with his admiration for favourite old masters such as El Greco, led Picasso to a personal version of modernism in his works of this period. 
Picasso made his first trip to Paris, then the art capital of Europe, in 1900. There, he met his first Parisian friend, journalist and poet Max Jacob, who helped Picasso learn the language and its literature. Soon they shared an apartment; Max slept at night while Picasso slept during the day and worked at night. These were times of severe poverty, cold, and desperation. Much of his work was burned to keep the small room warm. During the first five months of 1901, Picasso lived in Madrid, where he and his anarchist friend Francisco de Asís Soler founded the magazine Arte Joven (Young Art), which published five issues. Soler solicited articles and Picasso illustrated the journal, mostly contributing grim cartoons depicting and sympathizing with the state of the poor. The first issue was published on 31 March 1901, by which time the artist had started to sign his work Picasso. From 1898 he signed his works as "Pablo Ruiz Picasso", then as "Pablo R. Picasso" until 1901. The change does not seem to imply a rejection of the father figure. Rather, he wanted to distinguish himself from others; initiated by his Catalan friends who habitually called him by his maternal surname, much less current than the paternal Ruiz. 




          </Text>
        </View>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'red'}}>
        Pablo Picasso. ALL RIGHTS RESERVED.
        </Text>
        <Text style={{fontSize: 14, textAlign: 'center', color: 'red'}}>
        ARTIST COPY RIGHTS 2020-2050
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondPage;
