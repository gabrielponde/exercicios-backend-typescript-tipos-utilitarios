type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type ConnResult = Readonly<{
    driver: string;
    url: string;
}>;

const conexao = (dados: Conn): ConnResult => {
    const { username, password, host, port, dbname } = dados;
    const config = {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`,
    };
    return Object.freeze(config);
};