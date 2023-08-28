export const storeWidthPreferences = (columns) => {
    const preferences = columns.map((column) => {
        return {
            key: column.key,
            width: column.width,
        }
    });
    localStorage.setItem('columns', JSON.stringify(preferences));
}
 const getWidthPreferences = (key) => {
    const preferences = localStorage.getItem('columns');
    const parsedPreferences = JSON.parse(preferences);
    const column = parsedPreferences.find((column) => column.key === key);
    return column.width || 120;

}


export const tableMock = [
    {key: '1', name: 'John', age: 25, address: '123 Main St', city: 'New York'},
    {key: '2', name: 'Jane', age: 30, address: '456 Elm St', city: 'Los Angeles'},
    {key: '3', name: 'Alex', age: 28, address: '789 Oak Ave', city: 'Chicago'},
    {key: '4', name: 'Emily', age: 22, address: '567 Pine Rd', city: 'Houston'},
    {key: '5', name: 'Michael', age: 35, address: '101 Maple Ln', city: 'Miami'},
    {key: '6', name: 'Sophia', age: 29, address: '222 Elm St', city: 'San Francisco'},
    {key: '7', name: 'William', age: 32, address: '333 Oak Ave', city: 'Seattle'},
    {key: '8', name: 'Olivia', age: 27, address: '444 Pine Rd', city: 'Boston'},
    {key: '9', name: 'Ethan', age: 26, address: '555 Maple Ln', city: 'Denver'},
    {key: '10', name: 'Ava', age: 23, address: '666 Birch Rd', city: 'Austin'},
];

export const columnsMock = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: getWidthPreferences('name'),
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: getWidthPreferences('age'),
        sorter: (a, b) => a.age - b.age,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        width: getWidthPreferences('city'),
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        sorter: (a, b) => a.address.length - b.address.length,
        width: getWidthPreferences('address'),
        sortDirections: ['descend', 'ascend'],
    },
];

