// Custom imports
import openDatabase from './openDatabase';

interface SQLiteOutput {
    insertId: any;
    rows: SQLiteResult;
    rowsAffected: number;
}

interface SQLiteResult {
    item: () => void;
    length: number;
    raw: () => void;
}

/**
 * Execute Function
 *
 * Executes any query, compatible with prepared statements
 * @param { string } query
 * @param { array } params
 * @param { string } databaseName
 * @returns { array } rows
 */
const execute = (
    sql: string,
    params: any[] = [],
    databaseName: string = 'local_frietreviews',
): Promise<Object[]> => {
    const db: any = openDatabase(databaseName);
    return new Promise((resolve: any, reject: (reason?: any) => void): void => {
        db.transaction((trans: any): void => {
            trans.executeSql(
                sql,
                params,
                (trans: {}, results: SQLiteOutput) => {
                    resolve(results.rows.raw());
                },
                (error: unknown) => {
                    reject(error);
                },
            );
        });
    });
};

export { execute };
