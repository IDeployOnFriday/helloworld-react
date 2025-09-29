import React from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function SearchPage() {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <>
            <header>
                <a className="logo" href="/">
                    Wanda’s Fruits
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