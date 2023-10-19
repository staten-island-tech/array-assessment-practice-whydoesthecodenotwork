const books = [
	{
		name: "To Kill a Mockingbird",
		authorFirst: "Harper",
		authorLast: "Lee",
		publishDate: 1960,
		genre: ["mystery", "historical", "fiction"],
	},
	{
		name: "The Great Gatsby",
		authorFirst: "F. Scott",
		authorLast: "Fitzgerald",
		publishDate: 1925,
		genre: ["mystery", "historical", "fiction"],
	},
	{
		name: "The Hobbit",
		authorFirst: "JRR",
		authorLast: "Tolkien",
		publishDate: 1937,
		genre: ["fantasy", "fiction"],
	},
	{
		name: "Harry Potter and the Deathly Hallows",
		authorFirst: "JK",
		authorLast: "Rowling",
		publishDate: 1997,
		genre: ["fantasy", , "fiction"],
	},
	{
		name: "Ulysses",
		authorFirst: "James",
		authorLast: "Joyce",
		publishDate: 1918,
		genre: ["historical", "non-fiction"],
	},
	{
		name: "War and Peace",
		authorFirst: "Leo",
		authorLast: "Tolstoy",
		publishDate: 1867,
		genre: ["historical", "fiction"],
	},
	{
		name: "Pride and Prejudice",
		authorFirst: "Jane",
		authorLast: "Austen",
		publishDate: 1813,
		genre: ["fiction"],
	},
	{
		name: "The Catcher in the Rye",
		authorFirst: "JD",
		authorLast: "Salinger",
		publishDate: 1951,
		genre: ["fiction"],
	},
	{
		name: "Great Expectations",
		authorFirst: "Charles",
		authorLast: "Dickens",
		publishDate: 1861,
		genre: ["historical", "fiction"],
	},
	{
		name: "Little Women",
		authorFirst: "Lousia May",
		authorLast: "Alcott",
		publishDate: 1868,
		genre: ["womens", "historical", "fiction"],
	},
];

const titles = [
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"The Hobbit",
	"Harry Potter and the Deathly Hallows",
	"Ulysses",
	"War and Peace",
	"Pride and Prejudice",
	"The Catcher in the Rye",
	"Great Expectations",
	"Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
console.log("Array of authors and the book they wrote");
authors = [];
books.forEach((book) =>
	authors.push(
		`${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`
	)
);
console.log(authors);

//Sort books from oldest to most recent
console.log("Sort books from oldest to most recent");
console.log(
	Array.from(books).sort((a, b) => {
		// toSorted does not modify the array it is used on (books), unlike sort.
		// however node screams at me for trying to use it, even though microsoft edge is perfectly ok with it.
		// so use Array.from() to create a copy of books
		return a.publishDate - b.publishDate;
	})
);

//sort books alphabetically
console.log("sort books alphabetically");
console.log(
	Array.from(books).sort((a, b) => {
		return a.name < b.name ? -1 : a.name === b.name ? 0 : 1;
		// absolutely evil tertiary chaining. because mdn said if a is equal to b then return 0
		// a.name < b.name ? -1 : (a.name === b.name ? 0 : 1)
	})
);

//Find who wrote War and Peace
console.log("Find who wrote War and Peace");
const warandpeas = books[titles.indexOf("War and Peace")];
console.log(`${warandpeas.authorFirst} ${warandpeas.authorLast}`);

//how many books were written before 1900?
console.log("how many books were written before 1900?");
console.log(books.filter((item) => item.publishDate < 1900).length);

//was there at least one book published within the last 100 years?
console.log("was there at least one book published within the last 100 years?");
const year = new Date().getFullYear();
console.log(
	books.filter((item) => year - item.publishDate <= 100).length > 0
		? "yes"
		: "no"
);

//was every book published within the last 100 years?
console.log("was every book published within the last 100 years?");
console.log(
	/* 	books.filter((item) => year - item.publishDate <= 100).length ===
		books.length
		? "yes"
		: "no" */
	// this works, but i just found out .every exists.
	books.every((item) => year - item.publishDate <= 100) ? "yes" : "no"
);

//print a list of books that "includes" the genre historical
console.log('print a list of books that "includes" the genre historical');
console.log(books.filter((item) => item.genre.includes("historical")));
