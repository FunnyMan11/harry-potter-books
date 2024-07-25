import Book from "./Book"

function BookList() {

    function foo() {
        alert("you clicked button")
    }

    const data =[
        {
            name: "Harry Potter and the Sorcerer’s Stone", 
            description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            imgLink:"https://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg",
            year: "1997"
        },
        {
            name: "Harry Potter and the Sorcerer’s Stone", 
            description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            imgLink:"https://sportshub.cbsistatic.com/i/2022/06/10/4070adc6-36b5-41c8-8266-995f068c8180/english-harry-potter-2-epub-9781781100226.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart",
            year: "1998"
        },
        {
            name: "Harry Potter and the Prisoner of Azkaban", 
            description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
            imgLink:"https://m.media-amazon.com/images/I/81NQA1BDlnL._SL1500_.jpg",
            year: "1999"
        }
    ]

    return (
        <>

            {data.map((book)=> 
                <Book 
                    name={book.name} 
                    description={book.description} 
                    imgLink = {book.imgLink}
                    year = {book.year}
            />)}
            {/* <Book
                name="Harry Potter and the Sorcerer’s Stone"
                description="An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                imgLink="https://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg"
                year="1997"
                likes = {["diego", "niko"]}
                button={foo}
            />
            <Book
                name="Harry Potter and chamber of secrets"
                description="An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                imgLink="https://sportshub.cbsistatic.com/i/2022/06/10/4070adc6-36b5-41c8-8266-995f068c8180/english-harry-potter-2-epub-9781781100226.jpg?auto=webp&width=1200&height=1800&crop=0.667:1,smart"
                year="1998"
                button={foo}
            />
            <Book
                name="Harry Potter and the Prisoner of Azkaban"
                description="An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
                imgLink="https://m.media-amazon.com/images/I/81NQA1BDlnL._SL1500_.jpg"
                year="1999"
                button={foo}
            /> */}
        </>
    )
}

export default BookList
