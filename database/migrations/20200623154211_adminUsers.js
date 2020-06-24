
exports.up = function(knex, Promise) {
    return knex.schema.createTable("admin_users", user => {
        user.increments();
        user.varchar("username", 24).notNullable().unique();
        user.varchar("password", 24).notNullable();
        user.text("first_name", 255).notNullable();
        user.text("last_name", 255).notNullable();
        user.varchar("email", 255).notNullable().unique();
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('admin_users');
};
