/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect, useState} from 'react';
import {Dimensions, FlatList, Platform, StyleSheet, View} from 'react-native';
import HeaderBar from '../../components/organisms/headerbar';
import ShowItem from '../../components/organisms/showitem';
import {getListDataItems, searchShowItems} from '../../services/content-helper';
import {Page, ShowContent} from '../../types/modal/show_list';
import DeviceInfo from 'react-native-device-info';
import * as Colors from '../../styles/color';

const ShowsList = () => {
  const [pageNo, setPageNo] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [listItems, setListItems] = useState<ShowContent[]>([]);
  const [searchTextValue, setSearchText] = useState('');

  useEffect(() => {
    const listValue: Page = getListDataItems(pageNo);
    const items = [
      ...listItems,
      ...(listValue?.page?.['content-items']?.content ?? []),
    ];
    setTotalItems(Number(listValue?.page['total-content-items'] ?? 0));
    setListItems(items);
  }, [pageNo]);

  const updateListItems = () => {
    if (listItems.length != totalItems) {
      setPageNo(preNo => preNo + 1);
    }
  };

  type RenderItemProps = {item: ShowContent; index: number};
  const renderShowItem = ({item, index}: RenderItemProps): ReactElement => {
    return (
      <ShowItem
        data={item}
        index={index}
        style={[
          index === 0 || index === 1 || index === 2
            ? styles.listItemFirst
            : styles.listItem,
          {
            marginLeft: index % 3 == 0 ? 10 : 0,
          },
        ]}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<View style={styles.headerComponent} />}
        data={searchShowItems(listItems, searchTextValue)}
        renderItem={renderShowItem}
        numColumns={3}
        onEndReached={() => {
          updateListItems();
        }}
        showsVerticalScrollIndicator={false}
      />
      <HeaderBar
        title="Romantic Comedy"
        style={styles.header}
        searchText={searchTextValue}
        onSearchTextChange={(teext: string) => {
          setSearchText(teext);
        }}
        onSearchClose={() => {
          setSearchText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
  },
  listItemFirst: {
    width: Dimensions.get('window').width / 3 - 13.3,
    height: Dimensions.get('window').height / 3 - 16,
    marginRight: 10,
    marginTop: 16,
  },
  listItem: {
    width: Dimensions.get('window').width / 3 - 13.3,
    height: Dimensions.get('window').height / 3 - 32,
    marginRight: 10,
    marginTop: 32,
  },
  headerComponent: {
    height: Platform.OS === 'ios' ? (DeviceInfo.hasNotch() ? 90 : 70) : 56,
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
  },
});

export default ShowsList;
