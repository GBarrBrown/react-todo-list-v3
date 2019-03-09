
exports.up = function(knex, Promise) {
    return knex.schema.createTable('todos', table => {
        table.increments('id').primary()
        table.string('title')
        table.boolean('completed').defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('todos')
  
};
