import React from 'react';
import { Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import moment from 'moment';
import styles from './styles';

const ReportResults = ({ reports }) => (
  <FlatList
    style={styles.root}
    data={reports}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <Card
        title={item.location.properties.name}
        image={{ uri: item.image_url }}
        containerStyle={styles.card}
        titleStyle={styles.title}
      >
        <Text style={styles.text}>{item.comments}</Text>
        <Text style={styles.text}>
          {moment(item.created).format('MMM Do YYYY')}
        </Text>
      </Card>
    )}
  />
);

export default ReportResults;
