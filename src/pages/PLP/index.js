/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FlatList, Item} from 'react-native-gesture-handler';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const CATEGORY = gql`
    query product($id: String!){
      categoryList (filters: {ids: {eq: $id}}){
      id
      name
      image_path
      description
        products {
          items {
              id
              name
              sku
              url_key
              price_range {
                  minimum_price {
                    regular_price {
                      currency
                      value
                    }
                    final_price {
                      currency
                      value
                    }
                  }
                }
              small_image {
                url
                label
              }
          }
        }
      }
  	}
`;

const PLP = ({navigation}) => {
    const {loading, data, error} = useQuery(CATEGORY, {
        variables: {id: '533'},
    });
    const Item = ({data}) => {
      const product = data.items;
      console.log(product.id);
      return (
        <View>
          <Text>{product.id}</Text>
          <Text>{product.name}</Text>
          <Text>{product.sku}</Text>
        </View>
      );
    };
    if (loading){
        return <Text>Loading...</Text>;
    }
    if (error){
        return <Text>Error</Text>;
    }
    const categoryDetail = data.categoryList[0];
    const itemProduct = categoryDetail.products.items;
  return (
    <View>
        <View>
          <FlatList
            data={itemProduct}
            renderItem={items => <Item data={items} />}
            keyExtractor={items => items.id}
          />
        </View>
  </View>
  );
};

export default PLP;
