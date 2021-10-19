// Package imports
import React, { FC, useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

// Component imports
import Card from '@components/Card';

// Context imports
import { ItemContext } from '@contexts/ItemContext';

// Style imports
import styles from './styles';

// Type imports
import { Items, ItemContextProps } from '@custom-types/Item';

// Custom imports
import Database from '@config/database';

/**
 * CardList component
 *
 * @returns { JSX.Element }
 */
const CardList: FC = (): JSX.Element => {
    const { items, setItems } = useContext(ItemContext) as ItemContextProps;

    useEffect(() => {
        fetchItems();
    }, []);

    /**
     * FetchItems Function
     *
     * Fetches all items database and sets state
     */
    const fetchItems = async (): Promise<void> => {
        const db: Database = new Database();
        const currentItems: Items = await db.getItems();
        setItems(currentItems);
    };

    /**
     * RenderCard Function
     *
     * @param { object }
     * @returns { JSX.Element } Card
     */
    const renderCard = ({ item, index }: any): JSX.Element => (
        <Card
            id={item.id}
            name={item.name}
            location={item.location}
            image_url={item.image_url}
            stars={item.stars}
            firstItem={index === 0}
        />
    );

    return (
        <FlatList
            data={items}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            style={styles.flatList}
        />
    );
};

export default CardList;
