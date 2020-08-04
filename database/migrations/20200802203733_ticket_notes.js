
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ticket_notes", t => {
        t.increments();
        t.timestamp('created_at', { useTz: true });
        t
            .text("created_by", 255)
            .references("username")
            .inTable("admin_users")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        t
            .integer("ticket_id")
            .references("id")
            .inTable("tickets")
            .notNullable()
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        t.text("note", 255).notNullable();
        
      });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ticket_notes');
};
