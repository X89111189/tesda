class Github {
constructor(){
    this.client_id ='b1f9f73d2d574605aa8c';
    this.client_secret = '837aefaf2f678290fbba6cbdaa023adf3616c1e2';
    this.repos_count = 5;
    this.repos_sort = 'create asc';
}   

async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
        profile,
        repos
    } 
}

}