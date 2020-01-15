import React from 'react';

import Card from '../components/Card';

function Books(props) {
    const { match: { params }, books } = props;
    const filteredBooks = params.topic ? books.filter(book => book.topic === params.topic) : books;
    return (
        <main id="books">
            <div className="mdc-layout-grid">
                <div className="mdc-layout-grid__inner">
                    {filteredBooks.map((book, index) =>
                        <div key={index} className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
                            <Card book={book} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Books;