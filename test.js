const fetch = require("node-fetch");

const command = `fetch("http://localhost:8080/operator/session/login", {"credentials":"omit","headers":{"accept":"application/json, text/plain, */*","accept-language":"en-US,en;q=0.9,la;q=0.8,pl;q=0.7","content-type":"application/json"},"referrer":"http://localhost:3002/login/admin","referrerPolicy":"no-referrer-when-downgrade","body":"{\\"login\\":\\"asdf\\",\\"password\\":\\"asdf\\"}","method":"POST","mode":"cors"})`;

const runFetch = async (cmd, that) => {
    const response = await (await eval(cmd)).json();
    // console.log(response);

    if (response.status === 500) {
        that.stats.errors++;
    } else {
        that.stats.success++;
    }
};

(async () => {
    const that = {stats: {errors: 0, success: 0}};
    await run(command, that);
    console.log(that);
})();


