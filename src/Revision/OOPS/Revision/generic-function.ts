function printMyAge<T extends number>(year: T) {
  return year;
}

printMyAge<number>(1999);
