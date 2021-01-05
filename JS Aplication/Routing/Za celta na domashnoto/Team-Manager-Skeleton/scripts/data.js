function host(endpoint) {
return `https://api.backendless.com/5ECF8265-EE34-B819-FF90-46052DCF4900/AB267A93-C400-44B7-BD34-9F743C1980C5/${endpoint}`
}

const endpoints = {
    REGISTER: 'users/register',
    LOGIN: 'users/login',
    TEAMS: 'data/teams',
    UPDATE_USER: 'users/',
    LOGOUT: 'users/logout'
};

export async function register(username, password) {
    return (await fetch(host(endpoints.REGISTER), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();
}

export async function login(username, password) {
    return (await fetch(host(endpoints.LOGIN), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: username,
            password
        })
    })).json();
}

export async function logout() {
    const token = localStorage.getItem('userToken');
    if(!token){
        throw new Error('User is not logged in!')
    }

    return fetch(host(endpoints.LOGOUT), {
        method: 'GET',
        headers: {
            'user-token': token
        },
    })

}

async function setUserTeamId(userId, teamId) {
    const token = localStorage.getItem('userToken');
    if(!token){
        throw new Error('User is not logged in!')
    }

    return (await fetch(host(endpoints.UPDATE_USER + userId), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify({
            teamId
        })
    })).json();
}

export async function createTeam(team) {

    const token = localStorage.getItem('userToken');
    if(!token){
        throw new Error('User is not logged in!')
    }

    const result = await (await fetch(host(endpoints.TEAMS), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user-token': token
        },
        body: JSON.stringify(team)
    })).json();

    if(result.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, result);
        throw error;
    }

    //Assign teamId to user
    const userUpdateResult = await setUserTeamId(result.ownerId, result.objectId)
    
    if(userUpdateResult.hasOwnProperty('errorData')) {
        const error = new Error();
        Object.assign(error, userUpdateResult);
        throw error;
    }

    return result;
   
}

export async function getTeamById (id) {
    return (await fetch(host(endpoints.TEAMS + '/' + id))).json();
}

export async function getTeams () {
    return (await fetch(host(endpoints.TEAMS))).json();
}