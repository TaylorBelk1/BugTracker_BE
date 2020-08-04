
exports.up = function(knex, Promise) {
    return knex.schema.createTable("tickets", t => {
        t.increments();
        t.varchar("name", 255).notNullable();
        t.varchar("description", 255).notNullable();
        t
            .text("created_by", 255)
            .references("username")
            .inTable("admin_users")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        t
            .text("assigned_to", 255)
            .references("username")
            .inTable("admin_users")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        t.timestamp('created_at', { useTz: true });
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tickets');
};
