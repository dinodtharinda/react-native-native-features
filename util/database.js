import * as SQLite from "expo-sqlite/legacy";

// Open the database with openDatabase (this is the correct method)
const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        );`,
        [],
        () => {
          console.log("database initailized!");
          resolve(); // Resolve promise on success
        },
        (_, error) => {
          reject(error); // Reject promise on error
        }
      );
    });
  });

  return promise;
}
