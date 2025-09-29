
type SearchResults = {
    searchTerm : string
}


function SearchResults({searchTerm} : SearchResults) {
    return (
        <p>
            You searched for: {searchTerm}.
        </p>
    );
}

export default SearchResults;