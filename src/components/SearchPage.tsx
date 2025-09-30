import SearchForm from "./SearchForm.tsx";
import SearchResults from "./SearchResults.tsx";
import React from "react";


function SearchPage() {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <>
            <header>
                <a className="logo" href="/">
                    Playing with moving state
                </a>
                <SearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            </header>
            <main>
                <SearchResults searchTerm={searchTerm} />
            </main>
        </>
    );
}

export default SearchPage;