class UsersRepositoryFake{
    async add(data){
       const user = {
           id: 'an_id',
             ...data,
        };

        return user;
    }

    async findByEmail(email){
        const user =
          email ===  'exist@email.com'
            ? {
                id:'any_id',
                email,
                password:'any_password',
              }
            : null;

        console.log('FIND BY EMAIL - REPOSITORIO FAKE')
        console.log(user)

        return user;
    }
};

module.exports = UsersRepositoryFake;
