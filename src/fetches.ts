type dataObject = {
    id: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
};

const url =
    'https://raw.githubusercontent.com/ipz201chia/mobilelabsipz201_chia/main/data.json';

export async function getNews() {
    return await fetch(url)
        .then(response => response.json())
        .catch(err => console.error(err));
}

export async function getImages() {
    return await fetch(url)
        .then(response => response.json())
        .then(data =>
            data.map((obj: dataObject) => {
                return {id: obj.id, urlToImage: obj.urlToImage};
            }),
        )
        .catch(err => console.error(err));
}
