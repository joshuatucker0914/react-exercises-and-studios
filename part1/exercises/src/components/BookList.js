export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://m.media-amazon.com/images/I/A1pUJruj-cL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://ew.com/thmb/D5m-fgiqGqYBYn_8K9jh1i6JuVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23_web-of-spider-man-32-artist-mike-zeck-1987-2000-cf4a84b2c4e34364a17b864400a5cf2f.jpg";
   let book3 = "https://i0.wp.com/blog.gocollect.com/wp-content/uploads/2021/01/Spawn-315_Cover_B_c6815a0147f8285e3b5042ebb3626151.jpg?ssl=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Mask comic book" />
         <img src={book2} alt="Spider Man comic book" />
         <img src={book3} alt="Spawn comic book"  className="spawn"/>
      </div>      
   );
}