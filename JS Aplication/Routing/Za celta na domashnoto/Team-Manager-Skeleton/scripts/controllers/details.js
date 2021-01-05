import { getTeamById } from '../data.js'


export default async function () {
    
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        teamMember: await this.load('./templates/catalog/teamMember.hbs'),
        teamControls: await this.load('./templates/catalog/teamControls.hbs')
        
    };

    
    
    const data = await getTeamById(this.params.id);
    
       /* {
        teamId: '45454545',
        name: 'Cherry',
        comment: 'Some comment',
        members: [
            {username: 'Peter'},
            {username: 'George'},
            {username: 'Mary'},
        ],
        isAuthor: true
    };
    */

    Object.assign(data, this.app.userData);
    
    if(data.ownerId === this.app.userData.userId){
        data.isAuthor = true;
    }

    if(data.objectId === this.app.userData.teamId) {
        data.isOnTeam = true;

    }
    
    /*
    data.teams = [
        {
            _id: '1213543543',
            name: 'Cherry',
            comment: 'Some comment'
        },
        {
            _id: '4442424242',
            name: 'Apple',
            comment: 'Some comment'
        },
        {
            _id: '999999',
            name: 'Banana',
            comment: 'Some comment'
        },
    ];

    */

    this.partial('./templates/catalog/details.hbs', data);
}