

const fetchSearch = async () => {
    values = await fetch(`http://localhost:3001/posts/`)
        .then(res => res.json())
        .then(res => res.values)
    console.log(values);
}

const affichage = async () => {
    await fetchSearch()

    results.innerHTML = (
        values.map(value => (
            console.log(value)
        ))
    );
};

fetchSearch();
//affichage();


