import React from 'react';
import { X, Search } from 'react-feather';



function SearchForm2() {
    const [
        showSearchField,
        setShowSearchField,
    ] = React.useState(false);

    let searchId;
    searchId = React.useId();


    function handleToggleSearch(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setShowSearchField(!showSearchField);
    }

    return (
        <>
            <form>
                {showSearchField && (
                    <div className="search-field-wrapper">
                        <label
                            htmlFor={searchId}
                        >
                            <div>
                                Search
                            </div>
                        </label>
                        <input
                            id={searchId}
                            className="search-field"
                        />
                    </div>
                )}
                <button
                    className="search-toggle-button"
                    onClick={handleToggleSearch}
                >
                    {showSearchField ? <X /> : <Search />}
                    <div>
                        Toggle search field
                    </div>
                </button>
            </form>
        </>
    );
}

export default SearchForm2;