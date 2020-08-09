
exports.up = function(knex, Promise) {
    return knex.schema.createTable("admin_users", user => {
        user.increments();
        user.text("username", 24).notNullable().unique();
        user.text("password", 24).notNullable();
        user.text("first_name", 255).notNullable();
        user.text("last_name", 255).notNullable();
        user.text("email", 255).notNullable().unique();
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin_users');
};
