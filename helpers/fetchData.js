const fetchData = async (tipo, data) => {
    const body = data.body;
    const params = data.params;
    const query = data.query;

    const urlBase = process.env.URL_BASE
    let url;
    let options = {};

    switch (tipo) {
        case ('getEntries'):
            url = `${urlBase}/entries`;
            break;

    }

    try {
        const request = await fetch(url, options);
        const response = await request.json();
        if (!response) return {
            ok: false,
            msg: 'Error fetchData',
            response
        };

        return {
            ok: true,
            response
        }
    } catch (e) {
        return {
            ok: false,
            msg: 'Error en fetchData',
            body,
            params,
            query,
            error: e
        }
    }
}

module.exports = { fetchData }