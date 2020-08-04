
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tickets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          id: 1, 
          name: 'Test ticket',
          description: "This is a test ticket. Inserting random information now thanks",
          created_by: "testuser",
          assigned_to: "tbelk1234",
          created_at: Date.now()
        },
        {
          id: 2, 
          name: 'Test ticket 2',
          description: "This is another test ticket. Inserting random information now thanks",
          created_by: "testuser",
          assigned_to: "tbelk1234",
          created_at: Date.now()
        },
      ]);
    });
};
