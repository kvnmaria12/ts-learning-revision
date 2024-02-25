// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   userName: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<>('url');
// result.data?.userName;
interface ProductDetails<T> {
  id: number;
  name: string;
  data: T | null;
}

function fetchData<T>(): ProductDetails<T> {
  return { id: 2, name: 'Clean', data: null };
}

interface Product {
  title: string;
}

let result = fetchData<Product>();

result.data?.title;
