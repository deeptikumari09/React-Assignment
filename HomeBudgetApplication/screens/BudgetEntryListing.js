import {useEffect} from 'react';
import {
  FlatList,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  LogBox,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';

function BudgetEntryListing() {
  const budgetItems = useSelector(state => state.BudgetList.items);
  console.log(budgetItems);

  if (budgetItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {color: 'white'}]}>No Items Found!!</Text>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={budgetItems}
          renderItem={itemData => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{itemData.item.ItemName}</Text>
                <Text style={styles.text}>{itemData.item.pAmount}</Text>
                <Text style={styles.text}>{itemData.item.rAmount}</Text>
              </View>
            );
          }}
          keyExtractor={item => {
            return item.Id;
          }}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
  );
}

export default BudgetEntryListing;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 25,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 24,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white',
    marginBottom: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});
