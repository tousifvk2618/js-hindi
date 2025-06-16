myNums = [1,2,3,4,5,6,7,8,9,10]

const store = myNums.filter( (num) => num > 4 )

const store2 = myNums.filter( (num) => {
    return num + 4
} )

// console.log(store)
console.log(store2)

store3=[]
myNums.forEach(element => {
    if (element > 4){
        store3.push(element)
    }
});
// console.log(store3)





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



//   const history_books = books.filter( (bk) => bk.genre == 'History' )
//   console.log(history_books)

  const publish_books = books.filter( (bk) => {
    if (bk.publish > 1995 && bk.genre === 'History') {
        return bk
    }
  } )

  console.log(publish_books)