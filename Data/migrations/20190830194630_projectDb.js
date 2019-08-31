
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.string('name')
           .notNullable();
        tbl.text('description');
        tbl.boolean('completed')
           .defaultTo(false);
      }).createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name')
           .notNullable()
           .unique();
        tbl.text('description')
      }).createTable('task', tbl => {
        tbl.increments();
        tbl.integer('project_id')
        tbl.text('description')
           .notNullable();
        tbl.text('note');
        tbl.boolean('completed')
           .defaultTo(false);
      })     
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task');
    return knex.schema.dropTableIfExists('resource');
    return knex.schema.dropTableIfExists('project');
};
