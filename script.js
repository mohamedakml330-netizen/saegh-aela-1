fetch("https://www.goldapi.io/api/XAU/EGP", {
    headers: {
        "x-access-token": "goldapi-395db2c868032a93dd29f6071dcd1585-io"
    }
})
.then(res => {
    alert("Status: " + res.status);
    return res.text();
})
.then(data => {
    console.log(data);
    alert(data);
})
.catch(err => {
    alert(err);
});
