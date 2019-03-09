
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, title: 'Get Milk', completed: false},
        {id: 2, title: 'Get Eggs', completed: false},
        {id: 3, title: 'Get Bread', completed: true}
      ]);
    });
};
