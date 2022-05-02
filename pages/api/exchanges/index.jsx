import headers from '../headers';

async function getCryptos(req, res) {

    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exchanges/list`, {
        method: 'GET',
        headers: headers
    });

    const json = await result.json();

    res.status(200).json({
        data: json
    });

}

export default async function(req, res) {

    if (req.method == 'GET'){
        getCryptos(req, res);

    } else {
        res.status(405).send()

    }

}