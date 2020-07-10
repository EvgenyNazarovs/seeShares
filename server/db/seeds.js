use shares_db;
db.dropDatabase();

db.shares.insertMany([
  {
    'FB': 5
  }
]);
