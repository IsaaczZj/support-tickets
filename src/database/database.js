import fs from "node:fs/promises";
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};
  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }
  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }
    this.#persist();
  }

  select(table, filters, id) {
    let data = this.#database[table] ? this.#database[table] : [];
    if (filters) {
      data = data.filter((row) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });

      return data;
    }
    if (id) {
      const rowIndex = this.#database[table].findIndex((row) => row.id === id);
      if (rowIndex > -1) {
        const ticket = this.#database[table][rowIndex];

        return ticket;
      }
    }
    return data;
  }

  update(table, id, newData) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...newData,
      };
      this.#persist();
    }
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id);
    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1);
      this.#persist();
    }
  }

  clearAll() {
    this.#database = {};
    this.#persist();
    return true;
  }
}
