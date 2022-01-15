export async function nextjoke() {

    const requestOptions = {
    //    crossDomain:true,
        method: 'Get',
        // headers: new Headers({
        //   'Authorization': 'Bearer '+ token, 
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // }),
    };

    const response = await fetch('https://api.chucknorris.io/jokes/random', requestOptions);

    if(response.status == 200)
    {
        const data = await response.json();
        return {ok : true, data : data};  
    }

    return {ok : false, data : null}
}