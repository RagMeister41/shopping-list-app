import React from 'react';
import List from './List';
import Form from './Form';

const Main = ({ items, handleAddItems, onDeleteItem, onDoneItem }) => {
    const [sortby, setSortBy] = React.useState('input');
    const [search, setSearch] = React.useState('');
    const [filter, setFilter] = React.useState('all');

    let sortItems = [...items];
    if (sortby === 'quantity') {
    sortItems.sort((a, b) => a.quantity - b.quantity);
    } else if (sortby === 'product') {
    sortItems.sort((a, b) => a.product.localeCompare(b.product));
    } else if (sortby === 'packed') {
    sortItems.sort((a, b) => Number(a.packed) - Number(b.packed));
    } else if (sortby === 'unpacked') {
    sortItems.sort((a, b) => Number(b.packed) - Number(a.packed));
    }

    let filteredItems = sortItems.filter((item) => {
    if (filter === 'packed') return item.packed;
    if (filter === 'unpacked') return !item.packed;
    return true;
    });

    if (search.trim() !== '') {
    filteredItems = filteredItems.filter((item) =>
        item.product.toLowerCase().includes(search.toLowerCase())
    );
    }

    return (
    <div>
        <Form handleAddItems={handleAddItems} />
        <ul className="mainWrapper">
        {filteredItems.map((item) => (
            <List
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onDoneItem={onDoneItem}
            />
        ))}
        </ul>

        <div>
        <select className="select" value={sortby} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="packed">Sort by Packed</option>
            <option value="unpacked">Sort by Unpacked</option>
            <option value="quantity">Sort by Quantity</option>
            <option value="product">Sort by Product</option>
        </select>

        <input
            className="searchInput"
            type="text"
            placeholder="Search items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />

        <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="packed">Packed</option>
            <option value="unpacked">Unpacked</option>
        </select>
        </div>
    </div>
    );
};

export default Main;
