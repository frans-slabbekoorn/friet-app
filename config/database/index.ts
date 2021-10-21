// Package imports
import { Alert } from 'react-native';
import { v4 as uuid } from 'uuid';

// Type imports
import { Item } from '@custom-types/Item';

// Custom imports
import initial from './initial';
import executeMigrations from './migrations';
import { search, insert, deleteRow, update } from './query';

/**
 * Database Class
 *
 * This class gets called in view where method are executed
 */
export default class Database {
    constructor() {
        const initializeDatabase = async (): Promise<void> => {
            await initial();
            await executeMigrations();
        };

        // Initialize Database functions and execute migrations
        initializeDatabase();
    }

    /**
     * GetItem Method
     *
     * Fetches 1 item based on uuid
     * @param { string }
     * @returns { array } item
     */
    getItem = async (uuid: string): Promise<any> => {
        if (!uuid) return {};

        const item: any = await search({
            table: 'items',
            where: { id: uuid },
        });
        if (item.length === 0) return {};

        const positives: any = await search({
            table: 'positives',
            where: { items_id: item[0].id },
        });
        const negatives: any = await search({
            table: 'negatives',
            where: { items_id: item[0].id },
        });
        positives.forEach((positive: any, i: number): void => (positives[i] = positive.positive));
        negatives.forEach((negative: any, i: number): void => (negatives[i] = negative.negative));

        return {
            ...item[0],
            positives,
            negatives,
        };
    };

    /**
     * GetItems Method
     *
     * @returns { array } items
     */
    getItems = async (): Promise<Item[]> => {
        return search({
            table: 'items',
            sort: { order: ['stars'], asc: false },
        });
    };

    /**
     * FilterItems Method
     *
     * Filters items if searched
     * @param { string } filter
     * @returns { array } items
     */
    filterItems = async (filter: string = ''): Promise<any> => {
        if (!filter) return await this.getItems();

        const items: any[] = await search({
            table: 'items',
            where: {
                name: ['%' + filter + '%', 'LIKE'],
            },
        });
        const idsByPositives: any = await search({
            table: 'positives',
            select: ['items_id'],
            where: {
                positive: ['%' + filter + '%', 'LIKE'],
            },
        });

        let itemsByPositives = [];
        for (let i = 0; i < idsByPositives.length; i++) {
            const itemByPositives: any = await search({
                table: 'items',
                where: {
                    id: idsByPositives[i].items_id,
                },
            });

            if (itemByPositives.length > 0) {
                for (let j = 0; j < items.length; j++) {
                    if (items[j].id === itemByPositives[0].id) {
                        itemsByPositives.push(itemByPositives[0]);
                        break;
                    }
                }
            }
        }
        itemsByPositives = itemsByPositives.concat(items);

        return itemsByPositives.sort((a, b): number => (a.stars > b.stars ? -1 : 1));
    };

    /**
     * InsertItem Method
     *
     * @param { array, array, array }
     */
    insertItem = async (item: Item): Promise<void> => {
        const checkForItem: object[] = await search({
            table: 'items',
            select: ['id'],
            where: { name: item.name },
        });
        if (checkForItem.length > 0) return;

        const id: string = uuid();
        try {
            await insert('items', [
                {
                    id,
                    name: item.name,
                    location: item.location,
                    image_url: item.image_url,
                    stars: item.stars,
                },
            ]);

            item.positives.forEach(async (positive: string): Promise<void> => {
                await insert('positives', [
                    {
                        id: uuid(),
                        items_id: id,
                        positive: positive,
                    },
                ]);
            });

            item.negatives.forEach(async (negative: string): Promise<void> => {
                await insert('negatives', [
                    {
                        id: uuid(),
                        items_id: id,
                        negative: negative,
                    },
                ]);
            });
        } catch {
            Alert.alert('');
            return;
        }
    };

    /**
     * ChangeItem Method
     *
     * Change item based on id in item
     * @param { array, array, array }
     */
    changeItem = async (item: Item): Promise<any> => {
        await update(
            'items',
            {
                name: item.name,
                location: item.location,
                image_url: item.image_url,
                stars: item.stars,
            },
            { id: item.id },
        );

        await this.changeTags(item, item.positives, { table: 'positives', column: 'positive' });
        await this.changeTags(item, item.negatives, { table: 'negatives', column: 'negative' });
    };

    /**
     * changeTags Method
     *
     * @param { Item, string[], string }
     */
    changeTags = async (item: Item, tags: string[], type: { table: string; column: string }) => {
        const existingTags = await search({
            table: type.table,
        });
        existingTags.forEach(async tagType => {
            if (!tags.includes(tagType[type.column])) {
                await deleteRow(type.table, {
                    items_id: item.id,
                    [type.column]: tagType[type.column],
                });
            }
        });

        tags.forEach(async (tag: string): Promise<void> => {
            const tagExists: any[] = await search({
                table: type.table,
                select: [type.column],
                where: { items_id: item.id, [type.column]: tag },
            });

            if (tagExists.length === 0) {
                await insert(type.table, [
                    {
                        id: uuid(),
                        items_id: item.id,
                        [type.column]: tag,
                    },
                ]);
            }
        });
    };

    /**
     * RemoveItem Method
     *
     * Removes item from database based on item uuid
     *
     * @param { string } uuid
     */
    removeItem = async (uuid: string): Promise<any> => {
        await deleteRow('items', { id: uuid });
        await deleteRow('positives', { items_id: uuid });
        await deleteRow('negatives', { items_id: uuid });
    };
}
