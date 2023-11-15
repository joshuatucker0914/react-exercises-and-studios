export default function HobbyLinks() {
    const music = "https://www.rollingstone.com/wp-content/uploads/2021/02/uDTp9vKPTpDpi5BbQpx3qauy.jpg";
    const writing = "https://www.japantimes.co.jp/uploads/imported_images/uploads/2019/01/n-manga-a-20190127.jpg";
    const hobbyLinks = [music, writing];

    return(
        <div>
            <h1 class ="hobbyHead">My Hobbies</h1>
        <a href= {hobbyLinks[0]}> Music</a>
        <br />
        <a href={hobbyLinks[1]}>Writing</a>
        </div>
    );
}