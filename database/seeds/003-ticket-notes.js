
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ticket_notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ticket_notes').insert([
        // {
        //   id: 1, 
        //   created_by: "tbelk1234",
        //   created_at: Date.now().toString(),
        //   ticket_id: 1,
        //   note: "This is a random note for a test ticket. There is an issue somewhere that we need to fix!"
        // },
        // {
        //   id: 2, 
        //   created_by: "tbelk1234",
        //   created_at: Date.now().toString(),
        //   ticket_id: 1,
        //   note: "This is another random note for a test ticket. There is an issue somewhere that we need to fix!"
        // }
      ]);
    });
};
