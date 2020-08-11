
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin_users').insert([
        {
          id: 1, 
          username: 'testuser1',
          password: 'password1',
          first_name: 'John',
          last_name: 'Doe',
          email: 'TestUser1@gmail.com',
        },
        {
          id: 2,
          username: "tbelk1234",
          password: "password1",
          first_name: "Taylor",
          last_name: "Belk",
          email: "tbelk1234@gmail.com"
        }
      ]);
    });
};
