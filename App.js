import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const notifications = [
  {
    id: '1',
    type: 'task',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    desc: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    type: 'client',
    title: 'Bạn có khách hàng mới!',
    desc: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    type: 'client',
    title: 'Khách hàng được chia sẻ bị trùng',
    desc: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '4',
    type: 'task',
    title: 'Khách hàng được thêm bị trùng',
    desc: 'Rất tiếc, khách hàng được thêm hiện tại đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng',
    time: '20/08/2020, 06:00',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    desc: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    desc: 'Bạn có 17 công việc bị quá hạn.',
    time: '20/08/2020, 06:00',
  },
];

const NotificationItem = ({ item }) => {
  // item có nền xanh nhạt: 1, 2, 4
  const highlightItems = ['1', '2', '4'];
  const isHighlight = highlightItems.includes(item.id);

  // item là client: 2, 3, 4
  const clientItems = ['2', '3', '4'];
  const isClient = clientItems.includes(item.id);

  return (
    <View
      style={[
        styles.item,
        isHighlight && styles.highlightBackground,
      ]}
    >
      <View style={styles.iconBox}>
        <Ionicons
          name={isClient ? 'people' : 'checkmark-circle'}
          size={26}
          color="#3B5BDB"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  highlightBackground: {
  backgroundColor: '#E7F0FF',
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    marginRight: 12,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
